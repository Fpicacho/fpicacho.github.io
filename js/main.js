// 获取年龄标签
const OldDom = document.querySelector("#Old");

// 计算年龄
function calculateAge(birthday) {
  // 解析输入的生日字符串为日期对象
  const birthDate = new Date(birthday);
  const today = new Date();

  // 计算年龄
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // 如果还没有到生日的月份，年龄减一
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

// 插入年龄标签内容
OldDom.innerText = `${calculateAge("2000-02-06")} years old`;
// console.log(OldDom);
