---
title: Geodog
parent: Software
nav_order: 1
tags: [software]
date: 2024-08-31
image: "/assets/images/software/geodog/geodog-banner.jpg"
excerpt: "A Python library for processing images for GIS work: converting images to geo-referenced points, polygons, and shapefiles."
---

# Geodog

[GitHub →](https://github.com/team-watchdog/geodog) · [PyPI →](https://pypi.org/project/geodog/)

```
pip install geodog
```

Geodog is a collection of Python scripts for processing, analysing, and manipulating images — particularly useful for converting visual data into geographic information system (GIS) formats. Built at Watchdog for the kind of satellite and map image work that comes up in investigative journalism.

## What it does

- **`image_to_points.py`** — converts an image to a CSV of geo-referenced points, one per pixel, with colour and assigned colour ID; configurable bounding box and sampling rate
- **`image_to_polygon.py`** — converts an image to a GeoJSON file with a grid of polygons; uses a shapefile to define the geographic area of interest, with colour clustering for simplification
- **`image_to_shapefile.py`** — same as above with enhanced progress tracking via tqdm
- **`boxcutter.py`** — splits large images into smaller tiles; useful for processing or displaying very large images in chunks
- **`blueconverter.py`** — converts an image to a blue-white gradient using tile-based processing; adjustable contrast and scale
- **`color_remapper.py`** — remaps image colours to a set of visually distinct colours using K-means clustering; reduces unique colours to a specified maximum
- **`colorchecker.py`** — identifies dominant colours in an image using K-means clustering; outputs results in RGB, HEX, and HSV formats

## Requirements

Python 3.x, plus: `opencv-python`, `numpy`, `pillow`, `geopandas`, `shapely`, `rasterio`, `scikit-learn`, `tqdm`

## License

MIT.
