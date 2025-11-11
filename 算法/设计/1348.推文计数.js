
var TweetCounts = function() {
  this.tweets = new Map()
};

/** 
 * @param {string} tweetName 
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
  if (!this.tweets.has(tweetName)) {
    this.tweets.set(tweetName, [])
  }
  this.tweets.get(tweetName).push(time)
};

/** 
 * @param {string} freq 
 * @param {string} tweetName 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
  if (!this.tweets.has(tweetName)) {
    return new Array(Math.floor((endTime - startTime) / this.getChunk(freq)) + 1).fill(0)
  }
  const times = this.tweets.get(tweetName)
  const chunk = this.getChunk(freq)
  const result = []
  for (let t = startTime; t <= endTime; t += chunk) {
    result.push(0)
  }
  for (const time of times) {
    if (time < startTime || time > endTime) continue
    const index = Math.floor((time - startTime) / chunk)
    result[index]++
  } 
  return result
};

TweetCounts.prototype.getChunk = function(freq) {
  const map = {
    'minute': 60,
    'hour': 60 * 60,
    'day': 60 * 60 * 24
  }

  return map[freq]
}

/** 
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */