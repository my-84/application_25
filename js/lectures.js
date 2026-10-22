// ===== 講義データ =====
// day:    曜日（日=0, 月=1, 火=2, 水=3, 木=4, 金=5, 土=6）… getDay() の戻り値と同じ
// period: [開始時限]
// num:    講義室番号（未定のときは "null" にする → CSSで灰色表示になる）
//
const lectures = [
  // 月曜
  { name: "データサイエンス演習", num: "3212", day: 1, period: 5 },
  // 火曜
  { name: "ネットワークプログラミング応用", num: "1232", day: 2, period: 6 },
  // 水曜
  { name: "OSとシステムソフトウェア", num: "8103", day: 3, period: 2 },
  { name: "統計解析_奇数", num: "8107", day: 3, period: 5 },
  { name: "統計解析_偶数", num: "7201", day: 3, period: 5 },
  { name: "社会数理モデリング", num: "8109", day: 3, period: 7 },
  // 木曜
  { name: "高度応用情報科学科概論", num: "8101", day: 4, period: 2 },
  { name: "情報数学２", num: "8202", day: 4, period: 5 },
  // 金曜
  { name: "情報ネットワーク", num: "1231", day: 5, period: 2 },
  { name: "データサイエンス入門", num: "8207", day: 5, period: 5 },
  { name: "課題探求セミナー・総合学際科目", num: "null", day: 5, period: 7 }
];

// ===== 時限の対応表 =====
// time は「時 * 100 + 分」の4桁の数値（例: 12:30 → 1230）
// ※ 時刻は仮の値（1限9:00、1コマ1時間）です。大学の実際の時間割に合わせて直してください。
const periods = [
  { period: 1, open: 830, close: 1000 },
  { period: 2, open: 930, close: 1100 },
  { period: 3, open: 1030, close: 1200 },
  { period: 4, open: 1130, close: 1300 },
  { period: 5, open: 1230, close: 1400 },
  { period: 6, open: 1330, close: 1500 },
  { period: 7, open: 1430, close: 1600 },
  { period: 8, open: 1530, close: 1700 },
  { period: 9, open: 1630, close: 1800 },
  { period: 10, open: 1730, close: 1900 },
];
