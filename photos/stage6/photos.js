// תמונות לשלב 6 (2026 · חתונה וירח דבש): 4 זיכרונות מהחתונה (v4.3: ההזמנה + 3 התמונות שעומר שלח; תמונות צילומי הזוג מהדרייב הוסרו כי היו דומות מדי) + 6 תמונות ספארי.
// כדי להחליף תמונה: שימו קובץ חדש בתיקייה הזו ושנו כאן את שם הקובץ ואת הכיתוב. כל רשומה = זיכרון חבוי אחד.
window.OFIR_PHOTOS = window.OFIR_PHOTOS || {};
// v3.4: כל תמונה מוצבת במקום שמתאים לה בגן (spot). מקומות אפשריים (מוגדרים ב-src/stages/wedding.js, SPOTS):
//   entrance (שלט הכניסה) · friends (שביל העצים ליד הכניסה) · path (שביל הגן) · railing (המעקה בין עצי הזית)
//   house (הדשא מול בית האבן) · tables (השולחנות תחת האורות) · aisle (המעבר בין הכיסאות) · chuppah (מול החופה)
//   dance (רחבת הריקודים באולם האבן) · מקומות פנויים: path · railing · tables · aisle · chuppah · west · north · backHouse
// להוספת תמונה: שימו את הקובץ בתיקייה והוסיפו שורה עם spot פנוי (בלי spot – נבחר מקום פנוי אוטומטית). מספר התמונות בשלב = מספר השורות.
window.OFIR_PHOTOS["stage6"] = [
  { file: "photo1.jpg", caption: "ההזמנה", spot: "entrance" },
  { file: "photo7.jpg", caption: "עם החברות", spot: "friends" },
  { file: "photo8.jpg", caption: "תמונה משפחתית", spot: "house" },
  { file: "photo9.jpg", caption: "ריקודים!", spot: "dance" },
];

// ספארי (ירח הדבש בטנזניה): כל חיה שמזהים במשקפת מהג׳יפ פותחת את התמונה שלה. הסדר קבוע: פילים, צ׳יטה, אריה, זברות, פלמינגו, ג׳ירפה.
window.OFIR_PHOTOS["stage6-safari"] = [
  { file: "safari-elephants.jpg", caption: "פילים" },
  { file: "safari-cheetah.jpg", caption: "צ׳יטה" },
  { file: "safari-lion.jpg", caption: "אריה על הסלעים" },
  { file: "safari-zebras.jpg", caption: "זברות" },
  { file: "safari-flamingo.jpg", caption: "פלמינגו" },
  { file: "safari-giraffe.jpg", caption: "ג׳ירפה" },
];
