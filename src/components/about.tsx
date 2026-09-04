"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function About() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="bg-void">
      <div className="mx-auto max-w-[1080px] px-4 py-8 sm:px-6 md:px-8 md:py-9">
        <FadeUp>
          <h2 className="section-heading">{lang === "ru" ? "Обо мне" : "About"}</h2>
          <p className="mt-1 text-sm text-muted">{t(site.about.intro)}</p>

          <div className="mt-5 grid gap-6 md:grid-cols-2 md:items-start md:gap-8">
            {/* Левая колонка — один сплошной блок */}
            <div className="body-copy space-y-3 text-sm leading-relaxed text-muted">
              <div>
                <p className="font-medium text-mist">
                  {lang === "ru" ? "Выпускник:" : "Graduate:"}
                </p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5">
                  {site.about.education[lang].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <p>
                <span className="font-medium text-mist">
                  {lang === "ru" ? "ИТ-Лидер" : "IT Leader"}
                </span>
                {" — "}
                {t(site.about.focus)}
              </p>

              <p>
                <span className="font-medium text-mist">
                  {lang === "ru" ? "Лыжник — любитель" : "Recreational skier"}
                </span>
                {" — "}
                <a
                  href="https://runkeeper.com/user/sorvanovon/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-voltage hover:underline"
                >
                  Runkeeper
                </a>
              </p>

              <div>
                <p className="font-medium text-mist">
                  {lang === "ru" ? "Яхтсмен — любитель" : "Recreational yachtsman"}
                </p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5">
                  <li>
                    <a
                      href="https://silavetra.com/city/howto/moscow/strogino"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-voltage hover:underline"
                    >
                      {lang === "ru" ? "Сила ветра" : "Wind force"}
                    </a>
                    {" — "}
                    {lang === "ru" ? "Строгинский залив" : "Strogino Bay"}
                  </li>
                  <li>
                    <a
                      href="https://pro-yachting.ru/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-voltage hover:underline"
                    >
                      PROyachting
                    </a>
                    {" — "}
                    {lang === "ru" ? "Речной вокзал" : "River Station"}
                  </li>
                  <li>
                    <a
                      href="https://yandex.ru/navi?rtext=55.706179%2C37.481463~60.697157%2C28.737800&rtt=auto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-voltage hover:underline"
                    >
                      {lang === "ru" ? "Выборг" : "Vyborg"}
                    </a>
                  </li>
                </ul>
              </div>

              <p>
                <span className="font-medium text-mist">
                  {lang === "ru" ? "Многодетный отец:" : "Father of a large family:"}
                </span>{" "}
                {lang === "ru" ? "отец троих детей" : "father of three"}
              </p>

              <div>
                <p>
                  <span className="font-medium text-mist">
                    {lang === "ru" ? "Действующий" : "Active"}
                  </span>{" "}
                  <span className="hi">
                    {lang === "ru" ? "предприниматель" : "entrepreneur"}
                  </span>
                </p>
                <p className="mt-1">
                  <span className="whitespace-nowrap">
                    {lang === "ru" ? "кофейный проект" : "coffee project"}
                  </span>{" "}
                  <a
                    href={site.coffee.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-voltage hover:underline"
                  >
                    CoffeeFriends
                  </a>
                </p>
              </div>
            </div>

            {/* Правая колонка — карточки с общего верха */}
            <div className="grid gap-2">
              <article className="glass-card p-3.5">
                <h3 className="card-label">
                  {lang === "ru" ? "Проектный офис" : "Project office"}
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
                  <li>
                    <span className="font-medium text-mist">
                      {lang === "ru" ? "Команды:" : "Teams:"}
                    </span>{" "}
                    {t(site.about.teams)}
                  </li>
                  <li>
                    <span className="font-medium text-mist">
                      {lang === "ru" ? "Клиенты:" : "Clients:"}
                    </span>{" "}
                    {t(site.about.clients)}
                  </li>
                </ul>
              </article>

              <article className="glass-card p-3.5">
                <h3 className="card-label">
                  {lang === "ru" ? "Технологический стэк" : "Technology stack"}
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
                  {site.about.stackGroups[lang].map((group) => (
                    <li key={group.label}>
                      <span className="font-medium text-mist">{group.label}:</span>{" "}
                      {group.text}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="glass-card p-3.5">
                <h3 className="card-label">{lang === "ru" ? "Спорт" : "Sports"}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <span className="font-medium text-mist">
                    {lang === "ru" ? "Беговые лыжи" : "Cross-country skiing"}
                  </span>
                  {lang === "ru" ? ", конёк; частые локации:" : ", skating; frequent spots:"}
                </p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-muted">
                  <li>
                    <a
                      href="https://yandex.ru/navi?rtext=55.705330%2C37.481051~55.675768%2C37.409927&rtt=auto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-voltage hover:underline"
                    >
                      {lang === "ru" ? "Мещёрский лес" : "Meshchersky Forest"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yandex.ru/navi/org/lyzherollernaya_trassa/168399550179?si=4xx9tm30a9ux8rvak1wu98zkpr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-voltage hover:underline"
                    >
                      {lang === "ru" ? "парк Ларисы Лазутиной" : "Larisa Lazutina Park"}
                    </a>
                  </li>
                </ul>
                <p className="mt-1.5 text-sm text-muted">
                  {lang === "ru" ? "Яхтинг —" : "Sailing —"}{" "}
                  <a
                    href="https://pro-yachting.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-voltage hover:underline"
                  >
                    PROyachting
                  </a>
                  , {lang === "ru" ? "права капитана 2019." : "captain license 2019."}
                </p>
              </article>

              <article className="glass-card p-3.5">
                <h3 className="card-label">
                  {lang === "ru" ? "Предпринимательство" : "Entrepreneurship"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {lang === "ru"
                    ? "Владелец сети кофепоинтов — подробнее на сайте"
                    : "Owner of a coffee-point network — details at"}{" "}
                  <a
                    href={site.coffee.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-voltage hover:underline"
                  >
                    CoffeeFriends
                  </a>
                </p>
              </article>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
