//Substring with Concatenation of All Words

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

/*
  Input:
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
  Output: []
*/
var findSubstring = function(s, words) {
  let wn = words.length;//词汇数量
  let sn = s.length;    //串长
  if (sn == 0 ||wn == 0 ||sn <wn) {
    return [];
  }
  let single = words[0].length //单个单词长
  let dp = new Array(wn).fill(true);
  let res = [];
  for (let i = 0; i < sn; i++) {
    // 从 i 到 i + wn*single - 1的子串，能否由 words 组成
    // 策略是 先 i 到 i + single -1 ,匹配上了就继续往前
    // i + single 到 i + 2*single-1
    let j;
    for (j = 0; j < wn; j++) {
      if (!compare(s, i + j * single, single, words, dp)) {
        break;
      }
    }
    dp.fill(true);
    if (j == wn) {//匹配上
      res.push(i);
    }
  }
  return res;
};

function compare(s, i, single, words, dp) {
  let j;
  for (j = 0; j < dp.length; j++) {
    if (dp[j] == true && s.substr(i, single) == words[j]) {
      dp[j] = false;
      return true;
    }
  }
  return false;
}
