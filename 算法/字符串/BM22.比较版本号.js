/**
 * @param version1 string字符串 
 * @param version2 string字符串 
 * @return int整型
 */
function compareVersion(version1, version2) {
  let i = 0, j = 0;
  const n1 = version1.length, n2 = version2.length;
  
  while (i < n1 || j < n2) {
    // 获取 version1 当前段的数字
    let num1 = 0;
    while (i < n1 && version1[i] !== '.') {
      num1 = num1 * 10 + (version1.charCodeAt(i) - 48); // '0'的ASCII码是48
      i++;
    }
    i++; // 跳过点号
    
    // 获取 version2 当前段的数字
    let num2 = 0;
    while (j < n2 && version2[j] !== '.') {
      num2 = num2 * 10 + (version2.charCodeAt(j) - 48);
      j++;
    }
    j++; // 跳过点号
    
    // 比较当前段
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  
  return 0; // 所有段都相等
}