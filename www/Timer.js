
// Timer class provide DOM content renderer and model of 1 second decrements.

// クラス設計
// - 1分タイマーのロジックはTimerクラスとして実装する
// - Timerクラスは、カウントダウンする秒数がインスタンス化の際に設定される
// - Timerクラスは、更新するDOM Elementのidをインスタンス化の際に受けつける
// - Timerクラスは、動作を制御するstart, stop, resetのメソッドを持つ
// - Timerクラスは、ビューを更新するrenderメソッドを持つ
// - Timerクラスは、待機状態とカウントダウン状態の2つの状態を持つ
// - startメソッドとstopメソッドはそれぞれ待機状態とカウントダウン状態の遷移を実行する
// - resetメソッドは、待機状態への遷移を実行し、タイマーの秒数を初期値に再度設定する
// - renderメソッドは、DOM ElementのinnerTextプロパティの書き換えを実行する

const Timer = class Timer {

  constructor(initial, displayId) {
    // this.initial = initial ? Math.floor(initial) : 60
    // this.display = document.getElementById(displayId)
    // this.counting = false
    // this.reset()
  }

  // start or restart timer
  start() {
    // // start can be use as reset when finished
    // if (this.value <= 0) {
    //   this.reset()
    // }
    //
    // // prevent duplicate call
    // if (this.counting) {
    //   return
    // }
    // this.counting = true
    //
    // // timer manipulation
    // this.timerId = setInterval(
    //   () => {
    //     this.value -= 1
    //     this.render()
    //     if (this.value <= 0) {
    //       this.stop()
    //       }
    //     }
    //   },
    //   1000
    // )
  }

  // stop timer
  stop() {
    // // timer manipulation
    // clearInterval(this.timerId)
    // this.counting = false
  }

  // reset model
  reset() {
    // this.stop()
    // this.timerId = false
    // this.value = this.initial
    // this.render()
  }

  // render dom content
  render() {
    // var sec = this.value
    //
    // // get hour value
    // var hour = Math.floor(sec / 3600)
    // sec -= 3600 * hour
    // //get min value
    // var min = Math.floor(sec / 60)
    // sec -= Math.round(60 * min)
    //
    // // ZERO-fills
    // hour = hour < 10 ? "0" + hour : "" + hour
    // min  = min  < 10 ? "0" + min  : "" + min
    // sec  = sec  < 10 ? "0" + sec  : "" + sec
    // this.display.innerText = [hour, min, sec].join(":")
  }
}
