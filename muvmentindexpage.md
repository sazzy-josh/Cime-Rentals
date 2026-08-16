# Muvment.ng — Index (Search) Page Reference

**Source page:** https://www.muvment.ng/booking/search
**Captured:** 2026-08-16
**Site:** Muvment by Autogirl (Nigerian car rental platform, Next.js app)

## How this data was captured

This session did not have direct network/DevTools access to the site (no browser automation or raw HTTP access was available in this environment — outbound `curl`/direct fetches to `muvment.ng` were blocked by the sandbox network policy). Instead, the rendered page content was retrieved and parsed page-by-page to reconstruct the vehicle listing that the index (search) page renders. It is **not** a literal capture of the underlying XHR/fetch network response body (e.g. no internal Next.js `_next/data` payload or REST endpoint could be reached directly), but it reproduces the same fields (name, price tiers, image, details link) shown on the page, restructured as JSON below.

The index page reported **20 vehicles available** across Lagos, Abuja, and Awka (Anambra), with no pagination controls found.

## Reconstructed JSON

```json
{
  "source": "https://www.muvment.ng/booking/search",
  "vehicleCount": 20,
  "locations": ["Lagos", "Abuja", "Awka"],
  "vehicles": [
    {
      "name": "2019 Range Rover Autobiography",
      "category": "Luxury SUV",
      "location": "Lagos",
      "price": { "12h": 434000, "24h": 863000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/e6721e43-ee26-4fdc-b277-b6db09d6c216/photos/8d2b1bd2-8288-48d1-8f80-7fc03f18177c-oatvivz5cyrroznzmvdq.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/range-rover-autobiography-2019-lagos-wcubdn",
      "slug": "range-rover-autobiography-2019-lagos-wcubdn"
    },
    {
      "name": "2017 Lexus GX460",
      "category": "SUV",
      "location": "Lagos",
      "price": { "12h": 194000, "24h": 383000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/2a80fc82-a86f-4fe5-ac57-dcac83ed03fd/photos/ba49adea-bd8a-49af-b67d-d5dc4046ba53-rd96fzu4nu53zml1azoi.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/lexus-gx460-2017-lagos-xclwmk",
      "slug": "lexus-gx460-2017-lagos-xclwmk"
    },
    {
      "name": "2015 Lexus GX460",
      "category": "SUV",
      "location": "Lagos",
      "price": { "12h": 194000, "24h": 383000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/a3c03eae-a289-4044-958e-9e84ed6e629a/photos/645f99b4-5db2-41b2-80c7-2db1a472e8a0-m3ew9wowmoznbeusj7rv.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/lexus-gx460-2016-lagos-0myx5l",
      "slug": "lexus-gx460-2016-lagos-0myx5l"
    },
    {
      "name": "2015 Toyota Hiace Bus",
      "category": "Bus",
      "location": "Abuja",
      "price": { "12h": 230000, "24h": 455000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/b982f422-db6e-4d0e-a4cc-4ab34f5ec4b0/photos/f1c2f9c4-1487-48a5-8dec-9218c8f76749-xry3d6peujsef01bcvhw.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/toyota-hiace-2015-abuja-uvm5vt",
      "slug": "toyota-hiace-2015-abuja-uvm5vt"
    },
    {
      "name": "2022 Toyota Hiace Bus",
      "category": "Bus",
      "location": "Abuja",
      "price": { "12h": 429200, "24h": 853400 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/edf78a8d-46e7-46f3-9f2d-cb9406952739/photos/3529cd7d-37de-4834-8ea7-bef0a5744f9c-gbyqvepsrrul7d5mpoz.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/toyota-hiace-2022-abuja-dggmul",
      "slug": "toyota-hiace-2022-abuja-dggmul"
    },
    {
      "name": "2014 Mercedes Benz GLK350",
      "category": "SUV",
      "location": "Lagos",
      "price": { "12h": 116000, "24h": 227000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/7e562491-1f2c-4635-a280-eed19e8e0c2c/photos/6c06ffff-12ca-4893-ac74-3951de90c019-pufftm1xmoo0boahzmtl.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/mercedes-glk350-2014-lagos-x9hapr",
      "slug": "mercedes-glk350-2014-lagos-x9hapr"
    },
    {
      "name": "2017 Mercedes Benz GLS550",
      "category": "SUV",
      "location": "Lagos",
      "price": { "12h": 254000, "24h": 503000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/4523275d-ceda-4c15-aff9-94d49cb9c6dd/photos/a133e87c-59ea-45b6-872b-7e9df8111ac0-uty3xywt3prcpdkag6y2.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/mercedes-gls-2017-lagos-jo9sbn",
      "slug": "mercedes-gls-2017-lagos-jo9sbn"
    },
    {
      "name": "2017 Hiace Bus",
      "category": "Bus",
      "location": "Awka",
      "price": { "10h": 305000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/8b88ebc2-0b7b-4303-a811-27dd78cec065/photos/eff68e9b-43f1-4c62-b32e-a9661984da92-ofht0nqqp3f2sa6ftbxs.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/toyota-hiace-2017-awka-woyckn",
      "slug": "toyota-hiace-2017-awka-woyckn"
    },
    {
      "name": "2008 Toyota Corolla",
      "category": "Sedan",
      "location": "Lagos",
      "price": { "10h": 101000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/fbf507f8-1828-4e40-b960-aed6cd5494d8/photos/8fa29343-4ae1-4d2a-8bd9-df4e015c6195-m5h4rhjoiowxmmlnxuhc.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/toyota-corolla-2008-lagos-fw4wre",
      "slug": "toyota-corolla-2008-lagos-fw4wre"
    },
    {
      "name": "2011 Toyota Camry",
      "category": "Sedan",
      "location": "Awka",
      "price": { "10h": 149000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/5b1844f7-2559-41b0-86c4-ac0729b941f1/photos/e208170a-9140-47dd-9361-48e46dcee144-jxkqie1mijp4d1kyib0o.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/toyota-camry-2011-awka-hha3mo",
      "slug": "toyota-camry-2011-awka-hha3mo"
    },
    {
      "name": "2011 Toyota Camry",
      "category": "Sedan",
      "location": "Awka",
      "price": { "10h": 149000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/cea34d56-f0c6-43a5-8107-428043d5697c/photos/3f529584-4e02-4249-bf21-ee7b673655f9-dvnudhjnwdkcfcxavsxb.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/toyota-camry-2011-awka-e2yx9b",
      "slug": "toyota-camry-2011-awka-e2yx9b"
    },
    {
      "name": "2010 Toyota Camry",
      "category": "Sedan",
      "location": "Lagos",
      "price": { "12h": 92000, "24h": 179000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/fb800202-15e7-4873-90d2-cd4f31b7f8d3/photos/58111293-472c-4064-b440-c225d49306e6-vq4oeugo8qs6wpjoa0kl.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/toyota-camry-2010-lagos-kbyoaj",
      "slug": "toyota-camry-2010-lagos-kbyoaj"
    },
    {
      "name": "2022 Upgraded Lexus GX460",
      "category": "SUV",
      "location": "Lagos",
      "price": { "12h": 201999.60, "24h": 403999.20, "monthly": 3799999.20 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/dc26470c-7c74-46c4-a006-bc7e9b71fc43/photos/415e8bf1-2079-40a9-9480-9f1e640e1284-ah9x3x29fu07vy8rixvo.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/lexus-gx460-2018-lagos-yc9yfn",
      "slug": "lexus-gx460-2018-lagos-yc9yfn"
    },
    {
      "name": "2020 Upgraded Toyota Prado",
      "category": "SUV",
      "location": "Awka",
      "price": { "10h": 185000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/fdac3a55-a6e2-4a05-b31d-b7a87ce0f527/photos/978c5dcf-0df3-4b47-90cf-42b13d412958-m4qk6eap30dtfr3iaikb.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/toyota-prado-2017-awka-pwr0w9",
      "slug": "toyota-prado-2017-awka-pwr0w9"
    },
    {
      "name": "2019 Toyota Landcruiser",
      "category": "SUV",
      "location": "Awka",
      "price": { "10h": 425000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/54e06739-3fee-41d4-ae90-b1b01753d974/photos/5fc1a9ea-f295-405d-b771-97a0ba983303-t4n5qztnuqpt0oxg5i49.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/toyota-landcruiser-2019-awka-tmathx",
      "slug": "toyota-landcruiser-2019-awka-tmathx"
    },
    {
      "name": "2012 Lexus RX350",
      "category": "Mid-Size SUV",
      "location": "Awka",
      "price": { "10h": 305000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/adddf067-b295-47a8-97ee-a5077cfa19fa/photos/553f3239-c26d-4a4d-8507-29a2c1b05b4c-dq4sfbbpb3kbj2xvb3gy.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/lexus-rx350-2012-awka-20ok8k",
      "slug": "lexus-rx350-2012-awka-20ok8k"
    },
    {
      "name": "2019 Toyota Prado",
      "category": "SUV",
      "location": "Lagos",
      "price": { "12h": 195000, "24h": 390000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/d37ffdd2-96da-4cce-87b6-9ca6440a0ba4/photos/576970d8-2c58-445d-948d-e808a1bb8eaf-x8ppbvl4gyc2xssfe7rx.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/toyota-prado-2019-lagos-hoeu8n",
      "slug": "toyota-prado-2019-lagos-hoeu8n"
    },
    {
      "name": "2021 Toyota Hilux",
      "category": "Truck",
      "location": "Awka",
      "price": { "10h": 305000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/3bd747ac-338d-489e-8ed9-398958c0dae8/photos/2312d3dc-f1f1-40a5-9573-973cf55931ae-w7xresafwh5opz1xflno.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/toyota-hilux-2021-awka-kvtkwt",
      "slug": "toyota-hilux-2021-awka-kvtkwt"
    },
    {
      "name": "2013 Mercedes C63 AMG",
      "category": "Luxury Sedan",
      "location": "Awka",
      "price": { "10h": 305000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/887deed1-41a7-4811-a4c6-2bb2a3a55195/photos/95c2e2dd-2f72-4c1a-ae3a-7f3bc88e8fc9-wrhcelqowajql0qotedr.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/mercedes-c63-2013-awka-a4mjdp",
      "slug": "mercedes-c63-2013-awka-a4mjdp"
    },
    {
      "name": "2019 Toyota Corolla",
      "category": "Sedan",
      "location": "Lagos",
      "price": { "12h": 128000, "24h": 251000 },
      "currency": "NGN",
      "image": "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/fa3c6a2a-e90c-4abb-9af9-4dbdcfe3fa78/photos/c647b87f-cf5d-4abb-9af9-4dbdcfe3fa78-hakyngbnbu1uczfbghuv.jpg",
      "detailsUrl": "https://www.muvment.ng/booking/details/toyota-corolla-2019-lagos-irs7zb",
      "slug": "toyota-corolla-2019-lagos-irs7zb"
    }
  ]
}
```

## Site navigation path followed

1. **Homepage** — https://www.muvment.ng/
2. **Booking search / index page** — https://www.muvment.ng/booking/search (lists all 20 vehicles)
3. **Category page (example)** — https://www.muvment.ng/booking/basic-suv/special-pricing (renders a booking form; vehicle list itself is filled in client-side after search dates/location are entered, so it could not be scraped statically)
4. **Car details pages** — https://www.muvment.ng/booking/details/{slug} (one per vehicle, 20 total — see `constants.ts` for full extracted data)

## Note on the `basic-suv/special-pricing` category page

This page (the tab you had open) is a landing/booking-form page for the "Basic SUV (2012–2014)" category, starting at ₦55,000. It does not statically render its own vehicle list — cars only populate after a location and date range are submitted through the booking form, which requires interactive JS execution this session could not perform. The full car inventory was instead captured from the `/booking/search` index, which lists all 20 vehicles across every category.
