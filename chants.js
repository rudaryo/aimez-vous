/* ================================================================
   AIMEZ-VOUS : LISTE DES CHANTS (le seul fichier à modifier)
   ----------------------------------------------------------------
   Pour chaque chant, remplissez ce que vous avez :
     url     : lien YouTube (ex. "https://youtu.be/XXXX")
     audio   : votre fichier MP3 original, placé dans le dossier
               "songs" (ex. "songs/magnificat.mp3")
     video   : votre propre fichier vidéo MP4 (ex. "songs/hosanna.mp4")
     img     : votre photo dans le dossier "images"
               (ex. "images/magnificat.png")
     paroles : les paroles (facultatif). Écrivez-les entre deux
               accents graves ` ` pour garder les retours à la ligne.

   Ordre de lecture sur la page du chant :
     1. video (votre MP4)  2. audio (votre MP3)  3. url (YouTube)
   Le lien YouTube reste proposé en bouton s'il est rempli.
   Si "img" est vide, la miniature YouTube est utilisée.
   ================================================================ */

const CHAINE_YOUTUBE = "https://www.youtube.com/@pierre_jr1102";

const CATEGORIES = [
  { id:"psaumes",   nom:"Psaumes et cantiques",  intro:"Les psaumes et cantiques de la liturgie, à chanter avec l'Église." },
  { id:"louange",   nom:"Louange",               intro:"Pour acclamer le Seigneur et rendre grâce dans la joie." },
  { id:"adoration", nom:"Adoration",             intro:"Pour la prière silencieuse, l'Eucharistie et le cœur à cœur avec Dieu." },
  { id:"chemin",    nom:"En chemin avec le Christ", intro:"Appel, mission et espérance pour la route." },
  { id:"anglais",   nom:"Chants en anglais",     intro:"Praise and worship songs in English." }
];

const CHANTS = [
  /* ----- Psaumes et cantiques ----- */
  { cat:"psaumes", titre:"Le Magnificat", ref:"Luc 1, 46-55", url:"https://youtu.be/qS3Fs3MTTf0", audio:"", video:"", img:"images/magnificat.png", paroles:"" },
  { cat:"psaumes", titre:"Le Seigneur est tendresse et pitié", ref:"Psaume 102 (103)", url:"https://youtu.be/nLUaLBeH3K8", audio:"", video:"", img:"images/psaume-103.png", paroles:"" },
  { cat:"psaumes", titre:"Toute la terre, Seigneur, est remplie de ton amour", ref:"Psaume 32 (33)", url:"https://youtu.be/lKlSoJDmROI", audio:"", video:"", img:"images/psaume-33.png", paroles:"" },
  { cat:"psaumes", titre:"L'homme de bien a pitié, il partage", ref:"Psaume 111 (112)", url:"https://youtu.be/RGOYOtS8IYA", audio:"", video:"", img:"images/psaume-112.png", paroles:"" },
  { cat:"psaumes", titre:"Jamais tu n'abandonnes, Seigneur, ceux qui te cherchent", ref:"Psaume 9A", url:"https://youtu.be/I1B-2V5SvqM", audio:"", video:"", img:"images/psaume-9a.png", paroles:"" },
  { cat:"psaumes", titre:"Le Seigneur nous garde, comme un berger son troupeau", ref:"Cantique de Jérémie 31", url:"https://youtu.be/ljRBXmLEyBU", audio:"", video:"", img:"images/cantique-jeremie.png", paroles:"" },

  /* ----- Louange ----- */
  { cat:"louange", titre:"Chante alléluia au Seigneur", url:"https://youtu.be/yG0nRneCnKE", audio:"", video:"", img:"images/chante-alleluia.png", paroles:"" },
  { cat:"louange", titre:"Béni sois-tu, Seigneur notre Dieu", url:"https://youtu.be/_d0OcnemoDk", audio:"", video:"", img:"images/beni-sois-tu.png", paroles:"" },
  { cat:"louange", titre:"Hosanna", url:"https://youtu.be/CNnvZ6X-uZY", audio:"", video:"", img:"images/hosanna.png", paroles:"" },
  { cat:"louange", titre:"Louons-le", url:"https://youtu.be/q9nyGEOaAVI", audio:"", video:"", img:"images/louons-le.png", paroles:"" },
  { cat:"louange", titre:"Hallelu l'Yah", url:"https://youtu.be/9x6n2yV-eyw", audio:"", video:"", img:"images/hallelu-yah.png", paroles:"" },
  { cat:"louange", titre:"Merci Seigneur", url:"https://youtu.be/y3XU_s-19Xc", audio:"", video:"", img:"images/merci-seigneur.png", paroles:"" },
  { cat:"louange", titre:"Seigneur, nous arrivons des quatre coins de l'horizon", url:"https://youtu.be/mL9VBkn1PnI", audio:"", video:"", img:"images/quatre-coins.png", paroles:"" },
  { cat:"louange", titre:"Peuple de feu", url:"https://youtu.be/fTxQHUNkb5A", audio:"", video:"", img:"images/peuple-de-feu.png", paroles:"" },
  { cat:"louange", titre:"Souffle de Dieu, souffle de vie", url:"https://youtu.be/O5ecdmG6jPc", audio:"", video:"", img:"images/souffle-de-dieu.png", paroles:"" },

  /* ----- Adoration ----- */
  { cat:"adoration", titre:"Ta présence divine", url:"https://youtu.be/vb2SqpYWY3w", audio:"", video:"", img:"images/presence-divine.png", paroles:"" },
  { cat:"adoration", titre:"Comme un feu qui ne s'éteint pas", url:"https://youtu.be/OldPuJFKnVM", audio:"", video:"", img:"images/feu-qui-ne-s-eteint-pas.png", paroles:"" },
  { cat:"adoration", titre:"L'eau vive", url:"https://youtu.be/BURKDRsBovo", audio:"", video:"", img:"images/eau-vive.png", paroles:"" },
  { cat:"adoration", titre:"Seigneur, plein d'amour, tendresse pour toujours", url:"https://youtu.be/hEwI8Mznujc", audio:"", video:"", img:"images/plein-d-amour.png", paroles:"" },
  { cat:"adoration", titre:"Ton amour sans fin", url:"https://youtu.be/OR6QyySoU_g", audio:"", video:"", img:"images/amour-sans-fin.png", paroles:"" },
  { cat:"adoration", titre:"En tes mains", url:"https://youtu.be/XQ5MZxny1O0", audio:"", video:"", img:"images/en-tes-mains.png", paroles:"" },
  { cat:"adoration", titre:"Je prie avec foi", url:"https://youtu.be/tSwc_OYuomA", audio:"", video:"", img:"images/je-prie-avec-foi.png", paroles:"" },

  /* ----- En chemin avec le Christ ----- */
  { cat:"chemin", titre:"Viens, suis-moi, dit le Seigneur", url:"https://youtu.be/riWvNUcZj6A", audio:"", video:"", img:"images/viens-suis-moi.png", paroles:"" },
  { cat:"chemin", titre:"Sur les routes des hommes", url:"https://youtu.be/vWv2qr6_i5c", audio:"", video:"", img:"images/routes-des-hommes.png", paroles:"" },
  { cat:"chemin", titre:"Heureux ceux qui marchent", url:"https://youtu.be/UUKbieqXBEc", audio:"", video:"", img:"images/heureux-ceux-qui-marchent.png", paroles:"" },
  { cat:"chemin", titre:"Il faut marcher de très longues routes", url:"https://youtu.be/KU9U1FRQ9Rk", audio:"", video:"", img:"images/longues-routes.png", paroles:"" },
  { cat:"chemin", titre:"Le Royaume est là", url:"https://youtu.be/ouVxDLd9g0Q", audio:"", video:"", img:"images/royaume-est-la.png", paroles:"" },
  { cat:"chemin", titre:"Deviens un", url:"https://youtu.be/6aTdEggPWbY", audio:"", video:"", img:"images/deviens-un.png", paroles:"" },
  { cat:"chemin", titre:"Sel et lumière pour le monde", url:"https://youtu.be/jGb10HQlbq0", audio:"", video:"", img:"images/sel-et-lumiere.png", paroles:"" },
  { cat:"chemin", titre:"Encore vivant", url:"https://youtu.be/nikWhYRY5cI", audio:"", video:"", img:"images/encore-vivant.png", paroles:"" },
  { cat:"chemin", titre:"La nuit est grande", url:"https://youtu.be/ypbhev4HNf8", audio:"", video:"", img:"images/nuit-est-grande.png", paroles:"" },
  { cat:"chemin", titre:"Où vont nos cœurs ?", url:"https://youtu.be/X4P38RHmRa8", audio:"", video:"", img:"images/ou-vont-nos-coeurs.png", paroles:"" },

  /* ----- Chants en anglais ----- */
  { cat:"anglais", titre:"Through the Bread and Wine", url:"https://youtu.be/4Xhv_io77cs", audio:"", video:"", img:"images/bread-and-wine.png", paroles:"" },
  { cat:"anglais", titre:"Come to Me", url:"https://youtu.be/H7X20oJEgFU", audio:"", video:"", img:"images/come-to-me.png", paroles:"" },
  { cat:"anglais", titre:"Look With Love", url:"https://youtu.be/cLhGTqn93AQ", audio:"", video:"", img:"images/look-with-love.png", paroles:"" },
  { cat:"anglais", titre:"I Still Love You", url:"https://youtu.be/fq6PO4DLUjU", audio:"", video:"", img:"images/i-still-love-you.png", paroles:"" },
  { cat:"anglais", titre:"I Need You Lord", url:"https://youtu.be/zUg9StIN2HQ", audio:"", video:"", img:"images/i-need-you-lord.png", paroles:"" },
  { cat:"anglais", titre:"Thank You Lord", url:"https://youtu.be/uXCdiOAqTwE", audio:"", video:"", img:"images/thank-you-lord.png", paroles:"" },
  { cat:"anglais", titre:"What a Wonderful Gift We've Been Given", url:"https://youtu.be/1zJAlqBY-sY", audio:"", video:"", img:"images/wonderful-gift.png", paroles:"" },
  { cat:"anglais", titre:"Hold Firm, Hold On… Don't Be Afraid", url:"https://youtu.be/aRLD1lB612E", audio:"", video:"", img:"images/hold-firm.png", paroles:"" },
  { cat:"anglais", titre:"Gethsemane", url:"https://youtu.be/ACH8Irm3E6c", audio:"", video:"", img:"images/gethsemane.png", paroles:"" },
  { cat:"anglais", titre:"At the Door", url:"https://youtu.be/8n91OBnBFdU", audio:"", video:"", img:"images/at-the-door.png", paroles:"" },
  { cat:"anglais", titre:"The Water Is Coming", url:"https://youtu.be/hsMD2UONv38", audio:"", video:"", img:"images/water-is-coming.png", paroles:"" },
  { cat:"anglais", titre:"All This Time", url:"https://youtu.be/olYlCgkHSW0", audio:"", video:"", img:"images/all-this-time.png", paroles:"" },
  { cat:"anglais", titre:"Two Minutes More", url:"https://youtu.be/tWKHwlUD4Uc", audio:"", video:"", img:"images/two-minutes-more.png", paroles:"" },
  { cat:"anglais", titre:"I Turned Him Away", url:"https://youtu.be/STqxK-_FuGA", audio:"", video:"", img:"images/i-turned-him-away.png", paroles:"" },
  { cat:"anglais", titre:"Don't Turn Me Away", url:"https://youtu.be/EeSAfPXfYEw", audio:"", video:"", img:"images/dont-turn-me-away.png", paroles:"" }
];

/* ================================================================
   Outils partagés par les pages (rien à modifier ci-dessous)
   ================================================================ */
function echapper(s){ return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function sansAccents(s){ return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(); }
function slug(s){ return sansAccents(s).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""); }
function idYouTube(url){
  if(!url) return "";
  const m = url.match(/(?:youtu\.be\/|v=|\/shorts\/|\/embed\/|\/live\/)([\w-]{11})/);
  if(m) return m[1];
  return /^[\w-]{11}$/.test(url.trim()) ? url.trim() : "";
}
function imageDe(ch){
  const id = idYouTube(ch.url);
  return ch.img || (id ? "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg" : "");
}
// Protection contre les petites erreurs de saisie :
// un lien YouTube mis dans "audio" ou "video" est déplacé dans "url",
// et une image mise dans "audio" ou "video" est ignorée.
CHANTS.forEach(ch => {
  ["audio","video"].forEach(k => {
    const v = (ch[k] || "").trim();
    if(/youtu\.?be/i.test(v)){ if(!ch.url) ch.url = v; ch[k] = ""; }
    else if(/\.(png|jpe?g|gif|webp)$/i.test(v)){ ch[k] = ""; }
  });
  if(ch.img && !/^(images\/|https?:)/.test(ch.img)) ch.img = "images/" + ch.img;
  ch.slug = slug(ch.titre);
});
