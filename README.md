# Moodly storefront template

Moodly is a five-product, WhatsApp-first tee storefront. Orders are confirmed manually on WhatsApp and paid by UPI or cash on Jaipur pickup.

## Deploy from GitHub to Vercel

### 1. Push the project to GitHub

Create a new GitHub repository, then run these commands from this project folder:

```bash
git init
git add .
git commit -m "Prepare Moodly storefront for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Do not commit `.env` or a real phone number. `.gitignore` already excludes local env files, `node_modules`, `dist`, and `.vercel`.

### 2. Import the repository into Vercel

1. Open [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Select the Moodly repository and choose **Import**.
3. Keep the detected framework as **Vite**.
4. Confirm:
   - Install command: `npm ci`
   - Build command: `npm run build`
   - Output directory: `dist`
5. Before deploying, open **Environment Variables** and add:
   - Name: `VITE_WHATSAPP_NUMBER`
   - Value: `91` plus the 10-digit WhatsApp number, with no `+` or spaces
   - Environments: **Production** and **Preview**
6. Click **Deploy**.

Vite embeds `VITE_*` variables during the build. If `VITE_WHATSAPP_NUMBER` is missing in a production build, the app fails clearly instead of publishing broken placeholder WhatsApp links. After changing the variable, redeploy.

### 3. Verify the deployment

Open the Vercel URL and test:

1. Home → choose a product → select a size → Order on WhatsApp.
2. Confirm the WhatsApp message contains the product, color, selected size, quantity, and delivery line.
3. Open **Print** and verify the Front/Back options and blanks image.
4. Open an unknown product URL such as `/#/p/not-a-real-product` and verify the not-found state.
5. Check the Vercel deployment logs if the production WhatsApp configuration error appears.

## Friend handoff checklist

1. Set `VITE_WHATSAPP_NUMBER` in Vercel → Settings → Environment Variables for **Production + Preview**, then redeploy. Never commit a real phone number.
2. Sample images are temporary `i.ibb.co` fallbacks. The Kalamkari and Print Your Mood samples are configured in `src/data/products.ts`.
3. Put final Supabase Storage (or another final host) URLs into the product `image_front`, `image_back`, `image_detail`, `image_fabric`, and `image_fit` fields. `resolveImage` uses those fields first and hides the samples automatically.
4. The size chart uses Indian chest inches: S 38, M 40, L 42, XL 44, XXL 46.
5. Rename `Statement Tee` in `src/data/products.ts` if the final product name is `ERROR` or `IMPACT`.
6. Set each product price in the `products` array. The template default is ₹699.
7. Set `active: false` for products that should not appear in the catalog; use `soldOut: true` for visible unavailable products.
8. Smoke test: Home → product → select size → WhatsApp prefill. Confirm the header, product, print, and footer links all use the same env-backed number.

## Commands

```bash
npm ci
npm run dev
npm run typecheck
npm run build
```
