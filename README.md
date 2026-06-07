# SunPilot Home Beta

Route locale: `/home-beta`

Objectif: tester en famille pendant 30 jours si les personnes comprennent et utilisent vraiment:

- estimation facture electricite/eau
- alertes simples
- assistant IA en langage naturel
- score maison
- import facture simule
- feedback produit
- analytics validation

## Supabase

Le schema minimal de feedback est dans `supabase/home-beta/schema.sql`.

En production beta:

1. Creer un projet Supabase.
2. Executer le schema SQL `home_beta_feedback` et `home_beta_events`.
3. Ajouter Supabase Auth magic link ou email/password.
4. Remplacer `localStorage` par insert Supabase.
5. Ajouter un espace admin protege.

Dans cette version preparee pour partage, le formulaire appelle deja:

- `POST /api/home-beta/feedback`
- `POST /api/home-beta/event`
- `GET /api/home-beta/admin`

Si Supabase n'est pas configure, l'application reste utilisable avec un fallback local.

## Partage

Voir `docs/home-beta/SHARE_BETA.md`.

## Regle produit

Si un testeur ne comprend pas en 30 secondes:

- enlever du texte
- reduire les cartes
- garder uniquement facture, alerte, action
