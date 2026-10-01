"""Remove near-black studio background via edge flood-fill (keeps face shadows)."""
from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "sadhguru.jpg"
OUT = ROOT / "public" / "sadhguru.png"

# Pixels at/near edges darker than this are treated as background seeds
BG_LUMA = 28
BG_MAX = 36
# Soft fringe around background
SOFT = 18


def is_bg(r: int, g: int, b: int, luma_lim: int = BG_LUMA, max_lim: int = BG_MAX) -> bool:
    return (r + g + b) / 3.0 <= luma_lim and max(r, g, b) <= max_lim


def main() -> None:
    base = Image.open(SRC).convert("RGBA")
    w, h = base.size
    px = base.load()

    bg = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    def try_seed(x: int, y: int) -> None:
        r, g, b, _ = px[x, y]
        if is_bg(r, g, b) and not bg[y][x]:
            bg[y][x] = True
            q.append((x, y))

    for x in range(w):
        try_seed(x, 0)
        try_seed(x, h - 1)
    for y in range(h):
        try_seed(0, y)
        try_seed(w - 1, y)

    while q:
        x, y = q.popleft()
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if nx < 0 or ny < 0 or nx >= w or ny >= h or bg[ny][nx]:
                continue
            r, g, b, _ = px[nx, ny]
            # Slightly looser while growing from known background
            if is_bg(r, g, b, luma_lim=BG_LUMA + 8, max_lim=BG_MAX + 10):
                bg[ny][nx] = True
                q.append((nx, ny))

    # Soft alpha near background edge
    alpha = [[255] * w for _ in range(h)]
    for y in range(h):
        for x in range(w):
            if bg[y][x]:
                alpha[y][x] = 0
                continue
            # Distance to nearest bg in small window → soft fringe
            nearest = SOFT + 1
            for dy in range(-SOFT, SOFT + 1):
                yy = y + dy
                if yy < 0 or yy >= h:
                    continue
                for dx in range(-SOFT, SOFT + 1):
                    xx = x + dx
                    if xx < 0 or xx >= w:
                        continue
                    if bg[yy][xx]:
                        d = abs(dx) + abs(dy)
                        if d < nearest:
                            nearest = d
            if nearest <= SOFT:
                # Keep subject more opaque; only soften true fringe
                r, g, b, _ = px[x, y]
                if is_bg(r, g, b, luma_lim=BG_LUMA + 20, max_lim=BG_MAX + 24):
                    alpha[y][x] = int(255 * nearest / SOFT)

    out = Image.new("RGBA", (w, h))
    out_px = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b, _ = px[x, y]
            out_px[x, y] = (r, g, b, alpha[y][x])

    bbox = out.getbbox()
    if bbox:
        pad = 6
        x0, y0, x1, y1 = bbox
        out = out.crop(
            (
                max(0, x0 - pad),
                max(0, y0 - pad),
                min(w, x1 + pad),
                min(h, y1 + pad),
            )
        )

    out.save(OUT, optimize=True)
    s = out.load()
    sw, sh = out.size
    print(
        f"saved {OUT} size={out.size} corners="
        f"{[s[0, 0][3], s[sw - 1, 0][3], s[0, sh - 1][3], s[sw - 1, sh - 1][3]]}"
    )


if __name__ == "__main__":
    main()
