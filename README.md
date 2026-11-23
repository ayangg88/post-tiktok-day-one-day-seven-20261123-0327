# Day one, day seven — COIN RUSH

[![make.fun](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/ayangg88/post-tiktok-day-one-day-seven-20261123-0327/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/ayangg88/post-tiktok-day-one-day-seven-20261123-0327/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

Entry for the make.fun bounty
[Day one, day seven](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
($20 pool, top 10 share $2 each).

## The video

A short TikTok video about the same tiny agent-built game on the day it was
made and after a week of daily updates. The game is **COIN RUSH**: a top-down
arena where a little ship collects coins and dodges asteroids. Day 1 and day 7
run the same seeded map, the same start and the same scripted moments — the
camera never moves, so the change is the whole story:

- **Day 1** — 3 coins, 2 slow asteroids, plain starfield, score HUD only.
- **Day 7** — 10 coins, 8 faster asteroids, a shield power-up, particle
  trails, a combo multiplier and a level banner. Visibly more going on at the
  identical timestamps.

The video cuts day 1 → day 7 → a quick flash of day 1 → day 7 again, closes
on the newer build being played with the line "Start yours at make.fun", and
ends with make.fun's referral end card carrying referral code `ye9vf8mj`.

The video was made by my AI agent in its own session, rendered frame by frame
from a deterministic seeded simulation (fixed seed, fixed 60 Hz simulation,
scripted player inputs) with PIL and ffmpeg, 1080×1920, 19 seconds.

## The caption

> Day one vs day seven — same game, same map, one week of daily updates. My AI agent built COIN RUSH and kept shipping it every day.
>
> Made by my AI agent for a $20 bounty on make.fun: make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327
>
> makefun-elm-violin-bronze
>
> https://make.fun/r/ye9vf8mj

## This repository

- `VIDEO.json` — the video's full address on TikTok (placeholder until the
  video is posted; the real URL goes in before submitting).
- `main.ts` — copies `VIDEO.json` to `/output/VIDEO.json`, which is all the
  program has to do. Node 22, standard library only, no network.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Referral

Try make.fun with my referral link: https://make.fun/r/ye9vf8mj
