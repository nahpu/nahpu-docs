---
title: Transitioning to NAHPU
sidebar:
  label: Transitioning to NAHPU
  order: 4
---

NAHPU is a digital field catalog built for natural history collections. It
replaces unformatted/pre-formatted paper field catalogs and no-code custom form apps such as
[Claris FileMaker](https://www.claris.com/). This page compares the them and
outlines how to move across.

## NAHPU compared with a paper field catalog

|              | Paper field catalog                                           | NAHPU                                                                                                                                                                                                                                                |
| ------------ | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cost         | Ongoing paper, ink, binders, storage                          | Free; runs on a phone you already own. A dedicated tablet is about $200–$500 and lasts around five years. Catalogs still print when a hard copy is required.                                                                                         |
| Access       | Carry the book home, scan pages, or retype into a spreadsheet | Open on any device and hand collaborators an exact copy                                                                                                                                                                                              |
| Data quality | Secondary entry errors when digitizing                        | Controlled lists and required-field checks before you leave the field                                                                                                                                                                                |
| Associations | The same site rewritten on every page                         | Enter a site once and link it to many records, plus GPS, images, videos, and audio                                                                                                                                                                   |
| Backup       | Photograph or retype each page                                | Cloud, flash drive, or another device. Many drives are water and shock proof                                                                                                                                                                         |
| Findability  | Read through by hand; no filtering                            | Search and filter, following [Darwin Core](https://dwc.tdwg.org/) and the [FAIR principles](https://www.go-fair.org/)                                                                                                                                |
| Statistics   | Counted by hand                                               | A growing list of summary statistics, including species, family, and preservation summaries per project and site, exportable to a spreadsheet. Advanced machine learning methods are currently being developed for on-device morphological analyses. |

## NAHPU compared with a custom-built form app

Moving from a form app is the easier transition: your data entry, backup, and
export habits carry over largely unchanged.

|           | Custom-built form app                                                                                                      | NAHPU                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Cost      | Development and maintenance, often a paid subscription — see the FileMaker [pricing page](https://www.claris.com/pricing/) | Free, with the app and its documentation under active development                                   |
| Standards | Varies by build                                                                                                            | Darwin Core and FAIR compliance as a goal of the project                                            |
| Openness  | May be proprietary, with proprietary formats                                                                               | Open source, open libraries, CSV and JSON export, and a plain SQLite database you can open yourself |
| Devices   | Device support depends on the build                                                                                        | Phones, tablets, laptops, and desktops, with Flutter and Material Design accessibility              |

## Plan the transition

Pick an approach:

- **Soft.** Use NAHPU alongside your paper field catalog.
- **Hard.** Use NAHPU as the only catalog, with paper carried as a backup.

Then settle three practical questions:

| Question                       | What to consider                                                                                                                                                                                                                                                |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Which device?                  | Phones, tablets, laptops, and desktops all work. Start with your phone; a tablet with a Bluetooth keyboard is the better experience if the budget allows. See [Device Requirements](../usages/devices).                                                         |
| What are the field conditions? | NAHPU is designed for remote sites with no internet. Weigh durability and power: recent phones are often water and dust resistant, tablets and laptops usually need a sturdy case, and a 20,000–25,000 mAh power bank covers about a week on a phone or tablet. |
| How will you back up?          | A flash drive, USB-C or with an adapter, is the baseline. Cross-backup to a teammate's device adds redundancy. Cloud services such as Google Drive or Dropbox work where the connection does, but need their own app and account on the device.                 |
