#! /bin/sh
set -eux

lighthouse http://localhost:3000 --view
lighthouse http://localhost:3000/feed --view
lighthouse http://localhost:3000/vault --view
