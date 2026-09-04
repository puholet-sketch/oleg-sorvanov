"""Generate modern HH-style CV PDF for Oleg Sorvanov."""

from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import (
    Flowable,
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUT = Path(__file__).resolve().parents[1] / "public" / "Oleg_Sorvanov_CV_2026.pdf"
FONTS = Path(r"C:\Windows\Fonts")

pdfmetrics.registerFont(TTFont("CV", str(FONTS / "segoeui.ttf")))
pdfmetrics.registerFont(TTFont("CV-Bold", str(FONTS / "segoeuib.ttf")))

INK = HexColor("#111111")
MUTED = HexColor("#5C5C5C")
LINE = HexColor("#E6E6E6")
SOFT = HexColor("#F4F4F2")
ACCENT = HexColor("#1A1A1A")
CHIP_BG = HexColor("#F0F0EC")
CHIP_FG = HexColor("#222222")
LIME = HexColor("#B8E600")


class AccentBar(Flowable):
    def __init__(self, width, height=3 * mm):
        super().__init__()
        self.width = width
        self.height = height

    def draw(self):
        self.canv.setFillColor(ACCENT)
        self.canv.rect(0, 0, self.width * 0.84, self.height, fill=1, stroke=0)
        self.canv.setFillColor(LIME)
        self.canv.rect(self.width * 0.84, 0, self.width * 0.16, self.height, fill=1, stroke=0)


class ChipRow(Flowable):
    def __init__(self, items, max_width):
        super().__init__()
        self.items = items
        self.max_width = max_width
        self._rows = []
        self.height = 0
        self.width = max_width

    def wrap(self, availWidth, availHeight):
        width = min(self.max_width, availWidth)
        self.width = width
        font, size = "CV", 8
        pad_x, pad_y, gap = 7, 4.2, 5
        rows, row, row_w = [], [], 0
        for text in self.items:
            tw = stringWidth(text, font, size) + pad_x * 2
            need = tw if not row else tw + gap
            if row and row_w + need > width:
                rows.append(row)
                row, row_w = [text], tw
            else:
                row.append(text)
                row_w += need if len(row) > 1 else tw
        if row:
            rows.append(row)
        self._rows = rows
        line_h = size + pad_y * 2 + gap
        self.height = len(rows) * line_h - gap if rows else 0
        return width, self.height

    def draw(self):
        font, size = "CV", 8
        pad_x, pad_y, gap = 7, 4.2, 5
        y = self.height
        for row in self._rows:
            x = 0
            chip_h = size + pad_y * 2
            y -= chip_h
            for text in row:
                tw = stringWidth(text, font, size) + pad_x * 2
                self.canv.setFillColor(CHIP_BG)
                self.canv.roundRect(x, y, tw, chip_h, 3, fill=1, stroke=0)
                self.canv.setFillColor(CHIP_FG)
                self.canv.setFont(font, size)
                self.canv.drawString(x + pad_x, y + pad_y - 0.4, text)
                x += tw + gap
            y -= gap


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "name", parent=base["Normal"], fontName="CV-Bold", fontSize=22, leading=26, textColor=INK, spaceAfter=2
        ),
        "role": ParagraphStyle(
            "role", parent=base["Normal"], fontName="CV", fontSize=10.5, leading=14, textColor=MUTED, spaceAfter=6
        ),
        "contacts": ParagraphStyle(
            "contacts", parent=base["Normal"], fontName="CV", fontSize=8.5, leading=12, textColor=MUTED
        ),
        "h2": ParagraphStyle(
            "h2",
            parent=base["Normal"],
            fontName="CV-Bold",
            fontSize=9,
            leading=12,
            textColor=INK,
            spaceBefore=10,
            spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "body", parent=base["Normal"], fontName="CV", fontSize=9, leading=12.5, textColor=INK, spaceAfter=4
        ),
        "job": ParagraphStyle(
            "job", parent=base["Normal"], fontName="CV-Bold", fontSize=10, leading=13, textColor=INK
        ),
        "meta": ParagraphStyle(
            "meta",
            parent=base["Normal"],
            fontName="CV",
            fontSize=8.5,
            leading=11,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
        "meta_left": ParagraphStyle(
            "meta_left", parent=base["Normal"], fontName="CV", fontSize=8.5, leading=11, textColor=MUTED, spaceAfter=3
        ),
        "bullet": ParagraphStyle(
            "bullet",
            parent=base["Normal"],
            fontName="CV",
            fontSize=8.7,
            leading=11.8,
            textColor=INK,
            leftIndent=8,
            spaceAfter=1.6,
        ),
        "small": ParagraphStyle(
            "small", parent=base["Normal"], fontName="CV", fontSize=8.5, leading=11.5, textColor=MUTED
        ),
        "metric": ParagraphStyle(
            "metric", parent=base["Normal"], fontName="CV-Bold", fontSize=8, leading=10, textColor=INK, alignment=1
        ),
    }


def section_title(text, s):
    return KeepTogether(
        [
            Paragraph(text.upper(), s["h2"]),
            HRFlowable(width="100%", thickness=0.7, color=LINE, spaceBefore=0, spaceAfter=6),
        ]
    )


def job_header(title, dates, s, page_w):
    data = [[Paragraph(title, s["job"]), Paragraph(dates, s["meta"])]]
    t = Table(data, colWidths=[page_w * 0.72, page_w * 0.28])
    t.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
            ]
        )
    )
    return t


def bullets(items, s):
    return [Paragraph(f"• {item}", s["bullet"]) for item in items]


def build():
    s = styles()
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=16 * mm,
        rightMargin=16 * mm,
        topMargin=13 * mm,
        bottomMargin=13 * mm,
        title="Олег Сорванов — резюме 2026",
        author="Олег Сорванов",
    )
    page_w = A4[0] - 32 * mm
    story = []

    story.append(AccentBar(page_w))
    story.append(Spacer(1, 4.5 * mm))
    story.append(Paragraph("Олег Сорванов", s["name"]))
    story.append(Paragraph("Руководитель проектного офиса · IT-лидер · Delivery / PMO", s["role"]))
    story.append(
        Paragraph(
            "Москва · sorvanovon@yandex.ru · +7 977 363-93-00 · Telegram @puholet · "
            "puholet-sketch.github.io/oleg-sorvanov",
            s["contacts"],
        )
    )
    story.append(Spacer(1, 3 * mm))

    metrics = [
        [
            Paragraph("20+ лет в ИТ", s["metric"]),
            Paragraph("8 продакшн-команд", s["metric"]),
            Paragraph("60+ человек", s["metric"]),
            Paragraph("30K+ польз./день", s["metric"]),
        ]
    ]
    mt = Table(metrics, colWidths=[page_w / 4] * 4)
    mt.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), SOFT),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                ("LINEAFTER", (0, 0), (-2, -1), 0.6, white),
            ]
        )
    )
    story.append(mt)

    story.append(section_title("О себе", s))
    story.append(
        Paragraph(
            "IT-лидер страхового рынка. Путь от Oracle-разработчика и Team Lead до руководителя "
            "проектного офиса. Выстроил PMO-контур (план/факт, статус портфеля, стабилизация delivery, "
            "прозрачность экономики) и довёл до промышленной эксплуатации крупные B2B-продукты.",
            s["body"],
        )
    )

    story.append(section_title("Ключевые навыки", s))
    story.append(
        ChipRow(
            [
                "PMO / Program Mgmt",
                "Портфель проектов",
                "Delivery",
                "План/факт",
                "FP / T&M",
                "Стабилизация",
                "Jira / Confluence",
                "Scrum / Agile",
                "Micro Frontend",
                "Node.js",
                "TypeScript",
                ".NET",
                "Kubernetes",
                "PostgreSQL",
                "Oracle",
                "SOAP/REST",
                "Cursor AI",
            ],
            page_w,
        )
    )

    story.append(section_title("Опыт", s))

    story.append(job_header("ВИРТУ СИСТЕМС — Руководитель проектного офиса", "01.2023 — н.в.", s, page_w))
    story.append(Paragraph("Портфель delivery · страховой рынок · 8 команд / 60+ чел.", s["meta_left"]))
    story.extend(
        bullets(
            [
                "Руководство проектным офисом и 8 продакшн-командами: VFOS B2B, ОФР, Аутстафф, VirtuDrive, РГС Ипотека, Согласие Ипотека, Согласие ВИТА и НПФ, ВСК / МСГ",
                "Клиенты: ВСК, АльфаСтрахование, Райффайзен, Сбер, Росгосстрах, Ингосстрах, Гелиос, МСГ и др.",
                "Выстроил операционный контур PMO: единый ритм статусов, эскалации, контроль загрузки и поставки по командам",
                "Внедрил контроль превышений план/факт (Plan-Fact × Jira): еженедельный разбор по людям и задачам",
                "Запустил регулярный статус портфеля для руководства: один дайджест по СК, командам, поставкам, ТП и матрице PM",
                "Провёл программы стабилизации на проектах СК (24+ инициатив): релизы, шаблоны БТ, Jira Timeline, качество, отчётность",
                "Собрал прозрачность экономики портфеля: выручка, прямые расходы, операционная прибыль / PM KPI",
                "Флагман — ЛК Агента для ПАО СК «Росгосстрах»: с нуля до прома, ~30 чел., 13 продуктов, 30+ интеграций, 30 000+ польз./день",
            ],
            s,
        )
    )
    story.append(Spacer(1, 2.2 * mm))

    story.append(job_header("Росгосстрах — ИТ-бизнес партнёр, IT Stream Lead", "02.2013 — 10.2022", s, page_w))
    story.append(Paragraph("IT Stream Lead · портфель ~300+ млн ₽/год · 10 лет", s["meta_left"]))
    story.extend(
        bullets(
            [
                "~150 активностей/мес, ~45 поставок в прод/мес; 7 внешних команд (~50 чел.) и внутренние стримы",
                "eОСАГО на rgs.ru (дедлайн ЦБ, 2016); проверка ЦБ 90/92У",
                "B2B-платформа: 30→700 продуктов; объём разработки 1→45 млн ₽/мес; отказоустойчивость 99%",
                "DRP rgs.ru и SMS-агрегатор; 50+ интеграций; 15 ключевых подрядчиков; 1000+ инициатив за 10 лет",
            ],
            s,
        )
    )
    story.append(Spacer(1, 2.2 * mm))

    story.append(job_header("ГУТА-Страхование — Team Lead / Senior Developer", "2008 — 2013", s, page_w))
    story.append(Paragraph("Разработка и сопровождение фронт- и бэк-систем СК", s["meta_left"]))
    story.extend(
        bullets(
            [
                "Руководитель команды разработки и сопровождения",
                "Oracle, PL/SQL, MS SQL, Oracle Forms / Reports, Toad, C#, Delphi",
            ],
            s,
        )
    )

    story.append(section_title("Образование", s))
    story.append(job_header("ВАВТ — финансы и кредит, экономист-международник", "2012 · 3,5 года", s, page_w))
    story.append(Spacer(1, 1.2 * mm))
    story.append(job_header("ВА РВСН им. Петра Великого — ВМКСиС, инженер", "2006 · 5 лет", s, page_w))

    story.append(section_title("Курсы", s))
    story.append(
        Paragraph(
            "IT Директор 2.0 — РШУ, 2021 · Управление IT-службой — РДТЕХ, 2015 · "
            "Oracle Database 10g PL/SQL — РДТЕХ, 2007–2008 · PROyachting — капитан, 2019",
            s["body"],
        )
    )

    story.append(section_title("Дополнительно", s))
    story.append(
        Paragraph(
            "CoffeeFriends — сеть кофепоинтов (2 точки в БЦ «Китеж») · Английский — Upper Intermediate · "
            "Рекомендации — по запросу",
            s["small"],
        )
    )

    def on_page(canvas, doc_):
        canvas.saveState()
        canvas.setFillColor(MUTED)
        canvas.setFont("CV", 7.5)
        canvas.drawString(16 * mm, 8 * mm, "Олег Сорванов · CV 2026")
        canvas.drawRightString(A4[0] - 16 * mm, 8 * mm, str(doc_.page))
        canvas.restoreState()

    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    print(OUT)


if __name__ == "__main__":
    build()
