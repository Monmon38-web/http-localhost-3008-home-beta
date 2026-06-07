# Partager SunPilot Home Beta

Objectif: faire tester `/home-beta` a 10 proches pendant 30 jours.

## 1. Supabase

1. Creer un projet sur Supabase.
2. Ouvrir SQL Editor.
3. Copier/coller `supabase/home-beta/schema.sql`.
4. Recuperer:
   - Project URL
   - anon key
   - service role key

## 2. Vercel

1. Mettre ce dossier sur GitHub.
2. Importer le projet dans Vercel.
3. Framework: Next.js.
4. Build command: `npm run build`.
5. Ajouter les variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
NEXT_PUBLIC_HOME_BETA_PASSWORD=code-famille
```

## 3. Lien a partager

Partager uniquement:

```text
https://votre-projet.vercel.app/home-beta
```

Message simple:

```text
Coucou, j'ai besoin de ton avis sur une idee d'application maison.
Ca prend 3 minutes.
Lien: ...
Code: code-famille
Dis-moi surtout si tu comprends l'app et si tu paierais 4,99 €/mois.
```

## 4. Ce qu'il faut mesurer

- Est-ce compris en moins de 30 secondes ?
- Quelle carte est regardee en premier ?
- Est-ce que les alertes sont utiles ?
- Est-ce que l'assistant donne envie ?
- Est-ce que 4,99 €/mois semble acceptable ?

## 5. Decision apres 30 jours

Continuer seulement si:

- note moyenne superieure ou egale a 7/10
- au moins 4 personnes sur 10 disent "oui" ou "peut-etre" a 4,99 €/mois
- les alertes ou l'estimation facture sont citees comme fonction preferee
- au moins 5 personnes reviennent une deuxieme fois
