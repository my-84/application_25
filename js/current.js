// lectures.js（lectures, periods）より後に読み込むこと

// ===== 今の日時を1回だけ取得 =====
const now = new Date();
const day = now.getDay();                                // 曜日（日=0 … 土=6）
const time = now.getHours() * 100 + now.getMinutes();    // 12:30 → 1230

// ===== この講義はいま開かれているか？ =====
function isNow(lecture) {
  // 今日の曜日と違えば対象外
  if (lecture.day !== day) {
    return false;
  }

  const openTime = periods[lecture.period - 1]["open"];
  const closeTime = periods[lecture.period - 1]["close"];

  // 開始以上・終了未満（境目の二重判定を避ける）
  return openTime <= time && time < closeTime;
}

// ===== 開講中の講義を集める =====
const currentLectures = [];
for (const lecture of lectures) {
  if (isNow(lecture)) {
    currentLectures.push(lecture);
  }
}

// ===== ページ上部に表示 =====
const nowBox = document.getElementById("nowBox");

if (currentLectures.length > 0) {
  const box = document.createElement("div");
  box.className = "box";

  for (const lecture of currentLectures) {
    const link = document.createElement("a");
    link.href = "https://attendance.is.chibatech.ac.jp/attendance/class_room/" + lecture.num;
    link.textContent = lecture.name + "　：　" + lecture.num + "教室";
    box.appendChild(link);
  }
  nowBox.appendChild(box);
} else {
  const noLecture = document.createElement("p");
  noLecture.textContent = "－現在登録できる講義はありません－";
  noLecture.className = "no-lecture";
  nowBox.appendChild(noLecture);
}
