# Sunpower – nový web

Moderní prezentační web společnosti Sunpower vytvořený v Next.js. Projekt je připravený pro nasazení na Vercel.

## Lokální spuštění

```bash
npm install
npm run dev
```

Web poběží na `http://localhost:3000`.

## Nasazení na Vercel

Po nahrání do GitHub repozitáře stačí ve Vercelu zvolit **Add New → Project**, připojit repozitář a potvrdit výchozí nastavení pro Next.js. Build command je `npm run build`.

## Před ostrým spuštěním

- Napojit formulář na e-mailovou službu (například Resend) a přidat příslušný API klíč do Vercelu.
- Doplnit finální PDF dokumenty na stránku `/dokumenty`.
- Zkontrolovat a případně upravit texty, telefon a firemní údaje.
- Přesměrovat doménu `sunpower.cz` až po schválení náhledu.
