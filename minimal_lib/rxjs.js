System.registerDynamic("rxjs-compat/Observable", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  exports.Observable = rxjs_1.Observable;

});
System.registerDynamic("rxjs/Observable", ["rxjs-compat/Observable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export($__require("rxjs-compat/Observable"));

});
System.registerDynamic("rxjs/add/observable/bindCallback", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.bindCallback = rxjs_1.bindCallback;

});
System.registerDynamic("rxjs/add/observable/bindNodeCallback", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.bindNodeCallback = rxjs_1.bindNodeCallback;

});
System.registerDynamic("rxjs/add/observable/combineLatest", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.combineLatest = rxjs_1.combineLatest;

});
System.registerDynamic("rxjs/add/observable/concat", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.concat = rxjs_1.concat;

});
System.registerDynamic("rxjs/add/observable/defer", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.defer = rxjs_1.defer;

});
System.registerDynamic("rxjs/add/observable/empty", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.empty = rxjs_1.empty;

});
System.registerDynamic("rxjs/add/observable/forkJoin", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.forkJoin = rxjs_1.forkJoin;

});
System.registerDynamic("rxjs/add/observable/from", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.from = rxjs_1.from;

});
System.registerDynamic("rxjs/add/observable/fromEvent", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.fromEvent = rxjs_1.fromEvent;

});
System.registerDynamic("rxjs/add/observable/fromEventPattern", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.fromEventPattern = rxjs_1.fromEventPattern;

});
System.registerDynamic("rxjs/add/observable/fromPromise", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.fromPromise = rxjs_1.from;

});
System.registerDynamic("rxjs/add/observable/generate", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.generate = rxjs_1.generate;

});
System.registerDynamic("rxjs/add/observable/if", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.if = rxjs_1.iif;

});
System.registerDynamic("rxjs/add/observable/interval", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.interval = rxjs_1.interval;

});
System.registerDynamic("rxjs/add/observable/merge", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.merge = rxjs_1.merge;

});
System.registerDynamic("rxjs/add/observable/race", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.race = rxjs_1.race;

});
System.registerDynamic("rxjs/add/observable/never", ["rxjs"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var rxjs_1 = $__require("rxjs");
    function staticNever() {
        return rxjs_1.NEVER;
    }
    exports.staticNever = staticNever;
    rxjs_1.Observable.never = staticNever;

});
System.registerDynamic("rxjs/add/observable/of", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.of = rxjs_1.of;

});
System.registerDynamic("rxjs/add/observable/onErrorResumeNext", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.onErrorResumeNext = rxjs_1.onErrorResumeNext;

});
System.registerDynamic("rxjs/add/observable/pairs", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.pairs = rxjs_1.pairs;

});
System.registerDynamic("rxjs/add/observable/range", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.range = rxjs_1.range;

});
System.registerDynamic("rxjs/add/observable/using", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.using = rxjs_1.using;

});
System.registerDynamic("rxjs/add/observable/throw", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.throw = rxjs_1.throwError;
  rxjs_1.Observable.throwError = rxjs_1.throwError;

});
System.registerDynamic("rxjs/add/observable/timer", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.timer = rxjs_1.timer;

});
System.registerDynamic("rxjs/add/observable/zip", ["rxjs"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  rxjs_1.Observable.zip = rxjs_1.zip;

});
System.registerDynamic("rxjs/add/observable/dom/ajax", ["rxjs", "rxjs/ajax"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var ajax_1 = $__require("rxjs/ajax");
  rxjs_1.Observable.ajax = ajax_1.ajax;

});
System.registerDynamic("rxjs/webSocket", ["rxjs/internal/observable/dom/webSocket", "rxjs/internal/observable/dom/WebSocketSubject"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var webSocket_1 = $__require("rxjs/internal/observable/dom/webSocket");
  exports.webSocket = webSocket_1.webSocket;
  var WebSocketSubject_1 = $__require("rxjs/internal/observable/dom/WebSocketSubject");
  exports.WebSocketSubject = WebSocketSubject_1.WebSocketSubject;

});
System.registerDynamic("rxjs/add/observable/dom/webSocket", ["rxjs", "rxjs/webSocket"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var webSocket_1 = $__require("rxjs/webSocket");
  rxjs_1.Observable.webSocket = webSocket_1.webSocket;

});
System.registerDynamic("rxjs-compat/operator/buffer", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Buffers the source Observable values until `closingNotifier` emits.
   *
   * <span class="informal">Collects values from the past as an array, and emits
   * that array only when another Observable emits.</span>
   *
   * <img src="./img/buffer.png" width="100%">
   *
   * Buffers the incoming Observable values until the given `closingNotifier`
   * Observable emits a value, at which point it emits the buffer on the output
   * Observable and starts a new buffer internally, awaiting the next time
   * `closingNotifier` emits.
   *
   * @example <caption>On every click, emit array of most recent interval events</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var interval = Rx.Observable.interval(1000);
   * var buffered = interval.buffer(clicks);
   * buffered.subscribe(x => console.log(x));
   *
   * @see {@link bufferCount}
   * @see {@link bufferTime}
   * @see {@link bufferToggle}
   * @see {@link bufferWhen}
   * @see {@link window}
   *
   * @param {Observable<any>} closingNotifier An Observable that signals the
   * buffer to be emitted on the output Observable.
   * @return {Observable<T[]>} An Observable of buffers, which are arrays of
   * values.
   * @method buffer
   * @owner Observable
   */
  function buffer(closingNotifier) {
    return operators_1.buffer(closingNotifier)(this);
  }
  exports.buffer = buffer;

});
System.registerDynamic("rxjs/add/operator/buffer", ["rxjs", "rxjs-compat/operator/buffer"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var buffer_1 = $__require("rxjs-compat/operator/buffer");
  rxjs_1.Observable.prototype.buffer = buffer_1.buffer;

});
System.registerDynamic("rxjs-compat/operator/bufferCount", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Buffers the source Observable values until the size hits the maximum
   * `bufferSize` given.
   *
   * <span class="informal">Collects values from the past as an array, and emits
   * that array only when its size reaches `bufferSize`.</span>
   *
   * <img src="./img/bufferCount.png" width="100%">
   *
   * Buffers a number of values from the source Observable by `bufferSize` then
   * emits the buffer and clears it, and starts a new buffer each
   * `startBufferEvery` values. If `startBufferEvery` is not provided or is
   * `null`, then new buffers are started immediately at the start of the source
   * and when each buffer closes and is emitted.
   *
   * @example <caption>Emit the last two click events as an array</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var buffered = clicks.bufferCount(2);
   * buffered.subscribe(x => console.log(x));
   *
   * @example <caption>On every click, emit the last two click events as an array</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var buffered = clicks.bufferCount(2, 1);
   * buffered.subscribe(x => console.log(x));
   *
   * @see {@link buffer}
   * @see {@link bufferTime}
   * @see {@link bufferToggle}
   * @see {@link bufferWhen}
   * @see {@link pairwise}
   * @see {@link windowCount}
   *
   * @param {number} bufferSize The maximum size of the buffer emitted.
   * @param {number} [startBufferEvery] Interval at which to start a new buffer.
   * For example if `startBufferEvery` is `2`, then a new buffer will be started
   * on every other value from the source. A new buffer is started at the
   * beginning of the source by default.
   * @return {Observable<T[]>} An Observable of arrays of buffered values.
   * @method bufferCount
   * @owner Observable
   */
  function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
      startBufferEvery = null;
    }
    return operators_1.bufferCount(bufferSize, startBufferEvery)(this);
  }
  exports.bufferCount = bufferCount;

});
System.registerDynamic("rxjs/add/operator/bufferCount", ["rxjs", "rxjs-compat/operator/bufferCount"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var bufferCount_1 = $__require("rxjs-compat/operator/bufferCount");
  rxjs_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;

});
System.registerDynamic("rxjs-compat/operator/bufferTime", ["rxjs", "rxjs/internal-compatibility", "rxjs/operators"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var rxjs_1 = $__require("rxjs");
    var internal_compatibility_1 = $__require("rxjs/internal-compatibility");
    var operators_1 = $__require("rxjs/operators");
    /* tslint:enable:max-line-length */
    /**
     * Buffers the source Observable values for a specific time period.
     *
     * <span class="informal">Collects values from the past as an array, and emits
     * those arrays periodically in time.</span>
     *
     * <img src="./img/bufferTime.png" width="100%">
     *
     * Buffers values from the source for a specific time duration `bufferTimeSpan`.
     * Unless the optional argument `bufferCreationInterval` is given, it emits and
     * resets the buffer every `bufferTimeSpan` milliseconds. If
     * `bufferCreationInterval` is given, this operator opens the buffer every
     * `bufferCreationInterval` milliseconds and closes (emits and resets) the
     * buffer every `bufferTimeSpan` milliseconds. When the optional argument
     * `maxBufferSize` is specified, the buffer will be closed either after
     * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
     *
     * @example <caption>Every second, emit an array of the recent click events</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var buffered = clicks.bufferTime(1000);
     * buffered.subscribe(x => console.log(x));
     *
     * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var buffered = clicks.bufferTime(2000, 5000);
     * buffered.subscribe(x => console.log(x));
     *
     * @see {@link buffer}
     * @see {@link bufferCount}
     * @see {@link bufferToggle}
     * @see {@link bufferWhen}
     * @see {@link windowTime}
     *
     * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
     * @param {number} [bufferCreationInterval] The interval at which to start new
     * buffers.
     * @param {number} [maxBufferSize] The maximum buffer size.
     * @param {Scheduler} [scheduler=asyncScheduler] The scheduler on which to schedule the
     * intervals that determine buffer boundaries.
     * @return {Observable<T[]>} An observable of arrays of buffered values.
     * @method bufferTime
     * @owner Observable
     */
    function bufferTime(bufferTimeSpan) {
        var length = arguments.length;
        var scheduler = rxjs_1.asyncScheduler;
        if (internal_compatibility_1.isScheduler(arguments[arguments.length - 1])) {
            scheduler = arguments[arguments.length - 1];
            length--;
        }
        var bufferCreationInterval = null;
        if (length >= 2) {
            bufferCreationInterval = arguments[1];
        }
        var maxBufferSize = Number.POSITIVE_INFINITY;
        if (length >= 3) {
            maxBufferSize = arguments[2];
        }
        return operators_1.bufferTime(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler)(this);
    }
    exports.bufferTime = bufferTime;

});
System.registerDynamic("rxjs/add/operator/bufferTime", ["rxjs", "rxjs-compat/operator/bufferTime"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var bufferTime_1 = $__require("rxjs-compat/operator/bufferTime");
  rxjs_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;

});
System.registerDynamic("rxjs-compat/operator/bufferToggle", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Buffers the source Observable values starting from an emission from
   * `openings` and ending when the output of `closingSelector` emits.
   *
   * <span class="informal">Collects values from the past as an array. Starts
   * collecting only when `opening` emits, and calls the `closingSelector`
   * function to get an Observable that tells when to close the buffer.</span>
   *
   * <img src="./img/bufferToggle.png" width="100%">
   *
   * Buffers values from the source by opening the buffer via signals from an
   * Observable provided to `openings`, and closing and sending the buffers when
   * a Subscribable or Promise returned by the `closingSelector` function emits.
   *
   * @example <caption>Every other second, emit the click events from the next 500ms</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var openings = Rx.Observable.interval(1000);
   * var buffered = clicks.bufferToggle(openings, i =>
   *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
   * );
   * buffered.subscribe(x => console.log(x));
   *
   * @see {@link buffer}
   * @see {@link bufferCount}
   * @see {@link bufferTime}
   * @see {@link bufferWhen}
   * @see {@link windowToggle}
   *
   * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
   * buffers.
   * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
   * the value emitted by the `openings` observable and returns a Subscribable or Promise,
   * which, when it emits, signals that the associated buffer should be emitted
   * and cleared.
   * @return {Observable<T[]>} An observable of arrays of buffered values.
   * @method bufferToggle
   * @owner Observable
   */
  function bufferToggle(openings, closingSelector) {
    return operators_1.bufferToggle(openings, closingSelector)(this);
  }
  exports.bufferToggle = bufferToggle;

});
System.registerDynamic("rxjs/add/operator/bufferToggle", ["rxjs", "rxjs-compat/operator/bufferToggle"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var bufferToggle_1 = $__require("rxjs-compat/operator/bufferToggle");
  rxjs_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;

});
System.registerDynamic("rxjs-compat/operator/bufferWhen", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Buffers the source Observable values, using a factory function of closing
   * Observables to determine when to close, emit, and reset the buffer.
   *
   * <span class="informal">Collects values from the past as an array. When it
   * starts collecting values, it calls a function that returns an Observable that
   * tells when to close the buffer and restart collecting.</span>
   *
   * <img src="./img/bufferWhen.png" width="100%">
   *
   * Opens a buffer immediately, then closes the buffer when the observable
   * returned by calling `closingSelector` function emits a value. When it closes
   * the buffer, it immediately opens a new buffer and repeats the process.
   *
   * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var buffered = clicks.bufferWhen(() =>
   *   Rx.Observable.interval(1000 + Math.random() * 4000)
   * );
   * buffered.subscribe(x => console.log(x));
   *
   * @see {@link buffer}
   * @see {@link bufferCount}
   * @see {@link bufferTime}
   * @see {@link bufferToggle}
   * @see {@link windowWhen}
   *
   * @param {function(): Observable} closingSelector A function that takes no
   * arguments and returns an Observable that signals buffer closure.
   * @return {Observable<T[]>} An observable of arrays of buffered values.
   * @method bufferWhen
   * @owner Observable
   */
  function bufferWhen(closingSelector) {
    return operators_1.bufferWhen(closingSelector)(this);
  }
  exports.bufferWhen = bufferWhen;

});
System.registerDynamic("rxjs/add/operator/bufferWhen", ["rxjs", "rxjs-compat/operator/bufferWhen"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var bufferWhen_1 = $__require("rxjs-compat/operator/bufferWhen");
  rxjs_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;

});
System.registerDynamic("rxjs-compat/operator/catch", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Catches errors on the observable to be handled by returning a new observable or throwing an error.
   *
   * <img src="./img/catch.png" width="100%">
   *
   * @example <caption>Continues with a different Observable when there's an error</caption>
   *
   * Observable.of(1, 2, 3, 4, 5)
   *   .map(n => {
   * 	   if (n == 4) {
   * 	     throw 'four!';
   *     }
   *	   return n;
   *   })
   *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
   *   .subscribe(x => console.log(x));
   *   // 1, 2, 3, I, II, III, IV, V
   *
   * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
   *
   * Observable.of(1, 2, 3, 4, 5)
   *   .map(n => {
   * 	   if (n === 4) {
   * 	     throw 'four!';
   *     }
   * 	   return n;
   *   })
   *   .catch((err, caught) => caught)
   *   .take(30)
   *   .subscribe(x => console.log(x));
   *   // 1, 2, 3, 1, 2, 3, ...
   *
   * @example <caption>Throws a new error when the source Observable throws an error</caption>
   *
   * Observable.of(1, 2, 3, 4, 5)
   *   .map(n => {
   *     if (n == 4) {
   *       throw 'four!';
   *     }
   *     return n;
   *   })
   *   .catch(err => {
   *     throw 'error in source. Details: ' + err;
   *   })
   *   .subscribe(
   *     x => console.log(x),
   *     err => console.log(err)
   *   );
   *   // 1, 2, 3, error in source. Details: four!
   *
   * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
   *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
   *  is returned by the `selector` will be used to continue the observable chain.
   * @return {Observable} An observable that originates from either the source or the observable returned by the
   *  catch `selector` function.
   * @method catch
   * @name catch
   * @owner Observable
   */
  function _catch(selector) {
    return operators_1.catchError(selector)(this);
  }
  exports._catch = _catch;

});
System.registerDynamic("rxjs/add/operator/catch", ["rxjs", "rxjs-compat/operator/catch"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var catch_1 = $__require("rxjs-compat/operator/catch");
  rxjs_1.Observable.prototype.catch = catch_1._catch;
  rxjs_1.Observable.prototype._catch = catch_1._catch;

});
System.registerDynamic("rxjs-compat/operator/combineAll", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Converts a higher-order Observable into a first-order Observable by waiting
   * for the outer Observable to complete, then applying {@link combineLatest}.
   *
   * <span class="informal">Flattens an Observable-of-Observables by applying
   * {@link combineLatest} when the Observable-of-Observables completes.</span>
   *
   * <img src="./img/combineAll.png" width="100%">
   *
   * Takes an Observable of Observables, and collects all Observables from it.
   * Once the outer Observable completes, it subscribes to all collected
   * Observables and combines their values using the {@link combineLatest}
   * strategy, such that:
   * - Every time an inner Observable emits, the output Observable emits.
   * - When the returned observable emits, it emits all of the latest values by:
   *   - If a `project` function is provided, it is called with each recent value
   *     from each inner Observable in whatever order they arrived, and the result
   *     of the `project` function is what is emitted by the output Observable.
   *   - If there is no `project` function, an array of all of the most recent
   *     values is emitted by the output Observable.
   *
   * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var higherOrder = clicks.map(ev =>
   *   Rx.Observable.interval(Math.random()*2000).take(3)
   * ).take(2);
   * var result = higherOrder.combineAll();
   * result.subscribe(x => console.log(x));
   *
   * @see {@link combineLatest}
   * @see {@link mergeAll}
   *
   * @param {function} [project] An optional function to map the most recent
   * values from each inner Observable into a new result. Takes each of the most
   * recent values from each collected inner Observable as arguments, in order.
   * @return {Observable} An Observable of projected results or arrays of recent
   * values.
   * @method combineAll
   * @owner Observable
   */
  function combineAll(project) {
    return operators_1.combineAll(project)(this);
  }
  exports.combineAll = combineAll;

});
System.registerDynamic("rxjs/add/operator/combineAll", ["rxjs", "rxjs-compat/operator/combineAll"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var combineAll_1 = $__require("rxjs-compat/operator/combineAll");
  rxjs_1.Observable.prototype.combineAll = combineAll_1.combineAll;

});
System.registerDynamic("rxjs-compat/operator/combineLatest", ["rxjs", "rxjs/internal-compatibility"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var rxjs_1 = $__require("rxjs");
    var internal_compatibility_1 = $__require("rxjs/internal-compatibility");
    /* tslint:enable:max-line-length */
    /**
     * Combines multiple Observables to create an Observable whose values are
     * calculated from the latest values of each of its input Observables.
     *
     * <span class="informal">Whenever any input Observable emits a value, it
     * computes a formula using the latest values from all the inputs, then emits
     * the output of that formula.</span>
     *
     * <img src="./img/combineLatest.png" width="100%">
     *
     * `combineLatest` combines the values from this Observable with values from
     * Observables passed as arguments. This is done by subscribing to each
     * Observable, in order, and collecting an array of each of the most recent
     * values any time any of the input Observables emits, then either taking that
     * array and passing it as arguments to an optional `project` function and
     * emitting the return value of that, or just emitting the array of recent
     * values directly if there is no `project` function.
     *
     * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
     * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
     * var height = Rx.Observable.of(1.76, 1.77, 1.78);
     * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
     * bmi.subscribe(x => console.log('BMI is ' + x));
     *
     * // With output to console:
     * // BMI is 24.212293388429753
     * // BMI is 23.93948099205209
     * // BMI is 23.671253629592222
     *
     * @see {@link combineAll}
     * @see {@link merge}
     * @see {@link withLatestFrom}
     *
     * @param {ObservableInput} other An input Observable to combine with the source
     * Observable. More than one input Observables may be given as argument.
     * @param {function} [project] An optional function to project the values from
     * the combined latest values into a new value on the output Observable.
     * @return {Observable} An Observable of projected values from the most recent
     * values from each input Observable, or an array of the most recent values from
     * each input Observable.
     * @method combineLatest
     * @owner Observable
     */
    function combineLatest() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        var project = null;
        if (typeof observables[observables.length - 1] === 'function') {
            project = observables.pop();
        }
        // if the first and only other argument besides the resultSelector is an array
        // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
        if (observables.length === 1 && internal_compatibility_1.isArray(observables[0])) {
            observables = observables[0].slice();
        }
        return this.lift.call(rxjs_1.of.apply(void 0, [this].concat(observables)), new internal_compatibility_1.CombineLatestOperator(project));
    }
    exports.combineLatest = combineLatest;

});
System.registerDynamic("rxjs/add/operator/combineLatest", ["rxjs", "rxjs-compat/operator/combineLatest"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var combineLatest_1 = $__require("rxjs-compat/operator/combineLatest");
  rxjs_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;

});
System.registerDynamic("rxjs-compat/operator/concat", ["rxjs"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var rxjs_1 = $__require("rxjs");
    /* tslint:enable:max-line-length */
    /**
     * Creates an output Observable which sequentially emits all values from every
     * given input Observable after the current Observable.
     *
     * <span class="informal">Concatenates multiple Observables together by
     * sequentially emitting their values, one Observable after the other.</span>
     *
     * <img src="./img/concat.png" width="100%">
     *
     * Joins this Observable with multiple other Observables by subscribing to them
     * one at a time, starting with the source, and merging their results into the
     * output Observable. Will wait for each Observable to complete before moving
     * on to the next.
     *
     * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
     * var timer = Rx.Observable.interval(1000).take(4);
     * var sequence = Rx.Observable.range(1, 10);
     * var result = timer.concat(sequence);
     * result.subscribe(x => console.log(x));
     *
     * // results in:
     * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
     *
     * @example <caption>Concatenate 3 Observables</caption>
     * var timer1 = Rx.Observable.interval(1000).take(10);
     * var timer2 = Rx.Observable.interval(2000).take(6);
     * var timer3 = Rx.Observable.interval(500).take(10);
     * var result = timer1.concat(timer2, timer3);
     * result.subscribe(x => console.log(x));
     *
     * // results in the following:
     * // (Prints to console sequentially)
     * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
     * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
     * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
     *
     * @see {@link concatAll}
     * @see {@link concatMap}
     * @see {@link concatMapTo}
     *
     * @param {ObservableInput} other An input Observable to concatenate after the source
     * Observable. More than one input Observables may be given as argument.
     * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
     * Observable subscription on.
     * @return {Observable} All values of each passed Observable merged into a
     * single Observable, in order, in serial fashion.
     * @method concat
     * @owner Observable
     */
    function concat() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return this.lift.call(rxjs_1.concat.apply(void 0, [this].concat(observables)));
    }
    exports.concat = concat;

});
System.registerDynamic("rxjs/add/operator/concat", ["rxjs", "rxjs-compat/operator/concat"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var concat_1 = $__require("rxjs-compat/operator/concat");
  rxjs_1.Observable.prototype.concat = concat_1.concat;

});
System.registerDynamic("rxjs-compat/operator/concatAll", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Converts a higher-order Observable into a first-order Observable by
   * concatenating the inner Observables in order.
   *
   * <span class="informal">Flattens an Observable-of-Observables by putting one
   * inner Observable after the other.</span>
   *
   * <img src="./img/concatAll.png" width="100%">
   *
   * Joins every Observable emitted by the source (a higher-order Observable), in
   * a serial fashion. It subscribes to each inner Observable only after the
   * previous inner Observable has completed, and merges all of their values into
   * the returned observable.
   *
   * __Warning:__ If the source Observable emits Observables quickly and
   * endlessly, and the inner Observables it emits generally complete slower than
   * the source emits, you can run into memory issues as the incoming Observables
   * collect in an unbounded buffer.
   *
   * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
   * to `1`.
   *
   * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
   * var firstOrder = higherOrder.concatAll();
   * firstOrder.subscribe(x => console.log(x));
   *
   * // Results in the following:
   * // (results are not concurrent)
   * // For every click on the "document" it will emit values 0 to 3 spaced
   * // on a 1000ms interval
   * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
   *
   * @see {@link combineAll}
   * @see {@link concat}
   * @see {@link concatMap}
   * @see {@link concatMapTo}
   * @see {@link exhaust}
   * @see {@link mergeAll}
   * @see {@link switch}
   * @see {@link zipAll}
   *
   * @return {Observable} An Observable emitting values from all the inner
   * Observables concatenated.
   * @method concatAll
   * @owner Observable
   */
  function concatAll() {
    return operators_1.concatAll()(this);
  }
  exports.concatAll = concatAll;

});
System.registerDynamic("rxjs/add/operator/concatAll", ["rxjs", "rxjs-compat/operator/concatAll"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var concatAll_1 = $__require("rxjs-compat/operator/concatAll");
  rxjs_1.Observable.prototype.concatAll = concatAll_1.concatAll;

});
System.registerDynamic("rxjs-compat/operator/concatMap", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Projects each source value to an Observable which is merged in the output
   * Observable, in a serialized fashion waiting for each one to complete before
   * merging the next.
   *
   * <span class="informal">Maps each value to an Observable, then flattens all of
   * these inner Observables using {@link concatAll}.</span>
   *
   * <img src="./img/concatMap.png" width="100%">
   *
   * Returns an Observable that emits items based on applying a function that you
   * supply to each item emitted by the source Observable, where that function
   * returns an (so-called "inner") Observable. Each new inner Observable is
   * concatenated with the previous inner Observable.
   *
   * __Warning:__ if source values arrive endlessly and faster than their
   * corresponding inner Observables can complete, it will result in memory issues
   * as inner Observables amass in an unbounded buffer waiting for their turn to
   * be subscribed to.
   *
   * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
   * to `1`.
   *
   * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
   * result.subscribe(x => console.log(x));
   *
   * // Results in the following:
   * // (results are not concurrent)
   * // For every click on the "document" it will emit values 0 to 3 spaced
   * // on a 1000ms interval
   * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
   *
   * @see {@link concat}
   * @see {@link concatAll}
   * @see {@link concatMapTo}
   * @see {@link exhaustMap}
   * @see {@link mergeMap}
   * @see {@link switchMap}
   *
   * @param {function(value: T, ?index: number): ObservableInput} project A function
   * that, when applied to an item emitted by the source Observable, returns an
   * Observable.
   * @return {Observable} An Observable that emits the result of applying the
   * projection function (and the optional `resultSelector`) to each item emitted
   * by the source Observable and taking values from each projected inner
   * Observable sequentially.
   * @method concatMap
   * @owner Observable
   */
  function concatMap(project) {
    return operators_1.concatMap(project)(this);
  }
  exports.concatMap = concatMap;

});
System.registerDynamic("rxjs/add/operator/concatMap", ["rxjs", "rxjs-compat/operator/concatMap"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var concatMap_1 = $__require("rxjs-compat/operator/concatMap");
  rxjs_1.Observable.prototype.concatMap = concatMap_1.concatMap;

});
System.registerDynamic("rxjs-compat/operator/concatMapTo", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Projects each source value to the same Observable which is merged multiple
   * times in a serialized fashion on the output Observable.
   *
   * <span class="informal">It's like {@link concatMap}, but maps each value
   * always to the same inner Observable.</span>
   *
   * <img src="./img/concatMapTo.png" width="100%">
   *
   * Maps each source value to the given Observable `innerObservable` regardless
   * of the source value, and then flattens those resulting Observables into one
   * single Observable, which is the output Observable. Each new `innerObservable`
   * instance emitted on the output Observable is concatenated with the previous
   * `innerObservable` instance.
   *
   * __Warning:__ if source values arrive endlessly and faster than their
   * corresponding inner Observables can complete, it will result in memory issues
   * as inner Observables amass in an unbounded buffer waiting for their turn to
   * be subscribed to.
   *
   * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
   * set to `1`.
   *
   * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
   * result.subscribe(x => console.log(x));
   *
   * // Results in the following:
   * // (results are not concurrent)
   * // For every click on the "document" it will emit values 0 to 3 spaced
   * // on a 1000ms interval
   * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
   *
   * @see {@link concat}
   * @see {@link concatAll}
   * @see {@link concatMap}
   * @see {@link mergeMapTo}
   * @see {@link switchMapTo}
   *
   * @param {ObservableInput} innerObservable An Observable to replace each value from
   * the source Observable.
   * @return {Observable} An observable of values merged together by joining the
   * passed observable with itself, one after the other, for each value emitted
   * from the source.
   * @method concatMapTo
   * @owner Observable
   */
  function concatMapTo(innerObservable) {
    return operators_1.concatMapTo(innerObservable)(this);
  }
  exports.concatMapTo = concatMapTo;

});
System.registerDynamic("rxjs/add/operator/concatMapTo", ["rxjs", "rxjs-compat/operator/concatMapTo"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var concatMapTo_1 = $__require("rxjs-compat/operator/concatMapTo");
  rxjs_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;

});
System.registerDynamic("rxjs-compat/operator/count", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Counts the number of emissions on the source and emits that number when the
   * source completes.
   *
   * <span class="informal">Tells how many values were emitted, when the source
   * completes.</span>
   *
   * <img src="./img/count.png" width="100%">
   *
   * `count` transforms an Observable that emits values into an Observable that
   * emits a single value that represents the number of values emitted by the
   * source Observable. If the source Observable terminates with an error, `count`
   * will pass this error notification along without emitting a value first. If
   * the source Observable does not terminate at all, `count` will neither emit
   * a value nor terminate. This operator takes an optional `predicate` function
   * as argument, in which case the output emission will represent the number of
   * source values that matched `true` with the `predicate`.
   *
   * @example <caption>Counts how many seconds have passed before the first click happened</caption>
   * var seconds = Rx.Observable.interval(1000);
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var secondsBeforeClick = seconds.takeUntil(clicks);
   * var result = secondsBeforeClick.count();
   * result.subscribe(x => console.log(x));
   *
   * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
   * var numbers = Rx.Observable.range(1, 7);
   * var result = numbers.count(i => i % 2 === 1);
   * result.subscribe(x => console.log(x));
   *
   * // Results in:
   * // 4
   *
   * @see {@link max}
   * @see {@link min}
   * @see {@link reduce}
   *
   * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
   * boolean function to select what values are to be counted. It is provided with
   * arguments of:
   * - `value`: the value from the source Observable.
   * - `index`: the (zero-based) "index" of the value from the source Observable.
   * - `source`: the source Observable instance itself.
   * @return {Observable} An Observable of one number that represents the count as
   * described above.
   * @method count
   * @owner Observable
   */
  function count(predicate) {
    return operators_1.count(predicate)(this);
  }
  exports.count = count;

});
System.registerDynamic("rxjs/add/operator/count", ["rxjs", "rxjs-compat/operator/count"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var count_1 = $__require("rxjs-compat/operator/count");
  rxjs_1.Observable.prototype.count = count_1.count;

});
System.registerDynamic("rxjs-compat/operator/dematerialize", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Converts an Observable of {@link Notification} objects into the emissions
   * that they represent.
   *
   * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
   * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
   *
   * <img src="./img/dematerialize.png" width="100%">
   *
   * `dematerialize` is assumed to operate an Observable that only emits
   * {@link Notification} objects as `next` emissions, and does not emit any
   * `error`. Such Observable is the output of a `materialize` operation. Those
   * notifications are then unwrapped using the metadata they contain, and emitted
   * as `next`, `error`, and `complete` on the output Observable.
   *
   * Use this operator in conjunction with {@link materialize}.
   *
   * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
   * var notifA = new Rx.Notification('N', 'A');
   * var notifB = new Rx.Notification('N', 'B');
   * var notifE = new Rx.Notification('E', void 0,
   *   new TypeError('x.toUpperCase is not a function')
   * );
   * var materialized = Rx.Observable.of(notifA, notifB, notifE);
   * var upperCase = materialized.dematerialize();
   * upperCase.subscribe(x => console.log(x), e => console.error(e));
   *
   * // Results in:
   * // A
   * // B
   * // TypeError: x.toUpperCase is not a function
   *
   * @see {@link Notification}
   * @see {@link materialize}
   *
   * @return {Observable} An Observable that emits items and notifications
   * embedded in Notification objects emitted by the source Observable.
   * @method dematerialize
   * @owner Observable
   */
  function dematerialize() {
    return operators_1.dematerialize()(this);
  }
  exports.dematerialize = dematerialize;

});
System.registerDynamic("rxjs/add/operator/dematerialize", ["rxjs", "rxjs-compat/operator/dematerialize"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var dematerialize_1 = $__require("rxjs-compat/operator/dematerialize");
  rxjs_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;

});
System.registerDynamic("rxjs-compat/operator/debounce", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Emits a value from the source Observable only after a particular time span
   * determined by another Observable has passed without another source emission.
   *
   * <span class="informal">It's like {@link debounceTime}, but the time span of
   * emission silence is determined by a second Observable.</span>
   *
   * <img src="./img/debounce.png" width="100%">
   *
   * `debounce` delays values emitted by the source Observable, but drops previous
   * pending delayed emissions if a new value arrives on the source Observable.
   * This operator keeps track of the most recent value from the source
   * Observable, and spawns a duration Observable by calling the
   * `durationSelector` function. The value is emitted only when the duration
   * Observable emits a value or completes, and if no other value was emitted on
   * the source Observable since the duration Observable was spawned. If a new
   * value appears before the duration Observable emits, the previous value will
   * be dropped and will not be emitted on the output Observable.
   *
   * Like {@link debounceTime}, this is a rate-limiting operator, and also a
   * delay-like operator since output emissions do not necessarily occur at the
   * same time as they did on the source Observable.
   *
   * @example <caption>Emit the most recent click after a burst of clicks</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.debounce(() => Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link audit}
   * @see {@link debounceTime}
   * @see {@link delayWhen}
   * @see {@link throttle}
   *
   * @param {function(value: T): SubscribableOrPromise} durationSelector A function
   * that receives a value from the source Observable, for computing the timeout
   * duration for each source value, returned as an Observable or a Promise.
   * @return {Observable} An Observable that delays the emissions of the source
   * Observable by the specified duration Observable returned by
   * `durationSelector`, and may drop some values if they occur too frequently.
   * @method debounce
   * @owner Observable
   */
  function debounce(durationSelector) {
    return operators_1.debounce(durationSelector)(this);
  }
  exports.debounce = debounce;

});
System.registerDynamic("rxjs/add/operator/debounce", ["rxjs", "rxjs-compat/operator/debounce"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var debounce_1 = $__require("rxjs-compat/operator/debounce");
  rxjs_1.Observable.prototype.debounce = debounce_1.debounce;

});
System.registerDynamic("rxjs-compat/operator/debounceTime", ["rxjs", "rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var operators_1 = $__require("rxjs/operators");
  /**
   * Emits a value from the source Observable only after a particular time span
   * has passed without another source emission.
   *
   * <span class="informal">It's like {@link delay}, but passes only the most
   * recent value from each burst of emissions.</span>
   *
   * <img src="./img/debounceTime.png" width="100%">
   *
   * `debounceTime` delays values emitted by the source Observable, but drops
   * previous pending delayed emissions if a new value arrives on the source
   * Observable. This operator keeps track of the most recent value from the
   * source Observable, and emits that only when `dueTime` enough time has passed
   * without any other value appearing on the source Observable. If a new value
   * appears before `dueTime` silence occurs, the previous value will be dropped
   * and will not be emitted on the output Observable.
   *
   * This is a rate-limiting operator, because it is impossible for more than one
   * value to be emitted in any time window of duration `dueTime`, but it is also
   * a delay-like operator since output emissions do not occur at the same time as
   * they did on the source Observable. Optionally takes a {@link IScheduler} for
   * managing timers.
   *
   * @example <caption>Emit the most recent click after a burst of clicks</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.debounceTime(1000);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link auditTime}
   * @see {@link debounce}
   * @see {@link delay}
   * @see {@link sampleTime}
   * @see {@link throttleTime}
   *
   * @param {number} dueTime The timeout duration in milliseconds (or the time
   * unit determined internally by the optional `scheduler`) for the window of
   * time required to wait for emission silence before emitting the most recent
   * source value.
   * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
   * managing the timers that handle the timeout for each value.
   * @return {Observable} An Observable that delays the emissions of the source
   * Observable by the specified `dueTime`, and may drop some values if they occur
   * too frequently.
   * @method debounceTime
   * @owner Observable
   */
  function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
      scheduler = rxjs_1.asyncScheduler;
    }
    return operators_1.debounceTime(dueTime, scheduler)(this);
  }
  exports.debounceTime = debounceTime;

});
System.registerDynamic("rxjs/add/operator/debounceTime", ["rxjs", "rxjs-compat/operator/debounceTime"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var debounceTime_1 = $__require("rxjs-compat/operator/debounceTime");
  rxjs_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;

});
System.registerDynamic("rxjs-compat/operator/defaultIfEmpty", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   * Emits a given value if the source Observable completes without emitting any
   * `next` value, otherwise mirrors the source Observable.
   *
   * <span class="informal">If the source Observable turns out to be empty, then
   * this operator will emit a default value.</span>
   *
   * <img src="./img/defaultIfEmpty.png" width="100%">
   *
   * `defaultIfEmpty` emits the values emitted by the source Observable or a
   * specified default value if the source Observable is empty (completes without
   * having emitted any `next` value).
   *
   * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
   * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
   * result.subscribe(x => console.log(x));
   *
   * @see {@link empty}
   * @see {@link last}
   *
   * @param {any} [defaultValue=null] The default value used if the source
   * Observable is empty.
   * @return {Observable} An Observable that emits either the specified
   * `defaultValue` if the source Observable emits no items, or the values emitted
   * by the source Observable.
   * @method defaultIfEmpty
   * @owner Observable
   */
  function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) {
      defaultValue = null;
    }
    return operators_1.defaultIfEmpty(defaultValue)(this);
  }
  exports.defaultIfEmpty = defaultIfEmpty;

});
System.registerDynamic("rxjs/add/operator/defaultIfEmpty", ["rxjs", "rxjs-compat/operator/defaultIfEmpty"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var defaultIfEmpty_1 = $__require("rxjs-compat/operator/defaultIfEmpty");
  rxjs_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;

});
System.registerDynamic("rxjs-compat/operator/delay", ["rxjs", "rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var operators_1 = $__require("rxjs/operators");
  /**
   * Delays the emission of items from the source Observable by a given timeout or
   * until a given Date.
   *
   * <span class="informal">Time shifts each item by some specified amount of
   * milliseconds.</span>
   *
   * <img src="./img/delay.png" width="100%">
   *
   * If the delay argument is a Number, this operator time shifts the source
   * Observable by that amount of time expressed in milliseconds. The relative
   * time intervals between the values are preserved.
   *
   * If the delay argument is a Date, this operator time shifts the start of the
   * Observable execution until the given date occurs.
   *
   * @example <caption>Delay each click by one second</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
   * delayedClicks.subscribe(x => console.log(x));
   *
   * @example <caption>Delay all clicks until a future date happens</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var date = new Date('March 15, 2050 12:00:00'); // in the future
   * var delayedClicks = clicks.delay(date); // click emitted only after that date
   * delayedClicks.subscribe(x => console.log(x));
   *
   * @see {@link debounceTime}
   * @see {@link delayWhen}
   *
   * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
   * a `Date` until which the emission of the source items is delayed.
   * @param {Scheduler} [scheduler=asyncScheduler] The SchedulerLike to use for
   * managing the timers that handle the time-shift for each item.
   * @return {Observable} An Observable that delays the emissions of the source
   * Observable by the specified timeout or Date.
   * @method delay
   * @owner Observable
   */
  function delay(delay, scheduler) {
    if (scheduler === void 0) {
      scheduler = rxjs_1.asyncScheduler;
    }
    return operators_1.delay(delay, scheduler)(this);
  }
  exports.delay = delay;

});
System.registerDynamic("rxjs/add/operator/delay", ["rxjs", "rxjs-compat/operator/delay"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var delay_1 = $__require("rxjs-compat/operator/delay");
  rxjs_1.Observable.prototype.delay = delay_1.delay;

});
System.registerDynamic("rxjs-compat/operator/delayWhen", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Delays the emission of items from the source Observable by a given time span
   * determined by the emissions of another Observable.
   *
   * <span class="informal">It's like {@link delay}, but the time span of the
   * delay duration is determined by a second Observable.</span>
   *
   * <img src="./img/delayWhen.png" width="100%">
   *
   * `delayWhen` time shifts each emitted value from the source Observable by a
   * time span determined by another Observable. When the source emits a value,
   * the `delayDurationSelector` function is called with the source value as
   * argument, and should return an Observable, called the "duration" Observable.
   * The source value is emitted on the output Observable only when the duration
   * Observable emits a value or completes.
   *
   * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
   * is an Observable. When `subscriptionDelay` emits its first value or
   * completes, the source Observable is subscribed to and starts behaving like
   * described in the previous paragraph. If `subscriptionDelay` is not provided,
   * `delayWhen` will subscribe to the source Observable as soon as the output
   * Observable is subscribed.
   *
   * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var delayedClicks = clicks.delayWhen(event =>
   *   Rx.Observable.interval(Math.random() * 5000)
   * );
   * delayedClicks.subscribe(x => console.log(x));
   *
   * @see {@link debounce}
   * @see {@link delay}
   *
   * @param {function(value: T): Observable} delayDurationSelector A function that
   * returns an Observable for each value emitted by the source Observable, which
   * is then used to delay the emission of that item on the output Observable
   * until the Observable returned from this function emits a value.
   * @param {Observable} subscriptionDelay An Observable that triggers the
   * subscription to the source Observable once it emits any value.
   * @return {Observable} An Observable that delays the emissions of the source
   * Observable by an amount of time specified by the Observable returned by
   * `delayDurationSelector`.
   * @method delayWhen
   * @owner Observable
   */
  function delayWhen(delayDurationSelector, subscriptionDelay) {
    return operators_1.delayWhen(delayDurationSelector, subscriptionDelay)(this);
  }
  exports.delayWhen = delayWhen;

});
System.registerDynamic("rxjs/add/operator/delayWhen", ["rxjs", "rxjs-compat/operator/delayWhen"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var delayWhen_1 = $__require("rxjs-compat/operator/delayWhen");
  rxjs_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;

});
System.registerDynamic("rxjs-compat/operator/distinct", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
   *
   * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
   * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
   * source observable directly with an equality check against previous values.
   *
   * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
   *
   * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
   * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
   * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
   * that the internal `Set` can be "flushed", basically clearing it of values.
   *
   * @example <caption>A simple example with numbers</caption>
   * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
   *   .distinct()
   *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
   *
   * @example <caption>An example using a keySelector function</caption>
   * interface Person {
   *    age: number,
   *    name: string
   * }
   *
   * Observable.of<Person>(
   *     { age: 4, name: 'Foo'},
   *     { age: 7, name: 'Bar'},
   *     { age: 5, name: 'Foo'})
   *     .distinct((p: Person) => p.name)
   *     .subscribe(x => console.log(x));
   *
   * // displays:
   * // { age: 4, name: 'Foo' }
   * // { age: 7, name: 'Bar' }
   *
   * @see {@link distinctUntilChanged}
   * @see {@link distinctUntilKeyChanged}
   *
   * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
   * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
   * @return {Observable} An Observable that emits items from the source Observable with distinct values.
   * @method distinct
   * @owner Observable
   */
  function distinct(keySelector, flushes) {
    return operators_1.distinct(keySelector, flushes)(this);
  }
  exports.distinct = distinct;

});
System.registerDynamic("rxjs/add/operator/distinct", ["rxjs", "rxjs-compat/operator/distinct"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var distinct_1 = $__require("rxjs-compat/operator/distinct");
  rxjs_1.Observable.prototype.distinct = distinct_1.distinct;

});
System.registerDynamic("rxjs-compat/operator/distinctUntilChanged", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
   *
   * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
   *
   * If a comparator function is not provided, an equality check is used by default.
   *
   * @example <caption>A simple example with numbers</caption>
   * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
   *   .distinctUntilChanged()
   *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
   *
   * @example <caption>An example using a compare function</caption>
   * interface Person {
   *    age: number,
   *    name: string
   * }
   *
   * Observable.of<Person>(
   *     { age: 4, name: 'Foo'},
   *     { age: 7, name: 'Bar'},
   *     { age: 5, name: 'Foo'})
   *     { age: 6, name: 'Foo'})
   *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
   *     .subscribe(x => console.log(x));
   *
   * // displays:
   * // { age: 4, name: 'Foo' }
   * // { age: 7, name: 'Bar' }
   * // { age: 5, name: 'Foo' }
   *
   * @see {@link distinct}
   * @see {@link distinctUntilKeyChanged}
   *
   * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
   * @return {Observable} An Observable that emits items from the source Observable with distinct values.
   * @method distinctUntilChanged
   * @owner Observable
   */
  function distinctUntilChanged(compare, keySelector) {
    return operators_1.distinctUntilChanged(compare, keySelector)(this);
  }
  exports.distinctUntilChanged = distinctUntilChanged;

});
System.registerDynamic("rxjs/add/operator/distinctUntilChanged", ["rxjs", "rxjs-compat/operator/distinctUntilChanged"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var distinctUntilChanged_1 = $__require("rxjs-compat/operator/distinctUntilChanged");
  rxjs_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;

});
System.registerDynamic("rxjs-compat/operator/distinctUntilKeyChanged", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
   * using a property accessed by using the key provided to check if the two items are distinct.
   *
   * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
   *
   * If a comparator function is not provided, an equality check is used by default.
   *
   * @example <caption>An example comparing the name of persons</caption>
   *
   *  interface Person {
   *     age: number,
   *     name: string
   *  }
   *
   * Observable.of<Person>(
   *     { age: 4, name: 'Foo'},
   *     { age: 7, name: 'Bar'},
   *     { age: 5, name: 'Foo'},
   *     { age: 6, name: 'Foo'})
   *     .distinctUntilKeyChanged('name')
   *     .subscribe(x => console.log(x));
   *
   * // displays:
   * // { age: 4, name: 'Foo' }
   * // { age: 7, name: 'Bar' }
   * // { age: 5, name: 'Foo' }
   *
   * @example <caption>An example comparing the first letters of the name</caption>
   *
   * interface Person {
   *     age: number,
   *     name: string
   *  }
   *
   * Observable.of<Person>(
   *     { age: 4, name: 'Foo1'},
   *     { age: 7, name: 'Bar'},
   *     { age: 5, name: 'Foo2'},
   *     { age: 6, name: 'Foo3'})
   *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
   *     .subscribe(x => console.log(x));
   *
   * // displays:
   * // { age: 4, name: 'Foo1' }
   * // { age: 7, name: 'Bar' }
   * // { age: 5, name: 'Foo2' }
   *
   * @see {@link distinct}
   * @see {@link distinctUntilChanged}
   *
   * @param {string} key String key for object property lookup on each item.
   * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
   * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
   * @method distinctUntilKeyChanged
   * @owner Observable
   */
  function distinctUntilKeyChanged(key, compare) {
    return operators_1.distinctUntilKeyChanged(key, compare)(this);
  }
  exports.distinctUntilKeyChanged = distinctUntilKeyChanged;

});
System.registerDynamic("rxjs/add/operator/distinctUntilKeyChanged", ["rxjs", "rxjs-compat/operator/distinctUntilKeyChanged"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var distinctUntilKeyChanged_1 = $__require("rxjs-compat/operator/distinctUntilKeyChanged");
  rxjs_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;

});
System.registerDynamic("rxjs-compat/operator/do", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   * Perform a side effect for every emission on the source Observable, but return
   * an Observable that is identical to the source.
   *
   * <span class="informal">Intercepts each emission on the source and runs a
   * function, but returns an output which is identical to the source as long as errors don't occur.</span>
   *
   * <img src="./img/do.png" width="100%">
   *
   * Returns a mirrored Observable of the source Observable, but modified so that
   * the provided Observer is called to perform a side effect for every value,
   * error, and completion emitted by the source. Any errors that are thrown in
   * the aforementioned Observer or handlers are safely sent down the error path
   * of the output Observable.
   *
   * This operator is useful for debugging your Observables for the correct values
   * or performing other side effects.
   *
   * Note: this is different to a `subscribe` on the Observable. If the Observable
   * returned by `do` is not subscribed, the side effects specified by the
   * Observer will never happen. `do` therefore simply spies on existing
   * execution, it does not trigger an execution to happen like `subscribe` does.
   *
   * @example <caption>Map every click to the clientX position of that click, while also logging the click event</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var positions = clicks
   *   .do(ev => console.log(ev))
   *   .map(ev => ev.clientX);
   * positions.subscribe(x => console.log(x));
   *
   * @see {@link map}
   * @see {@link subscribe}
   *
   * @param {Observer|function} [nextOrObserver] A normal Observer object or a
   * callback for `next`.
   * @param {function} [error] Callback for errors in the source.
   * @param {function} [complete] Callback for the completion of the source.
   * @return {Observable} An Observable identical to the source, but runs the
   * specified Observer or callback(s) for each item.
   * @method do
   * @name do
   * @owner Observable
   */
  function _do(nextOrObserver, error, complete) {
    return operators_1.tap(nextOrObserver, error, complete)(this);
  }
  exports._do = _do;

});
System.registerDynamic("rxjs/add/operator/do", ["rxjs", "rxjs-compat/operator/do"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var do_1 = $__require("rxjs-compat/operator/do");
  rxjs_1.Observable.prototype.do = do_1._do;
  rxjs_1.Observable.prototype._do = do_1._do;

});
System.registerDynamic("rxjs-compat/operator/exhaust", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Converts a higher-order Observable into a first-order Observable by dropping
   * inner Observables while the previous inner Observable has not yet completed.
   *
   * <span class="informal">Flattens an Observable-of-Observables by dropping the
   * next inner Observables while the current inner is still executing.</span>
   *
   * <img src="./img/exhaust.png" width="100%">
   *
   * `exhaust` subscribes to an Observable that emits Observables, also known as a
   * higher-order Observable. Each time it observes one of these emitted inner
   * Observables, the output Observable begins emitting the items emitted by that
   * inner Observable. So far, it behaves like {@link mergeAll}. However,
   * `exhaust` ignores every new inner Observable if the previous Observable has
   * not yet completed. Once that one completes, it will accept and flatten the
   * next inner Observable and repeat this process.
   *
   * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
   * var result = higherOrder.exhaust();
   * result.subscribe(x => console.log(x));
   *
   * @see {@link combineAll}
   * @see {@link concatAll}
   * @see {@link switch}
   * @see {@link mergeAll}
   * @see {@link exhaustMap}
   * @see {@link zipAll}
   *
   * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
   * exclusively until it completes before subscribing to the next.
   */
  function exhaust() {
    return operators_1.exhaust()(this);
  }
  exports.exhaust = exhaust;

});
System.registerDynamic("rxjs/add/operator/exhaust", ["rxjs", "rxjs-compat/operator/exhaust"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var exhaust_1 = $__require("rxjs-compat/operator/exhaust");
  rxjs_1.Observable.prototype.exhaust = exhaust_1.exhaust;

});
System.registerDynamic("rxjs-compat/operator/exhaustMap", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Projects each source value to an Observable which is merged in the output
   * Observable only if the previous projected Observable has completed.
   *
   * <span class="informal">Maps each value to an Observable, then flattens all of
   * these inner Observables using {@link exhaust}.</span>
   *
   * <img src="./img/exhaustMap.png" width="100%">
   *
   * Returns an Observable that emits items based on applying a function that you
   * supply to each item emitted by the source Observable, where that function
   * returns an (so-called "inner") Observable. When it projects a source value to
   * an Observable, the output Observable begins emitting the items emitted by
   * that projected Observable. However, `exhaustMap` ignores every new projected
   * Observable if the previous projected Observable has not yet completed. Once
   * that one completes, it will accept and flatten the next projected Observable
   * and repeat this process.
   *
   * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
   * var clicks = fromEvent(document, 'click');
   * var result = clicks.pipe(exhaustMap((ev) => Rx.Observable.interval(1000).take(5)));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concatMap}
   * @see {@link exhaust}
   * @see {@link mergeMap}
   * @see {@link switchMap}
   *
   * @param {function(value: T, ?index: number): ObservableInput} project A function
   * that, when applied to an item emitted by the source Observable, returns an
   * Observable.
   * @return {Observable} An Observable containing projected Observables
   * of each item of the source, ignoring projected Observables that start before
   * their preceding Observable has completed.
   */
  function exhaustMap(project) {
    return operators_1.exhaustMap(project)(this);
  }
  exports.exhaustMap = exhaustMap;

});
System.registerDynamic("rxjs/add/operator/exhaustMap", ["rxjs", "rxjs-compat/operator/exhaustMap"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var exhaustMap_1 = $__require("rxjs-compat/operator/exhaustMap");
  rxjs_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap;

});
System.registerDynamic("rxjs-compat/operator/expand", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   * Recursively projects each source value to an Observable which is merged in
   * the output Observable.
   *
   * <span class="informal">It's similar to {@link mergeMap}, but applies the
   * projection function to every source value as well as every output value.
   * It's recursive.</span>
   *
   * <img src="./img/expand.png" width="100%">
   *
   * Returns an Observable that emits items based on applying a function that you
   * supply to each item emitted by the source Observable, where that function
   * returns an Observable, and then merging those resulting Observables and
   * emitting the results of this merger. *Expand* will re-emit on the output
   * Observable every source value. Then, each output value is given to the
   * `project` function which returns an inner Observable to be merged on the
   * output Observable. Those output values resulting from the projection are also
   * given to the `project` function to produce new output values. This is how
   * *expand* behaves recursively.
   *
   * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var powersOfTwo = clicks
   *   .mapTo(1)
   *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
   *   .take(10);
   * powersOfTwo.subscribe(x => console.log(x));
   *
   * @see {@link mergeMap}
   * @see {@link mergeScan}
   *
   * @param {function(value: T, index: number) => Observable} project A function
   * that, when applied to an item emitted by the source or the output Observable,
   * returns an Observable.
   * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
   * Observables being subscribed to concurrently.
   * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
   * each projected inner Observable.
   * @return {Observable} An Observable that emits the source values and also
   * result of applying the projection function to each value emitted on the
   * output Observable and and merging the results of the Observables obtained
   * from this transformation.
   * @method expand
   * @owner Observable
   */
  function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    if (scheduler === void 0) {
      scheduler = undefined;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return operators_1.expand(project, concurrent, scheduler)(this);
  }
  exports.expand = expand;

});
System.registerDynamic("rxjs/add/operator/expand", ["rxjs", "rxjs-compat/operator/expand"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var expand_1 = $__require("rxjs-compat/operator/expand");
  rxjs_1.Observable.prototype.expand = expand_1.expand;

});
System.registerDynamic("rxjs-compat/operator/elementAt", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Emits the single value at the specified `index` in a sequence of emissions
   * from the source Observable.
   *
   * <span class="informal">Emits only the i-th value, then completes.</span>
   *
   * <img src="./img/elementAt.png" width="100%">
   *
   * `elementAt` returns an Observable that emits the item at the specified
   * `index` in the source Observable, or a default value if that `index` is out
   * of range and the `default` argument is provided. If the `default` argument is
   * not given and the `index` is out of range, the output Observable will emit an
   * `ArgumentOutOfRangeError` error.
   *
   * @example <caption>Emit only the third click event</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.elementAt(2);
   * result.subscribe(x => console.log(x));
   *
   * // Results in:
   * // click 1 = nothing
   * // click 2 = nothing
   * // click 3 = MouseEvent object logged to console
   *
   * @see {@link first}
   * @see {@link last}
   * @see {@link skip}
   * @see {@link single}
   * @see {@link take}
   *
   * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
   * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
   * Observable has completed before emitting the i-th `next` notification.
   *
   * @param {number} index Is the number `i` for the i-th source emission that has
   * happened since the subscription, starting from the number `0`.
   * @param {T} [defaultValue] The default value returned for missing indices.
   * @return {Observable} An Observable that emits a single item, if it is found.
   * Otherwise, will emit the default value if given. If not, then emits an error.
   * @method elementAt
   * @owner Observable
   */
  function elementAt(index, defaultValue) {
    return operators_1.elementAt.apply(undefined, arguments)(this);
  }
  exports.elementAt = elementAt;

});
System.registerDynamic("rxjs/add/operator/elementAt", ["rxjs", "rxjs-compat/operator/elementAt"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var elementAt_1 = $__require("rxjs-compat/operator/elementAt");
  rxjs_1.Observable.prototype.elementAt = elementAt_1.elementAt;

});
System.registerDynamic("rxjs-compat/operator/filter", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   * Filter items emitted by the source Observable by only emitting those that
   * satisfy a specified predicate.
   *
   * <span class="informal">Like
   * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
   * it only emits a value from the source if it passes a criterion function.</span>
   *
   * <img src="./img/filter.png" width="100%">
   *
   * Similar to the well-known `Array.prototype.filter` method, this operator
   * takes values from the source Observable, passes them through a `predicate`
   * function and only emits those values that yielded `true`.
   *
   * @example <caption>Emit only click events whose target was a DIV element</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
   * clicksOnDivs.subscribe(x => console.log(x));
   *
   * @see {@link distinct}
   * @see {@link distinctUntilChanged}
   * @see {@link distinctUntilKeyChanged}
   * @see {@link ignoreElements}
   * @see {@link partition}
   * @see {@link skip}
   *
   * @param {function(value: T, index: number): boolean} predicate A function that
   * evaluates each value emitted by the source Observable. If it returns `true`,
   * the value is emitted, if `false` the value is not passed to the output
   * Observable. The `index` parameter is the number `i` for the i-th source
   * emission that has happened since the subscription, starting from the number
   * `0`.
   * @param {any} [thisArg] An optional argument to determine the value of `this`
   * in the `predicate` function.
   * @return {Observable} An Observable of values from the source that were
   * allowed by the `predicate` function.
   * @method filter
   * @owner Observable
   */
  function filter(predicate, thisArg) {
    return operators_1.filter(predicate, thisArg)(this);
  }
  exports.filter = filter;

});
System.registerDynamic("rxjs/add/operator/filter", ["rxjs", "rxjs-compat/operator/filter"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var filter_1 = $__require("rxjs-compat/operator/filter");
  rxjs_1.Observable.prototype.filter = filter_1.filter;

});
System.registerDynamic("rxjs-compat/operator/finally", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Returns an Observable that mirrors the source Observable, but will call a specified function when
   * the source terminates on complete, error or unsubscribe.
   *
   * <span class="informal">Ensure a given function will be called when a stream ends, no matter why it ended.</span>
   *
   * `finally` method accepts as a single parameter a function. This function does not accept any parameters and
   * should not return anything. It will be called whenever source Observable completes, errors or is unsubscribed,
   * which makes it good candidate to perform any necessary clean up or side effects when Observable terminates,
   * no matter how or why it terminated.
   *
   * Observable returned by `finally` will simply mirror source Observable - each time it is subscribed, source
   * Observable will be subscribed underneath.
   *
   * Note that behavior of `finally` will be repeated per every subscription, so if resulting Observable has
   * many subscribers, function passed to `finally` might be potentially called multiple times.
   *
   * Remember also that `finally` differs quite a lot from passing complete or error handler to {@link subscribe}. It will
   * return an Observable which can be further chained, while `subscribe` returns Subscription, basically ending Observable
   * chain. Function passed to `finally` will be called also when consumer of resulting Observable unsubscribes from it,
   * while handlers passed to `subscribe` will not (even complete handler). But most importantly, `finally` does not start
   * an execution of source Observable, like `subscribe` does, allowing you to set up all necessary hooks before
   * passing Observable further, even without specific knowledge how or when it will be used.
   *
   *
   * @example <caption>Call finally after complete notification</caption>
   * Rx.Observable.of(1, 2, 3)
   * .finally(() => console.log('I was finalized!'))
   * .map(x => x * 2) // `finally` returns an Observable, so we still can chain operators.
   * .subscribe(
   *   val => console.log(val),
   *   err => {},
   *   () => console.log('I completed!')
   * );
   *
   * // Logs:
   * // 1
   * // 2
   * // 3
   * // "I completed!"
   * // "I was finalized!"
   *
   *
   *
   * @example <caption>Call finally after consumer unsubscribes</caption>
   * const o = Rx.Observable.interval(1000)
   * .finally(() => console.log('Timer stopped'));
   *
   * const subscription = o.subscribe(
   *   val => console.log(val),
   *   err => {},
   *   () => console.log('Complete!') // Will not be called, since complete handler
   * );                               // does not react to unsubscription, just to
   *                                  // complete notification sent by the Observable itself.
   *
   * setTimeout(() => subscription.unsubscribe(), 2500);
   *
   * // Logs:
   * // 0 after 1s
   * // 1 after 2s
   * // "Timer stopped" after 2.5s
   *
   * @see {@link using}
   *
   * @param {function} callback Function to be called when source terminates (completes, errors or is unsubscribed).
   * @return {Observable} An Observable that mirrors the source, but will call the specified function on termination.
   * @method finally
   * @name finally
   * @owner Observable
   */
  function _finally(callback) {
    return operators_1.finalize(callback)(this);
  }
  exports._finally = _finally;

});
System.registerDynamic("rxjs/add/operator/finally", ["rxjs", "rxjs-compat/operator/finally"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var finally_1 = $__require("rxjs-compat/operator/finally");
  rxjs_1.Observable.prototype.finally = finally_1._finally;
  rxjs_1.Observable.prototype._finally = finally_1._finally;

});
System.registerDynamic("rxjs-compat/operator/find", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   * Emits only the first value emitted by the source Observable that meets some
   * condition.
   *
   * <span class="informal">Finds the first value that passes some test and emits
   * that.</span>
   *
   * <img src="./img/find.png" width="100%">
   *
   * `find` searches for the first item in the source Observable that matches the
   * specified condition embodied by the `predicate`, and returns the first
   * occurrence in the source. Unlike {@link first}, the `predicate` is required
   * in `find`, and does not emit an error if a valid value is not found.
   *
   * @example <caption>Find and emit the first click that happens on a DIV element</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.find(ev => ev.target.tagName === 'DIV');
   * result.subscribe(x => console.log(x));
   *
   * @see {@link filter}
   * @see {@link first}
   * @see {@link findIndex}
   * @see {@link take}
   *
   * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
   * A function called with each item to test for condition matching.
   * @param {any} [thisArg] An optional argument to determine the value of `this`
   * in the `predicate` function.
   * @return {Observable<T>} An Observable of the first item that matches the
   * condition.
   * @method find
   * @owner Observable
   */
  function find(predicate, thisArg) {
    return operators_1.find(predicate, thisArg)(this);
  }
  exports.find = find;

});
System.registerDynamic("rxjs/add/operator/find", ["rxjs", "rxjs-compat/operator/find"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var find_1 = $__require("rxjs-compat/operator/find");
  rxjs_1.Observable.prototype.find = find_1.find;

});
System.registerDynamic("rxjs-compat/operator/findIndex", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Emits only the index of the first value emitted by the source Observable that
   * meets some condition.
   *
   * <span class="informal">It's like {@link find}, but emits the index of the
   * found value, not the value itself.</span>
   *
   * <img src="./img/findIndex.png" width="100%">
   *
   * `findIndex` searches for the first item in the source Observable that matches
   * the specified condition embodied by the `predicate`, and returns the
   * (zero-based) index of the first occurrence in the source. Unlike
   * {@link first}, the `predicate` is required in `findIndex`, and does not emit
   * an error if a valid value is not found.
   *
   * @example <caption>Emit the index of first click that happens on a DIV element</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
   * result.subscribe(x => console.log(x));
   *
   * @see {@link filter}
   * @see {@link find}
   * @see {@link first}
   * @see {@link take}
   *
   * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
   * A function called with each item to test for condition matching.
   * @param {any} [thisArg] An optional argument to determine the value of `this`
   * in the `predicate` function.
   * @return {Observable} An Observable of the index of the first item that
   * matches the condition.
   * @method find
   * @owner Observable
   */
  function findIndex(predicate, thisArg) {
    return operators_1.findIndex(predicate, thisArg)(this);
  }
  exports.findIndex = findIndex;

});
System.registerDynamic("rxjs/add/operator/findIndex", ["rxjs", "rxjs-compat/operator/findIndex"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var findIndex_1 = $__require("rxjs-compat/operator/findIndex");
  rxjs_1.Observable.prototype.findIndex = findIndex_1.findIndex;

});
System.registerDynamic("rxjs-compat/operator/first", ["rxjs/operators"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var operators_1 = $__require("rxjs/operators");
    /* tslint:enable:max-line-length */
    /**
     * Emits only the first value (or the first value that meets some condition)
     * emitted by the source Observable.
     *
     * <span class="informal">Emits only the first value. Or emits only the first
     * value that passes some test.</span>
     *
     * <img src="./img/first.png" width="100%">
     *
     * If called with no arguments, `first` emits the first value of the source
     * Observable, then completes. If called with a `predicate` function, `first`
     * emits the first value of the source that matches the specified condition. It
     * may also take a `resultSelector` function to produce the output value from
     * the input value, and a `defaultValue` to emit in case the source completes
     * before it is able to emit a valid value. Throws an error if `defaultValue`
     * was not provided and a matching element is not found.
     *
     * @example <caption>Emit only the first click that happens on the DOM</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.first();
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Emits the first click that happens on a DIV</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.first(ev => ev.target.tagName === 'DIV');
     * result.subscribe(x => console.log(x));
     *
     * @see {@link filter}
     * @see {@link find}
     * @see {@link take}
     *
     * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
     * callback if the Observable completes before any `next` notification was sent.
     *
     * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
     * An optional function called with each item to test for condition matching.
     * @param {T} [defaultValue] The default value emitted in case no valid value
     * was found on the source.
     * @return {Observable<T>} An Observable of the first item that matches the
     * condition.
     * @method first
     * @owner Observable
     */
    function first() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return operators_1.first.apply(void 0, args)(this);
    }
    exports.first = first;

});
System.registerDynamic("rxjs/add/operator/first", ["rxjs", "rxjs-compat/operator/first"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var first_1 = $__require("rxjs-compat/operator/first");
  rxjs_1.Observable.prototype.first = first_1.first;

});
System.registerDynamic("rxjs-compat/operator/groupBy", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   * Groups the items emitted by an Observable according to a specified criterion,
   * and emits these grouped items as `GroupedObservables`, one
   * {@link GroupedObservable} per group.
   *
   * <img src="./img/groupBy.png" width="100%">
   *
   * @example <caption>Group objects by id and return as array</caption>
   * Observable.of<Obj>({id: 1, name: 'aze1'},
   *                    {id: 2, name: 'sf2'},
   *                    {id: 2, name: 'dg2'},
   *                    {id: 1, name: 'erg1'},
   *                    {id: 1, name: 'df1'},
   *                    {id: 2, name: 'sfqfb2'},
   *                    {id: 3, name: 'qfs3'},
   *                    {id: 2, name: 'qsgqsfg2'}
   *     )
   *     .groupBy(p => p.id)
   *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
   *     .subscribe(p => console.log(p));
   *
   * // displays:
   * // [ { id: 1, name: 'aze1' },
   * //   { id: 1, name: 'erg1' },
   * //   { id: 1, name: 'df1' } ]
   * //
   * // [ { id: 2, name: 'sf2' },
   * //   { id: 2, name: 'dg2' },
   * //   { id: 2, name: 'sfqfb2' },
   * //   { id: 2, name: 'qsgqsfg2' } ]
   * //
   * // [ { id: 3, name: 'qfs3' } ]
   *
   * @example <caption>Pivot data on the id field</caption>
   * Observable.of<Obj>({id: 1, name: 'aze1'},
   *                    {id: 2, name: 'sf2'},
   *                    {id: 2, name: 'dg2'},
   *                    {id: 1, name: 'erg1'},
   *                    {id: 1, name: 'df1'},
   *                    {id: 2, name: 'sfqfb2'},
   *                    {id: 3, name: 'qfs1'},
   *                    {id: 2, name: 'qsgqsfg2'}
   *                   )
   *     .groupBy(p => p.id, p => p.name)
   *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
   *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
   *     .subscribe(p => console.log(p));
   *
   * // displays:
   * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
   * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
   * // { id: 3, values: [ 'qfs1' ] }
   *
   * @param {function(value: T): K} keySelector A function that extracts the key
   * for each item.
   * @param {function(value: T): R} [elementSelector] A function that extracts the
   * return element for each item.
   * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
   * A function that returns an Observable to determine how long each group should
   * exist.
   * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
   * GroupedObservables, each of which corresponds to a unique key value and each
   * of which emits those items from the source Observable that share that key
   * value.
   * @method groupBy
   * @owner Observable
   */
  function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return operators_1.groupBy(keySelector, elementSelector, durationSelector, subjectSelector)(this);
  }
  exports.groupBy = groupBy;

});
System.registerDynamic("rxjs/add/operator/groupBy", ["rxjs", "rxjs-compat/operator/groupBy"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var groupBy_1 = $__require("rxjs-compat/operator/groupBy");
  rxjs_1.Observable.prototype.groupBy = groupBy_1.groupBy;

});
System.registerDynamic("rxjs-compat/operator/ignoreElements", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
   *
   * <img src="./img/ignoreElements.png" width="100%">
   *
   * @return {Observable} An empty Observable that only calls `complete`
   * or `error`, based on which one is called by the source Observable.
   * @method ignoreElements
   * @owner Observable
   */
  function ignoreElements() {
    return operators_1.ignoreElements()(this);
  }
  exports.ignoreElements = ignoreElements;

});
System.registerDynamic("rxjs/add/operator/ignoreElements", ["rxjs", "rxjs-compat/operator/ignoreElements"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var ignoreElements_1 = $__require("rxjs-compat/operator/ignoreElements");
  rxjs_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;

});
System.registerDynamic("rxjs-compat/operator/isEmpty", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
   *
   * <img src="./img/isEmpty.png" width="100%">
   *
   * @return {Observable} An Observable that emits a Boolean.
   * @method isEmpty
   * @owner Observable
   */
  function isEmpty() {
    return operators_1.isEmpty()(this);
  }
  exports.isEmpty = isEmpty;

});
System.registerDynamic("rxjs/add/operator/isEmpty", ["rxjs", "rxjs-compat/operator/isEmpty"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var isEmpty_1 = $__require("rxjs-compat/operator/isEmpty");
  rxjs_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty;

});
System.registerDynamic("rxjs-compat/operator/audit", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Ignores source values for a duration determined by another Observable, then
   * emits the most recent value from the source Observable, then repeats this
   * process.
   *
   * <span class="informal">It's like {@link auditTime}, but the silencing
   * duration is determined by a second Observable.</span>
   *
   * <img src="./img/audit.png" width="100%">
   *
   * `audit` is similar to `throttle`, but emits the last value from the silenced
   * time window, instead of the first value. `audit` emits the most recent value
   * from the source Observable on the output Observable as soon as its internal
   * timer becomes disabled, and ignores source values while the timer is enabled.
   * Initially, the timer is disabled. As soon as the first source value arrives,
   * the timer is enabled by calling the `durationSelector` function with the
   * source value, which returns the "duration" Observable. When the duration
   * Observable emits a value or completes, the timer is disabled, then the most
   * recent source value is emitted on the output Observable, and this process
   * repeats for the next source value.
   *
   * @example <caption>Emit clicks at a rate of at most one click per second</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.audit(ev => Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link auditTime}
   * @see {@link debounce}
   * @see {@link delayWhen}
   * @see {@link sample}
   * @see {@link throttle}
   *
   * @param {function(value: T): SubscribableOrPromise} durationSelector A function
   * that receives a value from the source Observable, for computing the silencing
   * duration, returned as an Observable or a Promise.
   * @return {Observable<T>} An Observable that performs rate-limiting of
   * emissions from the source Observable.
   * @method audit
   * @owner Observable
   */
  function audit(durationSelector) {
    return operators_1.audit(durationSelector)(this);
  }
  exports.audit = audit;

});
System.registerDynamic("rxjs/add/operator/audit", ["rxjs", "rxjs-compat/operator/audit"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var audit_1 = $__require("rxjs-compat/operator/audit");
  rxjs_1.Observable.prototype.audit = audit_1.audit;

});
System.registerDynamic("rxjs-compat/operator/auditTime", ["rxjs", "rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var operators_1 = $__require("rxjs/operators");
  /**
   * Ignores source values for `duration` milliseconds, then emits the most recent
   * value from the source Observable, then repeats this process.
   *
   * <span class="informal">When it sees a source values, it ignores that plus
   * the next ones for `duration` milliseconds, and then it emits the most recent
   * value from the source.</span>
   *
   * <img src="./img/auditTime.png" width="100%">
   *
   * `auditTime` is similar to `throttleTime`, but emits the last value from the
   * silenced time window, instead of the first value. `auditTime` emits the most
   * recent value from the source Observable on the output Observable as soon as
   * its internal timer becomes disabled, and ignores source values while the
   * timer is enabled. Initially, the timer is disabled. As soon as the first
   * source value arrives, the timer is enabled. After `duration` milliseconds (or
   * the time unit determined internally by the optional `scheduler`) has passed,
   * the timer is disabled, then the most recent source value is emitted on the
   * output Observable, and this process repeats for the next source value.
   * Optionally takes a {@link IScheduler} for managing timers.
   *
   * @example <caption>Emit clicks at a rate of at most one click per second</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.auditTime(1000);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link audit}
   * @see {@link debounceTime}
   * @see {@link delay}
   * @see {@link sampleTime}
   * @see {@link throttleTime}
   *
   * @param {number} duration Time to wait before emitting the most recent source
   * value, measured in milliseconds or the time unit determined internally
   * by the optional `scheduler`.
   * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
   * managing the timers that handle the rate-limiting behavior.
   * @return {Observable<T>} An Observable that performs rate-limiting of
   * emissions from the source Observable.
   * @method auditTime
   * @owner Observable
   */
  function auditTime(duration, scheduler) {
    if (scheduler === void 0) {
      scheduler = rxjs_1.asyncScheduler;
    }
    return operators_1.auditTime(duration, scheduler)(this);
  }
  exports.auditTime = auditTime;

});
System.registerDynamic("rxjs/add/operator/auditTime", ["rxjs", "rxjs-compat/operator/auditTime"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var auditTime_1 = $__require("rxjs-compat/operator/auditTime");
  rxjs_1.Observable.prototype.auditTime = auditTime_1.auditTime;

});
System.registerDynamic("rxjs-compat/operator/last", ["rxjs/operators"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var operators_1 = $__require("rxjs/operators");
    /* tslint:enable:max-line-length */
    /**
     * Returns an Observable that emits only the last item emitted by the source Observable.
     * It optionally takes a predicate function as a parameter, in which case, rather than emitting
     * the last item from the source Observable, the resulting Observable will emit the last item
     * from the source Observable that satisfies the predicate.
     *
     * <img src="./img/last.png" width="100%">
     *
     * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
     * callback if the Observable completes before any `next` notification was sent.
     * @param {function} [predicate] - The condition any source emitted item has to satisfy.
     * @param {any} [defaultValue] - The default value to use if the predicate isn't
     * satisfied, or no values were emitted (if no predicate).
     * @return {Observable} An Observable that emits only the last item satisfying the given condition
     * from the source, or an NoSuchElementException if no such items are emitted.
     * @throws - Throws if no items that match the predicate are emitted by the source Observable.
     * @method last
     * @owner Observable
     */
    function last() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return operators_1.last.apply(void 0, args)(this);
    }
    exports.last = last;

});
System.registerDynamic("rxjs/add/operator/last", ["rxjs", "rxjs-compat/operator/last"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var last_1 = $__require("rxjs-compat/operator/last");
  rxjs_1.Observable.prototype.last = last_1.last;

});
System.registerDynamic("rxjs-compat/operator/let", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  /**
   * @param func
   * @return {Observable<R>}
   * @method let
   * @owner Observable
   */
  function letProto(func) {
    return func(this);
  }
  exports.letProto = letProto;

});
System.registerDynamic("rxjs/add/operator/let", ["rxjs", "rxjs-compat/operator/let"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var let_1 = $__require("rxjs-compat/operator/let");
  rxjs_1.Observable.prototype.let = let_1.letProto;
  rxjs_1.Observable.prototype.letBind = let_1.letProto;

});
System.registerDynamic("rxjs-compat/operator/every", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
   *
   * @example <caption>A simple example emitting true if all elements are less than 5, false otherwise</caption>
   *  Observable.of(1, 2, 3, 4, 5, 6)
   *     .every(x => x < 5)
   *     .subscribe(x => console.log(x)); // -> false
   *
   * @param {function} predicate A function for determining if an item meets a specified condition.
   * @param {any} [thisArg] Optional object to use for `this` in the callback.
   * @return {Observable} An Observable of booleans that determines if all items of the source Observable meet the condition specified.
   * @method every
   * @owner Observable
   */
  function every(predicate, thisArg) {
    return operators_1.every(predicate, thisArg)(this);
  }
  exports.every = every;

});
System.registerDynamic("rxjs/add/operator/every", ["rxjs", "rxjs-compat/operator/every"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var every_1 = $__require("rxjs-compat/operator/every");
  rxjs_1.Observable.prototype.every = every_1.every;

});
System.registerDynamic("rxjs-compat/operator/map", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Applies a given `project` function to each value emitted by the source
   * Observable, and emits the resulting values as an Observable.
   *
   * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
   * it passes each source value through a transformation function to get
   * corresponding output values.</span>
   *
   * <img src="./img/map.png" width="100%">
   *
   * Similar to the well known `Array.prototype.map` function, this operator
   * applies a projection to each value and emits that projection in the output
   * Observable.
   *
   * @example <caption>Map every click to the clientX position of that click</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var positions = clicks.map(ev => ev.clientX);
   * positions.subscribe(x => console.log(x));
   *
   * @see {@link mapTo}
   * @see {@link pluck}
   *
   * @param {function(value: T, index: number): R} project The function to apply
   * to each `value` emitted by the source Observable. The `index` parameter is
   * the number `i` for the i-th emission that has happened since the
   * subscription, starting from the number `0`.
   * @param {any} [thisArg] An optional argument to define what `this` is in the
   * `project` function.
   * @return {Observable<R>} An Observable that emits the values from the source
   * Observable transformed by the given `project` function.
   * @method map
   * @owner Observable
   */
  function map(project, thisArg) {
    return operators_1.map(project, thisArg)(this);
  }
  exports.map = map;

});
System.registerDynamic("rxjs/add/operator/map", ["rxjs", "rxjs-compat/operator/map"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var map_1 = $__require("rxjs-compat/operator/map");
  rxjs_1.Observable.prototype.map = map_1.map;

});
System.registerDynamic("rxjs-compat/operator/mapTo", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Emits the given constant value on the output Observable every time the source
   * Observable emits a value.
   *
   * <span class="informal">Like {@link map}, but it maps every source value to
   * the same output value every time.</span>
   *
   * <img src="./img/mapTo.png" width="100%">
   *
   * Takes a constant `value` as argument, and emits that whenever the source
   * Observable emits a value. In other words, ignores the actual source value,
   * and simply uses the emission moment to know when to emit the given `value`.
   *
   * @example <caption>Map every click to the string 'Hi'</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var greetings = clicks.mapTo('Hi');
   * greetings.subscribe(x => console.log(x));
   *
   * @see {@link map}
   *
   * @param {any} value The value to map each source value to.
   * @return {Observable} An Observable that emits the given `value` every time
   * the source Observable emits something.
   * @method mapTo
   * @owner Observable
   */
  function mapTo(value) {
    return operators_1.mapTo(value)(this);
  }
  exports.mapTo = mapTo;

});
System.registerDynamic("rxjs/add/operator/mapTo", ["rxjs", "rxjs-compat/operator/mapTo"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var mapTo_1 = $__require("rxjs-compat/operator/mapTo");
  rxjs_1.Observable.prototype.mapTo = mapTo_1.mapTo;

});
System.registerDynamic("rxjs-compat/operator/materialize", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Represents all of the notifications from the source Observable as `next`
   * emissions marked with their original types within {@link Notification}
   * objects.
   *
   * <span class="informal">Wraps `next`, `error` and `complete` emissions in
   * {@link Notification} objects, emitted as `next` on the output Observable.
   * </span>
   *
   * <img src="./img/materialize.png" width="100%">
   *
   * `materialize` returns an Observable that emits a `next` notification for each
   * `next`, `error`, or `complete` emission of the source Observable. When the
   * source Observable emits `complete`, the output Observable will emit `next` as
   * a Notification of type "complete", and then it will emit `complete` as well.
   * When the source Observable emits `error`, the output will emit `next` as a
   * Notification of type "error", and then `complete`.
   *
   * This operator is useful for producing metadata of the source Observable, to
   * be consumed as `next` emissions. Use it in conjunction with
   * {@link dematerialize}.
   *
   * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
   * var letters = Rx.Observable.of('a', 'b', 13, 'd');
   * var upperCase = letters.map(x => x.toUpperCase());
   * var materialized = upperCase.materialize();
   * materialized.subscribe(x => console.log(x));
   *
   * // Results in the following:
   * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
   * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
   * // - Notification {kind: "E", value: undefined, error: TypeError:
   * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
   * //   [as project] (http://1…, hasValue: false}
   *
   * @see {@link Notification}
   * @see {@link dematerialize}
   *
   * @return {Observable<Notification<T>>} An Observable that emits
   * {@link Notification} objects that wrap the original emissions from the source
   * Observable with metadata.
   * @method materialize
   * @owner Observable
   */
  function materialize() {
    return operators_1.materialize()(this);
  }
  exports.materialize = materialize;

});
System.registerDynamic("rxjs/add/operator/materialize", ["rxjs", "rxjs-compat/operator/materialize"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var materialize_1 = $__require("rxjs-compat/operator/materialize");
  rxjs_1.Observable.prototype.materialize = materialize_1.materialize;

});
System.registerDynamic("rxjs-compat/operator/max", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
   * and when source Observable completes it emits a single item: the item with the largest value.
   *
   * <img src="./img/max.png" width="100%">
   *
   * @example <caption>Get the maximal value of a series of numbers</caption>
   * Rx.Observable.of(5, 4, 7, 2, 8)
   *   .max()
   *   .subscribe(x => console.log(x)); // -> 8
   *
   * @example <caption>Use a comparer function to get the maximal item</caption>
   * interface Person {
   *   age: number,
   *   name: string
   * }
   * Observable.of<Person>({age: 7, name: 'Foo'},
   *                       {age: 5, name: 'Bar'},
   *                       {age: 9, name: 'Beer'})
   *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
   *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
   * }
   *
   * @see {@link min}
   *
   * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
   * value of two items.
   * @return {Observable} An Observable that emits item with the largest value.
   * @method max
   * @owner Observable
   */
  function max(comparer) {
    return operators_1.max(comparer)(this);
  }
  exports.max = max;

});
System.registerDynamic("rxjs/add/operator/max", ["rxjs", "rxjs-compat/operator/max"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var max_1 = $__require("rxjs-compat/operator/max");
  rxjs_1.Observable.prototype.max = max_1.max;

});
System.registerDynamic("rxjs-compat/operator/merge", ["rxjs"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var rxjs_1 = $__require("rxjs");
    /* tslint:enable:max-line-length */
    /**
     * Creates an output Observable which concurrently emits all values from every
     * given input Observable.
     *
     * <span class="informal">Flattens multiple Observables together by blending
     * their values into one Observable.</span>
     *
     * <img src="./img/merge.png" width="100%">
     *
     * `merge` subscribes to each given input Observable (either the source or an
     * Observable given as argument), and simply forwards (without doing any
     * transformation) all the values from all the input Observables to the output
     * Observable. The output Observable only completes once all input Observables
     * have completed. Any error delivered by an input Observable will be immediately
     * emitted on the output Observable.
     *
     * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var timer = Rx.Observable.interval(1000);
     * var clicksOrTimer = clicks.merge(timer);
     * clicksOrTimer.subscribe(x => console.log(x));
     *
     * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
     * var timer1 = Rx.Observable.interval(1000).take(10);
     * var timer2 = Rx.Observable.interval(2000).take(6);
     * var timer3 = Rx.Observable.interval(500).take(10);
     * var concurrent = 2; // the argument
     * var merged = timer1.merge(timer2, timer3, concurrent);
     * merged.subscribe(x => console.log(x));
     *
     * @see {@link mergeAll}
     * @see {@link mergeMap}
     * @see {@link mergeMapTo}
     * @see {@link mergeScan}
     *
     * @param {ObservableInput} other An input Observable to merge with the source
     * Observable. More than one input Observables may be given as argument.
     * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
     * Observables being subscribed to concurrently.
     * @param {Scheduler} [scheduler=null] The IScheduler to use for managing
     * concurrency of input Observables.
     * @return {Observable} An Observable that emits items that are the result of
     * every input Observable.
     * @method merge
     * @owner Observable
     */
    function merge() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return this.lift.call(rxjs_1.merge.apply(void 0, [this].concat(observables)));
    }
    exports.merge = merge;

});
System.registerDynamic("rxjs/add/operator/merge", ["rxjs", "rxjs-compat/operator/merge"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var merge_1 = $__require("rxjs-compat/operator/merge");
  rxjs_1.Observable.prototype.merge = merge_1.merge;

});
System.registerDynamic("rxjs-compat/operator/mergeAll", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Converts a higher-order Observable into a first-order Observable which
   * concurrently delivers all values that are emitted on the inner Observables.
   *
   * <span class="informal">Flattens an Observable-of-Observables.</span>
   *
   * <img src="./img/mergeAll.png" width="100%">
   *
   * `mergeAll` subscribes to an Observable that emits Observables, also known as
   * a higher-order Observable. Each time it observes one of these emitted inner
   * Observables, it subscribes to that and delivers all the values from the
   * inner Observable on the output Observable. The output Observable only
   * completes once all inner Observables have completed. Any error delivered by
   * a inner Observable will be immediately emitted on the output Observable.
   *
   * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
   * var firstOrder = higherOrder.mergeAll();
   * firstOrder.subscribe(x => console.log(x));
   *
   * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
   * var firstOrder = higherOrder.mergeAll(2);
   * firstOrder.subscribe(x => console.log(x));
   *
   * @see {@link combineAll}
   * @see {@link concatAll}
   * @see {@link exhaust}
   * @see {@link merge}
   * @see {@link mergeMap}
   * @see {@link mergeMapTo}
   * @see {@link mergeScan}
   * @see {@link switch}
   * @see {@link zipAll}
   *
   * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
   * Observables being subscribed to concurrently.
   * @return {Observable} An Observable that emits values coming from all the
   * inner Observables emitted by the source Observable.
   * @method mergeAll
   * @owner Observable
   */
  function mergeAll(concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    return operators_1.mergeAll(concurrent)(this);
  }
  exports.mergeAll = mergeAll;

});
System.registerDynamic("rxjs/add/operator/mergeAll", ["rxjs", "rxjs-compat/operator/mergeAll"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var mergeAll_1 = $__require("rxjs-compat/operator/mergeAll");
  rxjs_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;

});
System.registerDynamic("rxjs-compat/operator/mergeMap", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Projects each source value to an Observable which is merged in the output
   * Observable.
   *
   * <span class="informal">Maps each value to an Observable, then flattens all of
   * these inner Observables using {@link mergeAll}.</span>
   *
   * <img src="./img/mergeMap.png" width="100%">
   *
   * Returns an Observable that emits items based on applying a function that you
   * supply to each item emitted by the source Observable, where that function
   * returns an Observable, and then merging those resulting Observables and
   * emitting the results of this merger.
   *
   * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
   * var letters = Rx.Observable.of('a', 'b', 'c');
   * var result = letters.mergeMap(x =>
   *   Rx.Observable.interval(1000).map(i => x+i)
   * );
   * result.subscribe(x => console.log(x));
   *
   * // Results in the following:
   * // a0
   * // b0
   * // c0
   * // a1
   * // b1
   * // c1
   * // continues to list a,b,c with respective ascending integers
   *
   * @see {@link concatMap}
   * @see {@link exhaustMap}
   * @see {@link merge}
   * @see {@link mergeAll}
   * @see {@link mergeMapTo}
   * @see {@link mergeScan}
   * @see {@link switchMap}
   *
   * @param {function(value: T, ?index: number): ObservableInput} project A function
   * that, when applied to an item emitted by the source Observable, returns an
   * Observable.
   * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
   * Observables being subscribed to concurrently.
   * @return {Observable} An Observable that emits the result of applying the
   * projection function (and the optional `resultSelector`) to each item emitted
   * by the source Observable and merging the results of the Observables obtained
   * from this transformation.
   * @method mergeMap
   * @owner Observable
   */
  function mergeMap(project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    return operators_1.mergeMap(project, concurrent)(this);
  }
  exports.mergeMap = mergeMap;

});
System.registerDynamic("rxjs/add/operator/mergeMap", ["rxjs", "rxjs-compat/operator/mergeMap"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var mergeMap_1 = $__require("rxjs-compat/operator/mergeMap");
  rxjs_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
  rxjs_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;

});
System.registerDynamic("rxjs-compat/operator/mergeMapTo", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Projects each source value to the same Observable which is merged multiple
   * times in the output Observable.
   *
   * <span class="informal">It's like {@link mergeMap}, but maps each value always
   * to the same inner Observable.</span>
   *
   * <img src="./img/mergeMapTo.png" width="100%">
   *
   * Maps each source value to the given Observable `innerObservable` regardless
   * of the source value, and then merges those resulting Observables into one
   * single Observable, which is the output Observable.
   *
   * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concatMapTo}
   * @see {@link merge}
   * @see {@link mergeAll}
   * @see {@link mergeMap}
   * @see {@link mergeScan}
   * @see {@link switchMapTo}
   *
   * @param {ObservableInput} innerObservable An Observable to replace each value from
   * the source Observable.
   * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
   * Observables being subscribed to concurrently.
   * @return {Observable} An Observable that emits items from the given
   * `innerObservable`.
   * @method mergeMapTo
   * @owner Observable
   */
  function mergeMapTo(innerObservable, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    return operators_1.mergeMapTo(innerObservable, concurrent)(this);
  }
  exports.mergeMapTo = mergeMapTo;

});
System.registerDynamic("rxjs/add/operator/mergeMapTo", ["rxjs", "rxjs-compat/operator/mergeMapTo"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var mergeMapTo_1 = $__require("rxjs-compat/operator/mergeMapTo");
  rxjs_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
  rxjs_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;

});
System.registerDynamic("rxjs-compat/operator/mergeScan", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Applies an accumulator function over the source Observable where the
   * accumulator function itself returns an Observable, then each intermediate
   * Observable returned is merged into the output Observable.
   *
   * <span class="informal">It's like {@link scan}, but the Observables returned
   * by the accumulator are merged into the outer Observable.</span>
   *
   * @example <caption>Count the number of click events</caption>
   * const click$ = Rx.Observable.fromEvent(document, 'click');
   * const one$ = click$.mapTo(1);
   * const seed = 0;
   * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
   * count$.subscribe(x => console.log(x));
   *
   * // Results:
   * 1
   * 2
   * 3
   * 4
   * // ...and so on for each click
   *
   * @param {function(acc: R, value: T): Observable<R>} accumulator
   * The accumulator function called on each source value.
   * @param seed The initial accumulation value.
   * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
   * input Observables being subscribed to concurrently.
   * @return {Observable<R>} An observable of the accumulated values.
   * @method mergeScan
   * @owner Observable
   */
  function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    return operators_1.mergeScan(accumulator, seed, concurrent)(this);
  }
  exports.mergeScan = mergeScan;

});
System.registerDynamic("rxjs/add/operator/mergeScan", ["rxjs", "rxjs-compat/operator/mergeScan"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var mergeScan_1 = $__require("rxjs-compat/operator/mergeScan");
  rxjs_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan;

});
System.registerDynamic("rxjs-compat/operator/min", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
   * and when source Observable completes it emits a single item: the item with the smallest value.
   *
   * <img src="./img/min.png" width="100%">
   *
   * @example <caption>Get the minimal value of a series of numbers</caption>
   * Rx.Observable.of(5, 4, 7, 2, 8)
   *   .min()
   *   .subscribe(x => console.log(x)); // -> 2
   *
   * @example <caption>Use a comparer function to get the minimal item</caption>
   * interface Person {
   *   age: number,
   *   name: string
   * }
   * Observable.of<Person>({age: 7, name: 'Foo'},
   *                       {age: 5, name: 'Bar'},
   *                       {age: 9, name: 'Beer'})
   *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
   *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
   * }
   *
   * @see {@link max}
   *
   * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
   * value of two items.
   * @return {Observable<R>} An Observable that emits item with the smallest value.
   * @method min
   * @owner Observable
   */
  function min(comparer) {
    return operators_1.min(comparer)(this);
  }
  exports.min = min;

});
System.registerDynamic("rxjs/add/operator/min", ["rxjs", "rxjs-compat/operator/min"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var min_1 = $__require("rxjs-compat/operator/min");
  rxjs_1.Observable.prototype.min = min_1.min;

});
System.registerDynamic("rxjs-compat/operator/multicast", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   * Allows source Observable to be subscribed only once with a Subject of choice,
   * while still sharing its values between multiple subscribers.
   *
   * <span class="informal">Subscribe to Observable once, but send its values to multiple subscribers.</span>
   *
   * <img src="./img/multicast.png" width="100%">
   *
   * `multicast` is an operator that works in two modes.
   *
   * In the first mode you provide a single argument to it, which can be either an initialized Subject or a Subject
   * factory. As a result you will get a special kind of an Observable - a {@link ConnectableObservable}. It can be
   * subscribed multiple times, just as regular Observable, but it won't subscribe to the source Observable at that
   * moment. It will do it only if you call its `connect` method. This means you can essentially control by hand, when
   * source Observable will be actually subscribed. What is more, ConnectableObservable will share this one subscription
   * between all of its subscribers. This means that, for example, `ajax` Observable will only send a request once,
   * even though usually it would send a request per every subscriber. Since it sends a request at the moment of
   * subscription, here request would be sent when the `connect` method of a ConnectableObservable is called.
   *
   * The most common pattern of using ConnectableObservable is calling `connect` when the first consumer subscribes,
   * keeping the subscription alive while several consumers come and go and finally unsubscribing from the source
   * Observable, when the last consumer unsubscribes. To not implement that logic over and over again,
   * ConnectableObservable has a special operator, `refCount`. When called, it returns an Observable, which will count
   * the number of consumers subscribed to it and keep ConnectableObservable connected as long as there is at least
   * one consumer. So if you don't actually need to decide yourself when to connect and disconnect a
   * ConnectableObservable, use `refCount`.
   *
   * The second mode is invoked by calling `multicast` with an additional, second argument - selector function.
   * This function accepts an Observable - which basically mirrors the source Observable - and returns Observable
   * as well, which should be the input stream modified by any operators you want. Note that in this
   * mode you cannot provide initialized Subject as a first argument - it has to be a Subject factory. If
   * you provide selector function, `multicast` returns just a regular Observable, instead of ConnectableObservable.
   * Thus, as usual, each subscription to this stream triggers subscription to the source Observable. However,
   * if inside the selector function you subscribe to the input Observable multiple times, actual source stream
   * will be subscribed only once. So if you have a chain of operators that use some Observable many times,
   * but you want to subscribe to that Observable only once, this is the mode you would use.
   *
   * Subject provided as a first parameter of `multicast` is used as a proxy for the single subscription to the
   * source Observable. It means that all values from the source stream go through that Subject. Thus, if a Subject
   * has some special properties, Observable returned by `multicast` will have them as well. If you want to use
   * `multicast` with a Subject that is one of the ones included in RxJS by default - {@link Subject},
   * {@link AsyncSubject}, {@link BehaviorSubject}, or {@link ReplaySubject} - simply use {@link publish},
   * {@link publishLast}, {@link publishBehavior} or {@link publishReplay} respectively. These are actually
   * just wrappers around `multicast`, with a specific Subject hardcoded inside.
   *
   * Also, if you use {@link publish} or {@link publishReplay} with a ConnectableObservables `refCount` operator,
   * you can simply use {@link share} and {@link shareReplay} respectively, which chain these two.
   *
   * @example <caption>Use ConnectableObservable</caption>
   * const seconds = Rx.Observable.interval(1000);
   * const connectableSeconds = seconds.multicast(new Subject());
   *
   * connectableSeconds.subscribe(value => console.log('first: ' + value));
   * connectableSeconds.subscribe(value => console.log('second: ' + value));
   *
   * // At this point still nothing happens, even though we subscribed twice.
   *
   * connectableSeconds.connect();
   *
   * // From now on `seconds` are being logged to the console,
   * // twice per every second. `seconds` Observable was however only subscribed once,
   * // so under the hood Observable.interval had only one clock started.
   *
   * @example <caption>Use selector</caption>
   * const seconds = Rx.Observable.interval(1000);
   *
   * seconds
   *     .multicast(
   *         () => new Subject(),
   *         seconds => seconds.zip(seconds) // Usually zip would subscribe to `seconds` twice.
   *                                         // Because we are inside selector, `seconds` is subscribed once,
   *     )                                   // thus starting only one clock used internally by Observable.interval.
   *     .subscribe();
   *
   * @see {@link publish}
   * @see {@link publishLast}
   * @see {@link publishBehavior}
   * @see {@link publishReplay}
   * @see {@link share}
   * @see {@link shareReplay}
   *
   * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate Subject through
   * which the source sequence's elements will be multicast to the selector function input Observable or
   * ConnectableObservable returned by the operator.
   * @param {Function} [selector] - Optional selector function that can use the input stream
   * as many times as needed, without causing multiple subscriptions to the source stream.
   * Subscribers to the input source will receive all notifications of the source from the
   * time of the subscription forward.
   * @return {Observable<T>|ConnectableObservable<T>} An Observable that emits the results of invoking the selector
   * on the source stream or a special {@link ConnectableObservable}, if selector was not provided.
   *
   * @method multicast
   * @owner Observable
   */
  function multicast(subjectOrSubjectFactory, selector) {
    return operators_1.multicast(subjectOrSubjectFactory, selector)(this);
  }
  exports.multicast = multicast;

});
System.registerDynamic("rxjs/add/operator/multicast", ["rxjs", "rxjs-compat/operator/multicast"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var multicast_1 = $__require("rxjs-compat/operator/multicast");
  rxjs_1.Observable.prototype.multicast = multicast_1.multicast;

});
System.registerDynamic("rxjs-compat/operator/observeOn", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   *
   * Re-emits all notifications from source Observable with specified scheduler.
   *
   * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
   *
   * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
   * notifications emitted by the source Observable. It might be useful, if you do not have control over
   * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
   *
   * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
   * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
   * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
   * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
   * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
   * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
   * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
   * little bit more, to ensure that they are emitted at expected moments.
   *
   * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
   * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
   * will delay all notifications - including error notifications - while `delay` will pass through error
   * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
   * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
   * for notification emissions in general.
   *
   * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
   * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
   *                                               // with async scheduler by default...
   *
   * intervals
   * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
   * .subscribe(val => {                           // scheduler to ensure smooth animation.
   *   someDiv.style.height = val + 'px';
   * });
   *
   * @see {@link delay}
   *
   * @param {SchedulerLike} scheduler Scheduler that will be used to reschedule notifications from source Observable.
   * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
   * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
   * but with provided scheduler.
   *
   * @method observeOn
   * @owner Observable
   */
  function observeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return operators_1.observeOn(scheduler, delay)(this);
  }
  exports.observeOn = observeOn;

});
System.registerDynamic("rxjs/add/operator/observeOn", ["rxjs", "rxjs-compat/operator/observeOn"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var observeOn_1 = $__require("rxjs-compat/operator/observeOn");
  rxjs_1.Observable.prototype.observeOn = observeOn_1.observeOn;

});
System.registerDynamic("rxjs-compat/operator/onErrorResumeNext", ["rxjs/operators"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var operators_1 = $__require("rxjs/operators");
    /* tslint:enable:max-line-length */
    /**
     * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
     * that was passed.
     *
     * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
     *
     * <img src="./img/onErrorResumeNext.png" width="100%">
     *
     * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
     * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
     * as the source.
     *
     * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
     * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
     * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
     * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
     * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
     * be happening until there is no more Observables left in the series, at which point returned Observable will
     * complete - even if the last subscribed stream ended with an error.
     *
     * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
     * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
     * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
     * an error.
     *
     * Note that you do not get any access to errors emitted by the Observables. In particular do not
     * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
     * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
     *
     *
     * @example <caption>Subscribe to the next Observable after map fails</caption>
     * Rx.Observable.of(1, 2, 3, 0)
     *   .map(x => {
     *       if (x === 0) { throw Error(); }
             return 10 / x;
     *   })
     *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
     *   .subscribe(
     *     val => console.log(val),
     *     err => console.log(err),          // Will never be called.
     *     () => console.log('that\'s it!')
     *   );
     *
     * // Logs:
     * // 10
     * // 5
     * // 3.3333333333333335
     * // 1
     * // 2
     * // 3
     * // "that's it!"
     *
     * @see {@link concat}
     * @see {@link catch}
     *
     * @param {...ObservableInput} observables Observables passed either directly or as an array.
     * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
     * to the next passed Observable and so on, until it completes or runs out of Observables.
     * @method onErrorResumeNext
     * @owner Observable
     */
    function onErrorResumeNext() {
        var nextSources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nextSources[_i] = arguments[_i];
        }
        return operators_1.onErrorResumeNext.apply(void 0, nextSources)(this);
    }
    exports.onErrorResumeNext = onErrorResumeNext;

});
System.registerDynamic("rxjs/add/operator/onErrorResumeNext", ["rxjs", "rxjs-compat/operator/onErrorResumeNext"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var onErrorResumeNext_1 = $__require("rxjs-compat/operator/onErrorResumeNext");
  rxjs_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;

});
System.registerDynamic("rxjs-compat/operator/pairwise", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Groups pairs of consecutive emissions together and emits them as an array of
   * two values.
   *
   * <span class="informal">Puts the current value and previous value together as
   * an array, and emits that.</span>
   *
   * <img src="./img/pairwise.png" width="100%">
   *
   * The Nth emission from the source Observable will cause the output Observable
   * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
   * pair. For this reason, `pairwise` emits on the second and subsequent
   * emissions from the source Observable, but not on the first emission, because
   * there is no previous value in that case.
   *
   * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var pairs = clicks.pairwise();
   * var distance = pairs.map(pair => {
   *   var x0 = pair[0].clientX;
   *   var y0 = pair[0].clientY;
   *   var x1 = pair[1].clientX;
   *   var y1 = pair[1].clientY;
   *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
   * });
   * distance.subscribe(x => console.log(x));
   *
   * @see {@link buffer}
   * @see {@link bufferCount}
   *
   * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
   * consecutive values from the source Observable.
   * @method pairwise
   * @owner Observable
   */
  function pairwise() {
    return operators_1.pairwise()(this);
  }
  exports.pairwise = pairwise;

});
System.registerDynamic("rxjs/add/operator/pairwise", ["rxjs", "rxjs-compat/operator/pairwise"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var pairwise_1 = $__require("rxjs-compat/operator/pairwise");
  rxjs_1.Observable.prototype.pairwise = pairwise_1.pairwise;

});
System.registerDynamic("rxjs-compat/operator/partition", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Splits the source Observable into two, one with values that satisfy a
   * predicate, and another with values that don't satisfy the predicate.
   *
   * <span class="informal">It's like {@link filter}, but returns two Observables:
   * one like the output of {@link filter}, and the other with values that did not
   * pass the condition.</span>
   *
   * <img src="./img/partition.png" width="100%">
   *
   * `partition` outputs an array with two Observables that partition the values
   * from the source Observable through the given `predicate` function. The first
   * Observable in that array emits source values for which the predicate argument
   * returns true. The second Observable emits source values for which the
   * predicate returns false. The first behaves like {@link filter} and the second
   * behaves like {@link filter} with the predicate negated.
   *
   * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
   * var clicksOnDivs = parts[0];
   * var clicksElsewhere = parts[1];
   * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
   * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
   *
   * @see {@link filter}
   *
   * @param {function(value: T, index: number): boolean} predicate A function that
   * evaluates each value emitted by the source Observable. If it returns `true`,
   * the value is emitted on the first Observable in the returned array, if
   * `false` the value is emitted on the second Observable in the array. The
   * `index` parameter is the number `i` for the i-th source emission that has
   * happened since the subscription, starting from the number `0`.
   * @param {any} [thisArg] An optional argument to determine the value of `this`
   * in the `predicate` function.
   * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
   * with values that passed the predicate, and another with values that did not
   * pass the predicate.
   * @method partition
   * @owner Observable
   */
  function partition(predicate, thisArg) {
    return operators_1.partition(predicate, thisArg)(this);
  }
  exports.partition = partition;

});
System.registerDynamic("rxjs/add/operator/partition", ["rxjs", "rxjs-compat/operator/partition"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var partition_1 = $__require("rxjs-compat/operator/partition");
  rxjs_1.Observable.prototype.partition = partition_1.partition;

});
System.registerDynamic("rxjs-compat/operator/pluck", ["rxjs/operators"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var operators_1 = $__require("rxjs/operators");
    /**
     * Maps each source value (an object) to its specified nested property.
     *
     * <span class="informal">Like {@link map}, but meant only for picking one of
     * the nested properties of every emitted object.</span>
     *
     * <img src="./img/pluck.png" width="100%">
     *
     * Given a list of strings describing a path to an object property, retrieves
     * the value of a specified nested property from all values in the source
     * Observable. If a property can't be resolved, it will return `undefined` for
     * that value.
     *
     * @example <caption>Map every click to the tagName of the clicked target element</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var tagNames = clicks.pluck('target', 'tagName');
     * tagNames.subscribe(x => console.log(x));
     *
     * @see {@link map}
     *
     * @param {...string} properties The nested properties to pluck from each source
     * value (an object).
     * @return {Observable} A new Observable of property values from the source values.
     * @method pluck
     * @owner Observable
     */
    function pluck() {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        return operators_1.pluck.apply(void 0, properties)(this);
    }
    exports.pluck = pluck;

});
System.registerDynamic("rxjs/add/operator/pluck", ["rxjs", "rxjs-compat/operator/pluck"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var pluck_1 = $__require("rxjs-compat/operator/pluck");
  rxjs_1.Observable.prototype.pluck = pluck_1.pluck;

});
System.registerDynamic("rxjs-compat/operator/publish", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
   * before it begins emitting items to those Observers that have subscribed to it.
   *
   * <img src="./img/publish.png" width="100%">
   *
   * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
   * as needed, without causing multiple subscriptions to the source sequence.
   * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
   * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
   * @method publish
   * @owner Observable
   */
  function publish(selector) {
    return operators_1.publish(selector)(this);
  }
  exports.publish = publish;

});
System.registerDynamic("rxjs/add/operator/publish", ["rxjs", "rxjs-compat/operator/publish"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var publish_1 = $__require("rxjs-compat/operator/publish");
  rxjs_1.Observable.prototype.publish = publish_1.publish;

});
System.registerDynamic("rxjs-compat/operator/publishBehavior", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * @param value
   * @return {ConnectableObservable<T>}
   * @method publishBehavior
   * @owner Observable
   */
  function publishBehavior(value) {
    return operators_1.publishBehavior(value)(this);
  }
  exports.publishBehavior = publishBehavior;

});
System.registerDynamic("rxjs/add/operator/publishBehavior", ["rxjs", "rxjs-compat/operator/publishBehavior"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var publishBehavior_1 = $__require("rxjs-compat/operator/publishBehavior");
  rxjs_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;

});
System.registerDynamic("rxjs-compat/operator/publishReplay", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   * @param bufferSize
   * @param windowTime
   * @param selectorOrScheduler
   * @param scheduler
   * @return {Observable<T> | ConnectableObservable<T>}
   * @method publishReplay
   * @owner Observable
   */
  function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    return operators_1.publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler)(this);
  }
  exports.publishReplay = publishReplay;

});
System.registerDynamic("rxjs/add/operator/publishReplay", ["rxjs", "rxjs-compat/operator/publishReplay"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var publishReplay_1 = $__require("rxjs-compat/operator/publishReplay");
  rxjs_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;

});
System.registerDynamic("rxjs-compat/operator/publishLast", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * @return {ConnectableObservable<T>}
   * @method publishLast
   * @owner Observable
   */
  function publishLast() {
    //TODO(benlesh): correct type-flow through here.
    return operators_1.publishLast()(this);
  }
  exports.publishLast = publishLast;

});
System.registerDynamic("rxjs/add/operator/publishLast", ["rxjs", "rxjs-compat/operator/publishLast"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var publishLast_1 = $__require("rxjs-compat/operator/publishLast");
  rxjs_1.Observable.prototype.publishLast = publishLast_1.publishLast;

});
System.registerDynamic("rxjs-compat/operator/race", ["rxjs/operators"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var operators_1 = $__require("rxjs/operators");
    /* tslint:enable:max-line-length */
    /**
     * Returns an Observable that mirrors the first source Observable to emit an item
     * from the combination of this Observable and supplied Observables.
     * @param {...Observables} ...observables Sources used to race for which Observable emits first.
     * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
     * @method race
     * @owner Observable
     */
    function race() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return operators_1.race.apply(void 0, observables)(this);
    }
    exports.race = race;

});
System.registerDynamic("rxjs/add/operator/race", ["rxjs", "rxjs-compat/operator/race"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var race_1 = $__require("rxjs-compat/operator/race");
  rxjs_1.Observable.prototype.race = race_1.race;

});
System.registerDynamic("rxjs-compat/operator/reduce", ["rxjs/operators"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var operators_1 = $__require("rxjs/operators");
    /* tslint:enable:max-line-length */
    /**
     * Applies an accumulator function over the source Observable, and returns the
     * accumulated result when the source completes, given an optional seed value.
     *
     * <span class="informal">Combines together all values emitted on the source,
     * using an accumulator function that knows how to join a new source value into
     * the accumulation from the past.</span>
     *
     * <img src="./img/reduce.png" width="100%">
     *
     * Like
     * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
     * `reduce` applies an `accumulator` function against an accumulation and each
     * value of the source Observable (from the past) to reduce it to a single
     * value, emitted on the output Observable. Note that `reduce` will only emit
     * one value, only when the source Observable completes. It is equivalent to
     * applying operator {@link scan} followed by operator {@link last}.
     *
     * Returns an Observable that applies a specified `accumulator` function to each
     * item emitted by the source Observable. If a `seed` value is specified, then
     * that value will be used as the initial value for the accumulator. If no seed
     * value is specified, the first item of the source is used as the seed.
     *
     * @example <caption>Count the number of click events that happened in 5 seconds</caption>
     * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
     *   .takeUntil(Rx.Observable.interval(5000));
     * var ones = clicksInFiveSeconds.mapTo(1);
     * var seed = 0;
     * var count = ones.reduce((acc, one) => acc + one, seed);
     * count.subscribe(x => console.log(x));
     *
     * @see {@link count}
     * @see {@link expand}
     * @see {@link mergeScan}
     * @see {@link scan}
     *
     * @param {function(acc: R, value: T, index: number): R} accumulator The accumulator function
     * called on each source value.
     * @param {R} [seed] The initial accumulation value.
     * @return {Observable<R>} An Observable that emits a single value that is the
     * result of accumulating the values emitted by the source Observable.
     * @method reduce
     * @owner Observable
     */
    function reduce(accumulator, seed) {
        // providing a seed of `undefined` *should* be valid and trigger
        // hasSeed! so don't use `seed !== undefined` checks!
        // For this reason, we have to check it here at the original call site
        // otherwise inside Operator/Subscriber we won't know if `undefined`
        // means they didn't provide anything or if they literally provided `undefined`
        if (arguments.length >= 2) {
            return operators_1.reduce(accumulator, seed)(this);
        }
        return operators_1.reduce(accumulator)(this);
    }
    exports.reduce = reduce;

});
System.registerDynamic("rxjs/add/operator/reduce", ["rxjs", "rxjs-compat/operator/reduce"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var reduce_1 = $__require("rxjs-compat/operator/reduce");
  rxjs_1.Observable.prototype.reduce = reduce_1.reduce;

});
System.registerDynamic("rxjs-compat/operator/repeat", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
   *
   * <img src="./img/repeat.png" width="100%">
   *
   * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
   * an empty Observable.
   * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
   * count times.
   * @method repeat
   * @owner Observable
   */
  function repeat(count) {
    if (count === void 0) {
      count = -1;
    }
    return operators_1.repeat(count)(this);
  }
  exports.repeat = repeat;

});
System.registerDynamic("rxjs/add/operator/repeat", ["rxjs", "rxjs-compat/operator/repeat"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var repeat_1 = $__require("rxjs-compat/operator/repeat");
  rxjs_1.Observable.prototype.repeat = repeat_1.repeat;

});
System.registerDynamic("rxjs-compat/operator/repeatWhen", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
   * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
   * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
   * this method will resubscribe to the source Observable.
   *
   * <img src="./img/repeatWhen.png" width="100%">
   *
   * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
   * which a user can `complete` or `error`, aborting the repetition.
   * @return {Observable} The source Observable modified with repeat logic.
   * @method repeatWhen
   * @owner Observable
   */
  function repeatWhen(notifier) {
    return operators_1.repeatWhen(notifier)(this);
  }
  exports.repeatWhen = repeatWhen;

});
System.registerDynamic("rxjs/add/operator/repeatWhen", ["rxjs", "rxjs-compat/operator/repeatWhen"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var repeatWhen_1 = $__require("rxjs-compat/operator/repeatWhen");
  rxjs_1.Observable.prototype.repeatWhen = repeatWhen_1.repeatWhen;

});
System.registerDynamic("rxjs-compat/operator/retry", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
   * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
   * as a number parameter) rather than propagating the `error` call.
   *
   * <img src="./img/retry.png" width="100%">
   *
   * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
   * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
   * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
   * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
   * @param {number} count - Number of retry attempts before failing.
   * @return {Observable} The source Observable modified with the retry logic.
   * @method retry
   * @owner Observable
   */
  function retry(count) {
    if (count === void 0) {
      count = -1;
    }
    return operators_1.retry(count)(this);
  }
  exports.retry = retry;

});
System.registerDynamic("rxjs/add/operator/retry", ["rxjs", "rxjs-compat/operator/retry"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var retry_1 = $__require("rxjs-compat/operator/retry");
  rxjs_1.Observable.prototype.retry = retry_1.retry;

});
System.registerDynamic("rxjs-compat/operator/retryWhen", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
   * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
   * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
   * subscription. Otherwise this method will resubscribe to the source Observable.
   *
   * <img src="./img/retryWhen.png" width="100%">
   *
   * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
   * user can `complete` or `error`, aborting the retry.
   * @return {Observable} The source Observable modified with retry logic.
   * @method retryWhen
   * @owner Observable
   */
  function retryWhen(notifier) {
    return operators_1.retryWhen(notifier)(this);
  }
  exports.retryWhen = retryWhen;

});
System.registerDynamic("rxjs/add/operator/retryWhen", ["rxjs", "rxjs-compat/operator/retryWhen"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var retryWhen_1 = $__require("rxjs-compat/operator/retryWhen");
  rxjs_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;

});
System.registerDynamic("rxjs-compat/operator/sample", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Emits the most recently emitted value from the source Observable whenever
   * another Observable, the `notifier`, emits.
   *
   * <span class="informal">It's like {@link sampleTime}, but samples whenever
   * the `notifier` Observable emits something.</span>
   *
   * <img src="./img/sample.png" width="100%">
   *
   * Whenever the `notifier` Observable emits a value or completes, `sample`
   * looks at the source Observable and emits whichever value it has most recently
   * emitted since the previous sampling, unless the source has not emitted
   * anything since the previous sampling. The `notifier` is subscribed to as soon
   * as the output Observable is subscribed.
   *
   * @example <caption>On every click, sample the most recent "seconds" timer</caption>
   * var seconds = Rx.Observable.interval(1000);
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = seconds.sample(clicks);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link audit}
   * @see {@link debounce}
   * @see {@link sampleTime}
   * @see {@link throttle}
   *
   * @param {Observable<any>} notifier The Observable to use for sampling the
   * source Observable.
   * @return {Observable<T>} An Observable that emits the results of sampling the
   * values emitted by the source Observable whenever the notifier Observable
   * emits value or completes.
   * @method sample
   * @owner Observable
   */
  function sample(notifier) {
    return operators_1.sample(notifier)(this);
  }
  exports.sample = sample;

});
System.registerDynamic("rxjs/add/operator/sample", ["rxjs", "rxjs-compat/operator/sample"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var sample_1 = $__require("rxjs-compat/operator/sample");
  rxjs_1.Observable.prototype.sample = sample_1.sample;

});
System.registerDynamic("rxjs-compat/operator/sampleTime", ["rxjs", "rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var operators_1 = $__require("rxjs/operators");
  /**
   * Emits the most recently emitted value from the source Observable within
   * periodic time intervals.
   *
   * <span class="informal">Samples the source Observable at periodic time
   * intervals, emitting what it samples.</span>
   *
   * <img src="./img/sampleTime.png" width="100%">
   *
   * `sampleTime` periodically looks at the source Observable and emits whichever
   * value it has most recently emitted since the previous sampling, unless the
   * source has not emitted anything since the previous sampling. The sampling
   * happens periodically in time every `period` milliseconds (or the time unit
   * defined by the optional `scheduler` argument). The sampling starts as soon as
   * the output Observable is subscribed.
   *
   * @example <caption>Every second, emit the most recent click at most once</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.sampleTime(1000);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link auditTime}
   * @see {@link debounceTime}
   * @see {@link delay}
   * @see {@link sample}
   * @see {@link throttleTime}
   *
   * @param {number} period The sampling period expressed in milliseconds or the
   * time unit determined internally by the optional `scheduler`.
   * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
   * managing the timers that handle the sampling.
   * @return {Observable<T>} An Observable that emits the results of sampling the
   * values emitted by the source Observable at the specified time interval.
   * @method sampleTime
   * @owner Observable
   */
  function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
      scheduler = rxjs_1.asyncScheduler;
    }
    return operators_1.sampleTime(period, scheduler)(this);
  }
  exports.sampleTime = sampleTime;

});
System.registerDynamic("rxjs/add/operator/sampleTime", ["rxjs", "rxjs-compat/operator/sampleTime"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var sampleTime_1 = $__require("rxjs-compat/operator/sampleTime");
  rxjs_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;

});
System.registerDynamic("rxjs-compat/operator/scan", ["rxjs/operators"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var operators_1 = $__require("rxjs/operators");
    /* tslint:enable:max-line-length */
    /**
     * Applies an accumulator function over the source Observable, and returns each
     * intermediate result, with an optional seed value.
     *
     * <span class="informal">It's like {@link reduce}, but emits the current
     * accumulation whenever the source emits a value.</span>
     *
     * <img src="./img/scan.png" width="100%">
     *
     * Combines together all values emitted on the source, using an accumulator
     * function that knows how to join a new source value into the accumulation from
     * the past. Is similar to {@link reduce}, but emits the intermediate
     * accumulations.
     *
     * Returns an Observable that applies a specified `accumulator` function to each
     * item emitted by the source Observable. If a `seed` value is specified, then
     * that value will be used as the initial value for the accumulator. If no seed
     * value is specified, the first item of the source is used as the seed.
     *
     * @example <caption>Count the number of click events</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var ones = clicks.mapTo(1);
     * var seed = 0;
     * var count = ones.scan((acc, one) => acc + one, seed);
     * count.subscribe(x => console.log(x));
     *
     * @see {@link expand}
     * @see {@link mergeScan}
     * @see {@link reduce}
     *
     * @param {function(acc: R, value: T, index: number): R} accumulator
     * The accumulator function called on each source value.
     * @param {T|R} [seed] The initial accumulation value.
     * @return {Observable<R>} An observable of the accumulated values.
     * @method scan
     * @owner Observable
     */
    function scan(accumulator, seed) {
        if (arguments.length >= 2) {
            return operators_1.scan(accumulator, seed)(this);
        }
        return operators_1.scan(accumulator)(this);
    }
    exports.scan = scan;

});
System.registerDynamic("rxjs/add/operator/scan", ["rxjs", "rxjs-compat/operator/scan"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var scan_1 = $__require("rxjs-compat/operator/scan");
  rxjs_1.Observable.prototype.scan = scan_1.scan;

});
System.registerDynamic("rxjs-compat/operator/sequenceEqual", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Compares all values of two observables in sequence using an optional comparor function
   * and returns an observable of a single boolean value representing whether or not the two sequences
   * are equal.
   *
   * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
   *
   * <img src="./img/sequenceEqual.png" width="100%">
   *
   * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
   * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
   * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
   * observables completes, the operator will wait for the other observable to complete; If the other
   * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
   * completes or emits after the other complets, the returned observable will never complete.
   *
   * @example <caption>figure out if the Konami code matches</caption>
   * var code = Rx.Observable.from([
   *  "ArrowUp",
   *  "ArrowUp",
   *  "ArrowDown",
   *  "ArrowDown",
   *  "ArrowLeft",
   *  "ArrowRight",
   *  "ArrowLeft",
   *  "ArrowRight",
   *  "KeyB",
   *  "KeyA",
   *  "Enter" // no start key, clearly.
   * ]);
   *
   * var keys = Rx.Observable.fromEvent(document, 'keyup')
   *  .map(e => e.code);
   * var matches = keys.bufferCount(11, 1)
   *  .mergeMap(
   *    last11 =>
   *      Rx.Observable.from(last11)
   *        .sequenceEqual(code)
   *   );
   * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
   *
   * @see {@link combineLatest}
   * @see {@link zip}
   * @see {@link withLatestFrom}
   *
   * @param {Observable} compareTo The observable sequence to compare the source sequence to.
   * @param {function} [comparor] An optional function to compare each value pair
   * @return {Observable} An Observable of a single boolean value representing whether or not
   * the values emitted by both observables were equal in sequence.
   * @method sequenceEqual
   * @owner Observable
   */
  function sequenceEqual(compareTo, comparor) {
    return operators_1.sequenceEqual(compareTo, comparor)(this);
  }
  exports.sequenceEqual = sequenceEqual;

});
System.registerDynamic("rxjs/add/operator/sequenceEqual", ["rxjs", "rxjs-compat/operator/sequenceEqual"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var sequenceEqual_1 = $__require("rxjs-compat/operator/sequenceEqual");
  rxjs_1.Observable.prototype.sequenceEqual = sequenceEqual_1.sequenceEqual;

});
System.registerDynamic("rxjs-compat/operator/share", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
   * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
   * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
   *
   * This behaves similarly to .publish().refCount(), with a behavior difference when the source observable emits complete.
   * .publish().refCount() will not resubscribe to the original source, however .share() will resubscribe to the original source.
   * Observable.of("test").publish().refCount() will not re-emit "test" on new subscriptions, Observable.of("test").share() will
   * re-emit "test" to new subscriptions.
   *
   * <img src="./img/share.png" width="100%">
   *
   * @return {Observable<T>} An Observable that upon connection causes the source Observable to emit items to its Observers.
   * @method share
   * @owner Observable
   */
  function share() {
    return operators_1.share()(this);
  }
  exports.share = share;

});
System.registerDynamic("rxjs/add/operator/share", ["rxjs", "rxjs-compat/operator/share"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var share_1 = $__require("rxjs-compat/operator/share");
  rxjs_1.Observable.prototype.share = share_1.share;

});
System.registerDynamic("rxjs-compat/operator/shareReplay", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * @method shareReplay
   * @owner Observable
   */
  function shareReplay(bufferSize, windowTime, scheduler) {
    return operators_1.shareReplay(bufferSize, windowTime, scheduler)(this);
  }
  exports.shareReplay = shareReplay;

});
System.registerDynamic("rxjs/add/operator/shareReplay", ["rxjs", "rxjs-compat/operator/shareReplay"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var shareReplay_1 = $__require("rxjs-compat/operator/shareReplay");
  rxjs_1.Observable.prototype.shareReplay = shareReplay_1.shareReplay;

});
System.registerDynamic("rxjs-compat/operator/single", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
   * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
   * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
   *
   * <img src="./img/single.png" width="100%">
   *
   * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
   * callback if the Observable completes before any `next` notification was sent.
   * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
   * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
   * the predicate.
   .
   * @method single
   * @owner Observable
   */
  function single(predicate) {
    return operators_1.single(predicate)(this);
  }
  exports.single = single;

});
System.registerDynamic("rxjs/add/operator/single", ["rxjs", "rxjs-compat/operator/single"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var single_1 = $__require("rxjs-compat/operator/single");
  rxjs_1.Observable.prototype.single = single_1.single;

});
System.registerDynamic("rxjs-compat/operator/skip", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Returns an Observable that skips the first `count` items emitted by the source Observable.
   *
   * <img src="./img/skip.png" width="100%">
   *
   * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
   * @return {Observable} An Observable that skips values emitted by the source Observable.
   *
   * @method skip
   * @owner Observable
   */
  function skip(count) {
    return operators_1.skip(count)(this);
  }
  exports.skip = skip;

});
System.registerDynamic("rxjs/add/operator/skip", ["rxjs", "rxjs-compat/operator/skip"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var skip_1 = $__require("rxjs-compat/operator/skip");
  rxjs_1.Observable.prototype.skip = skip_1.skip;

});
System.registerDynamic("rxjs-compat/operator/skipLast", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Skip the last `count` values emitted by the source Observable.
   *
   * <img src="./img/skipLast.png" width="100%">
   *
   * `skipLast` returns an Observable that accumulates a queue with a length
   * enough to store the first `count` values. As more values are received,
   * values are taken from the front of the queue and produced on the result
   * sequence. This causes values to be delayed.
   *
   * @example <caption>Skip the last 2 values of an Observable with many values</caption>
   * var many = Rx.Observable.range(1, 5);
   * var skipLastTwo = many.skipLast(2);
   * skipLastTwo.subscribe(x => console.log(x));
   *
   * // Results in:
   * // 1 2 3
   *
   * @see {@link skip}
   * @see {@link skipUntil}
   * @see {@link skipWhile}
   * @see {@link take}
   *
   * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
   * ArgumentOutOrRangeError if `i < 0`.
   *
   * @param {number} count Number of elements to skip from the end of the source Observable.
   * @returns {Observable<T>} An Observable that skips the last count values
   * emitted by the source Observable.
   * @method skipLast
   * @owner Observable
   */
  function skipLast(count) {
    return operators_1.skipLast(count)(this);
  }
  exports.skipLast = skipLast;

});
System.registerDynamic("rxjs/add/operator/skipLast", ["rxjs", "rxjs-compat/operator/skipLast"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var skipLast_1 = $__require("rxjs-compat/operator/skipLast");
  rxjs_1.Observable.prototype.skipLast = skipLast_1.skipLast;

});
System.registerDynamic("rxjs-compat/operator/skipUntil", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
   *
   * <img src="./img/skipUntil.png" width="100%">
   *
   * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
   * be mirrored by the resulting Observable.
   * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
   * an item, then emits the remaining items.
   * @method skipUntil
   * @owner Observable
   */
  function skipUntil(notifier) {
    return operators_1.skipUntil(notifier)(this);
  }
  exports.skipUntil = skipUntil;

});
System.registerDynamic("rxjs/add/operator/skipUntil", ["rxjs", "rxjs-compat/operator/skipUntil"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var skipUntil_1 = $__require("rxjs-compat/operator/skipUntil");
  rxjs_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;

});
System.registerDynamic("rxjs-compat/operator/skipWhile", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
   * true, but emits all further source items as soon as the condition becomes false.
   *
   * <img src="./img/skipWhile.png" width="100%">
   *
   * @param {Function} predicate - A function to test each item emitted from the source Observable.
   * @return {Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
   * specified predicate becomes false.
   * @method skipWhile
   * @owner Observable
   */
  function skipWhile(predicate) {
    return operators_1.skipWhile(predicate)(this);
  }
  exports.skipWhile = skipWhile;

});
System.registerDynamic("rxjs/add/operator/skipWhile", ["rxjs", "rxjs-compat/operator/skipWhile"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var skipWhile_1 = $__require("rxjs-compat/operator/skipWhile");
  rxjs_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;

});
System.registerDynamic("rxjs-compat/operator/startWith", ["rxjs/operators"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var operators_1 = $__require("rxjs/operators");
    /* tslint:enable:max-line-length */
    /**
     * Returns an Observable that emits the items you specify as arguments before it begins to emit
     * items emitted by the source Observable.
     *
     * <img src="./img/startWith.png" width="100%">
     *
     * @param {...T} values - Items you want the modified Observable to emit first.
     * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
     * the emissions of the `next` notifications.
     * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
     * emitted by the source Observable.
     * @method startWith
     * @owner Observable
     */
    function startWith() {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        return operators_1.startWith.apply(void 0, array)(this);
    }
    exports.startWith = startWith;

});
System.registerDynamic("rxjs/add/operator/startWith", ["rxjs", "rxjs-compat/operator/startWith"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var startWith_1 = $__require("rxjs-compat/operator/startWith");
  rxjs_1.Observable.prototype.startWith = startWith_1.startWith;

});
System.registerDynamic("rxjs-compat/operator/subscribeOn", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
   *
   * <img src="./img/subscribeOn.png" width="100%">
   *
   * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
   * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
   .
   * @method subscribeOn
   * @owner Observable
   */
  function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return operators_1.subscribeOn(scheduler, delay)(this);
  }
  exports.subscribeOn = subscribeOn;

});
System.registerDynamic("rxjs/add/operator/subscribeOn", ["rxjs", "rxjs-compat/operator/subscribeOn"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var subscribeOn_1 = $__require("rxjs-compat/operator/subscribeOn");
  rxjs_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;

});
System.registerDynamic("rxjs-compat/operator/switch", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Converts a higher-order Observable into a first-order Observable by
   * subscribing to only the most recently emitted of those inner Observables.
   *
   * <span class="informal">Flattens an Observable-of-Observables by dropping the
   * previous inner Observable once a new one appears.</span>
   *
   * <img src="./img/switch.png" width="100%">
   *
   * `switch` subscribes to an Observable that emits Observables, also known as a
   * higher-order Observable. Each time it observes one of these emitted inner
   * Observables, the output Observable subscribes to the inner Observable and
   * begins emitting the items emitted by that. So far, it behaves
   * like {@link mergeAll}. However, when a new inner Observable is emitted,
   * `switch` unsubscribes from the earlier-emitted inner Observable and
   * subscribes to the new inner Observable and begins emitting items from it. It
   * continues to behave like this for subsequent inner Observables.
   *
   * @example <caption>Rerun an interval Observable on every click event</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * // Each click event is mapped to an Observable that ticks every second
   * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
   * var switched = higherOrder.switch();
   * // The outcome is that `switched` is essentially a timer that restarts
   * // on every click. The interval Observables from older clicks do not merge
   * // with the current interval Observable.
   * switched.subscribe(x => console.log(x));
   *
   * @see {@link combineAll}
   * @see {@link concatAll}
   * @see {@link exhaust}
   * @see {@link mergeAll}
   * @see {@link switchMap}
   * @see {@link switchMapTo}
   * @see {@link zipAll}
   *
   * @return {Observable<T>} An Observable that emits the items emitted by the
   * Observable most recently emitted by the source Observable.
   * @method switch
   * @name switch
   * @owner Observable
   */
  function _switch() {
    return operators_1.switchAll()(this);
  }
  exports._switch = _switch;

});
System.registerDynamic("rxjs/add/operator/switch", ["rxjs", "rxjs-compat/operator/switch"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var switch_1 = $__require("rxjs-compat/operator/switch");
  rxjs_1.Observable.prototype.switch = switch_1._switch;
  rxjs_1.Observable.prototype._switch = switch_1._switch;

});
System.registerDynamic("rxjs-compat/operator/switchMap", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Projects each source value to an Observable which is merged in the output
   * Observable, emitting values only from the most recently projected Observable.
   *
   * <span class="informal">Maps each value to an Observable, then flattens all of
   * these inner Observables using {@link switch}.</span>
   *
   * <img src="./img/switchMap.png" width="100%">
   *
   * Returns an Observable that emits items based on applying a function that you
   * supply to each item emitted by the source Observable, where that function
   * returns an (so-called "inner") Observable. Each time it observes one of these
   * inner Observables, the output Observable begins emitting the items emitted by
   * that inner Observable. When a new inner Observable is emitted, `switchMap`
   * stops emitting items from the earlier-emitted inner Observable and begins
   * emitting items from the new one. It continues to behave like this for
   * subsequent inner Observables.
   *
   * @example <caption>Rerun an interval Observable on every click event</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concatMap}
   * @see {@link exhaustMap}
   * @see {@link mergeMap}
   * @see {@link switch}
   * @see {@link switchMapTo}
   *
   * @param {function(value: T, ?index: number): ObservableInput} project A function
   * that, when applied to an item emitted by the source Observable, returns an
   * Observable.
   * @return {Observable} An Observable that emits the result of applying the
   * projection function (and the optional `resultSelector`) to each item emitted
   * by the source Observable and taking only the values from the most recently
   * projected inner Observable.
   * @method switchMap
   * @owner Observable
   */
  function switchMap(project) {
    return operators_1.switchMap(project)(this);
  }
  exports.switchMap = switchMap;

});
System.registerDynamic("rxjs/add/operator/switchMap", ["rxjs", "rxjs-compat/operator/switchMap"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var switchMap_1 = $__require("rxjs-compat/operator/switchMap");
  rxjs_1.Observable.prototype.switchMap = switchMap_1.switchMap;

});
System.registerDynamic("rxjs-compat/operator/switchMapTo", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   * Projects each source value to the same Observable which is flattened multiple
   * times with {@link switch} in the output Observable.
   *
   * <span class="informal">It's like {@link switchMap}, but maps each value
   * always to the same inner Observable.</span>
   *
   * <img src="./img/switchMapTo.png" width="100%">
   *
   * Maps each source value to the given Observable `innerObservable` regardless
   * of the source value, and then flattens those resulting Observables into one
   * single Observable, which is the output Observable. The output Observables
   * emits values only from the most recently emitted instance of
   * `innerObservable`.
   *
   * @example <caption>Rerun an interval Observable on every click event</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concatMapTo}
   * @see {@link switch}
   * @see {@link switchMap}
   * @see {@link mergeMapTo}
   *
   * @param {ObservableInput} innerObservable An Observable to replace each value from
   * the source Observable.
   * @return {Observable} An Observable that emits items from the given
   * `innerObservable` (and optionally transformed through `resultSelector`) every
   * time a value is emitted on the source Observable, and taking only the values
   * from the most recently projected inner Observable.
   * @method switchMapTo
   * @owner Observable
   */
  function switchMapTo(innerObservable) {
    return operators_1.switchMapTo(innerObservable)(this);
  }
  exports.switchMapTo = switchMapTo;

});
System.registerDynamic("rxjs/add/operator/switchMapTo", ["rxjs", "rxjs-compat/operator/switchMapTo"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var switchMapTo_1 = $__require("rxjs-compat/operator/switchMapTo");
  rxjs_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;

});
System.registerDynamic("rxjs-compat/operator/take", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Emits only the first `count` values emitted by the source Observable.
   *
   * <span class="informal">Takes the first `count` values from the source, then
   * completes.</span>
   *
   * <img src="./img/take.png" width="100%">
   *
   * `take` returns an Observable that emits only the first `count` values emitted
   * by the source Observable. If the source emits fewer than `count` values then
   * all of its values are emitted. After that, it completes, regardless if the
   * source completes.
   *
   * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
   * var interval = Rx.Observable.interval(1000);
   * var five = interval.take(5);
   * five.subscribe(x => console.log(x));
   *
   * @see {@link takeLast}
   * @see {@link takeUntil}
   * @see {@link takeWhile}
   * @see {@link skip}
   *
   * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
   * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
   *
   * @param {number} count The maximum number of `next` values to emit.
   * @return {Observable<T>} An Observable that emits only the first `count`
   * values emitted by the source Observable, or all of the values from the source
   * if the source emits fewer than `count` values.
   * @method take
   * @owner Observable
   */
  function take(count) {
    return operators_1.take(count)(this);
  }
  exports.take = take;

});
System.registerDynamic("rxjs/add/operator/take", ["rxjs", "rxjs-compat/operator/take"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var take_1 = $__require("rxjs-compat/operator/take");
  rxjs_1.Observable.prototype.take = take_1.take;

});
System.registerDynamic("rxjs-compat/operator/takeLast", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Emits only the last `count` values emitted by the source Observable.
   *
   * <span class="informal">Remembers the latest `count` values, then emits those
   * only when the source completes.</span>
   *
   * <img src="./img/takeLast.png" width="100%">
   *
   * `takeLast` returns an Observable that emits at most the last `count` values
   * emitted by the source Observable. If the source emits fewer than `count`
   * values then all of its values are emitted. This operator must wait until the
   * `complete` notification emission from the source in order to emit the `next`
   * values on the output Observable, because otherwise it is impossible to know
   * whether or not more values will be emitted on the source. For this reason,
   * all values are emitted synchronously, followed by the complete notification.
   *
   * @example <caption>Take the last 3 values of an Observable with many values</caption>
   * var many = Rx.Observable.range(1, 100);
   * var lastThree = many.takeLast(3);
   * lastThree.subscribe(x => console.log(x));
   *
   * @see {@link take}
   * @see {@link takeUntil}
   * @see {@link takeWhile}
   * @see {@link skip}
   *
   * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
   * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
   *
   * @param {number} count The maximum number of values to emit from the end of
   * the sequence of values emitted by the source Observable.
   * @return {Observable<T>} An Observable that emits at most the last count
   * values emitted by the source Observable.
   * @method takeLast
   * @owner Observable
   */
  function takeLast(count) {
    return operators_1.takeLast(count)(this);
  }
  exports.takeLast = takeLast;

});
System.registerDynamic("rxjs/add/operator/takeLast", ["rxjs", "rxjs-compat/operator/takeLast"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var takeLast_1 = $__require("rxjs-compat/operator/takeLast");
  rxjs_1.Observable.prototype.takeLast = takeLast_1.takeLast;

});
System.registerDynamic("rxjs-compat/operator/takeUntil", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Emits the values emitted by the source Observable until a `notifier`
   * Observable emits a value.
   *
   * <span class="informal">Lets values pass until a second Observable,
   * `notifier`, emits a value. Then, it completes.</span>
   *
   * <img src="./img/takeUntil.png" width="100%">
   *
   * `takeUntil` subscribes and begins mirroring the source Observable. It also
   * monitors a second Observable, `notifier` that you provide. If the `notifier`
   * emits a value, the output Observable stops mirroring the source Observable
   * and completes. If the `notifier` doesn't emit any value and completes
   * then `takeUntil` will pass all values.
   *
   * @example <caption>Tick every second until the first click happens</caption>
   * var interval = Rx.Observable.interval(1000);
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = interval.takeUntil(clicks);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link take}
   * @see {@link takeLast}
   * @see {@link takeWhile}
   * @see {@link skip}
   *
   * @param {Observable} notifier The Observable whose first emitted value will
   * cause the output Observable of `takeUntil` to stop emitting values from the
   * source Observable.
   * @return {Observable<T>} An Observable that emits the values from the source
   * Observable until such time as `notifier` emits its first value.
   * @method takeUntil
   * @owner Observable
   */
  function takeUntil(notifier) {
    return operators_1.takeUntil(notifier)(this);
  }
  exports.takeUntil = takeUntil;

});
System.registerDynamic("rxjs/add/operator/takeUntil", ["rxjs", "rxjs-compat/operator/takeUntil"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var takeUntil_1 = $__require("rxjs-compat/operator/takeUntil");
  rxjs_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;

});
System.registerDynamic("rxjs-compat/operator/takeWhile", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Emits values emitted by the source Observable so long as each value satisfies
   * the given `predicate`, and then completes as soon as this `predicate` is not
   * satisfied.
   *
   * <span class="informal">Takes values from the source only while they pass the
   * condition given. When the first value does not satisfy, it completes.</span>
   *
   * <img src="./img/takeWhile.png" width="100%">
   *
   * `takeWhile` subscribes and begins mirroring the source Observable. Each value
   * emitted on the source is given to the `predicate` function which returns a
   * boolean, representing a condition to be satisfied by the source values. The
   * output Observable emits the source values until such time as the `predicate`
   * returns false, at which point `takeWhile` stops mirroring the source
   * Observable and completes the output Observable.
   *
   * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.takeWhile(ev => ev.clientX > 200);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link take}
   * @see {@link takeLast}
   * @see {@link takeUntil}
   * @see {@link skip}
   *
   * @param {function(value: T, index: number): boolean} predicate A function that
   * evaluates a value emitted by the source Observable and returns a boolean.
   * Also takes the (zero-based) index as the second argument.
   * @return {Observable<T>} An Observable that emits the values from the source
   * Observable so long as each value satisfies the condition defined by the
   * `predicate`, then completes.
   * @method takeWhile
   * @owner Observable
   */
  function takeWhile(predicate) {
    return operators_1.takeWhile(predicate)(this);
  }
  exports.takeWhile = takeWhile;

});
System.registerDynamic("rxjs/add/operator/takeWhile", ["rxjs", "rxjs-compat/operator/takeWhile"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var takeWhile_1 = $__require("rxjs-compat/operator/takeWhile");
  rxjs_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;

});
System.registerDynamic("rxjs-compat/operator/throttle", ["rxjs/operators", "rxjs/internal-compatibility"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  var internal_compatibility_1 = $__require("rxjs/internal-compatibility");
  /**
   * Emits a value from the source Observable, then ignores subsequent source
   * values for a duration determined by another Observable, then repeats this
   * process.
   *
   * <span class="informal">It's like {@link throttleTime}, but the silencing
   * duration is determined by a second Observable.</span>
   *
   * <img src="./img/throttle.png" width="100%">
   *
   * `throttle` emits the source Observable values on the output Observable
   * when its internal timer is disabled, and ignores source values when the timer
   * is enabled. Initially, the timer is disabled. As soon as the first source
   * value arrives, it is forwarded to the output Observable, and then the timer
   * is enabled by calling the `durationSelector` function with the source value,
   * which returns the "duration" Observable. When the duration Observable emits a
   * value or completes, the timer is disabled, and this process repeats for the
   * next source value.
   *
   * @example <caption>Emit clicks at a rate of at most one click per second</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link audit}
   * @see {@link debounce}
   * @see {@link delayWhen}
   * @see {@link sample}
   * @see {@link throttleTime}
   *
   * @param {function(value: T): SubscribableOrPromise} durationSelector A function
   * that receives a value from the source Observable, for computing the silencing
   * duration for each source value, returned as an Observable or a Promise.
   * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
   * to `{ leading: true, trailing: false }`.
   * @return {Observable<T>} An Observable that performs the throttle operation to
   * limit the rate of emissions from the source.
   * @method throttle
   * @owner Observable
   */
  function throttle(durationSelector, config) {
    if (config === void 0) {
      config = internal_compatibility_1.defaultThrottleConfig;
    }
    return operators_1.throttle(durationSelector, config)(this);
  }
  exports.throttle = throttle;

});
System.registerDynamic("rxjs/add/operator/throttle", ["rxjs", "rxjs-compat/operator/throttle"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var throttle_1 = $__require("rxjs-compat/operator/throttle");
  rxjs_1.Observable.prototype.throttle = throttle_1.throttle;

});
System.registerDynamic("rxjs-compat/operator/throttleTime", ["rxjs", "rxjs/internal-compatibility", "rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var internal_compatibility_1 = $__require("rxjs/internal-compatibility");
  var operators_1 = $__require("rxjs/operators");
  /**
   * Emits a value from the source Observable, then ignores subsequent source
   * values for `duration` milliseconds, then repeats this process.
   *
   * <span class="informal">Lets a value pass, then ignores source values for the
   * next `duration` milliseconds.</span>
   *
   * <img src="./img/throttleTime.png" width="100%">
   *
   * `throttleTime` emits the source Observable values on the output Observable
   * when its internal timer is disabled, and ignores source values when the timer
   * is enabled. Initially, the timer is disabled. As soon as the first source
   * value arrives, it is forwarded to the output Observable, and then the timer
   * is enabled. After `duration` milliseconds (or the time unit determined
   * internally by the optional `scheduler`) has passed, the timer is disabled,
   * and this process repeats for the next source value. Optionally takes a
   * {@link IScheduler} for managing timers.
   *
   * @example <caption>Emit clicks at a rate of at most one click per second</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.throttleTime(1000);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link auditTime}
   * @see {@link debounceTime}
   * @see {@link delay}
   * @see {@link sampleTime}
   * @see {@link throttle}
   *
   * @param {number} duration Time to wait before emitting another value after
   * emitting the last value, measured in milliseconds or the time unit determined
   * internally by the optional `scheduler`.
   * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
   * managing the timers that handle the throttling.
   * @return {Observable<T>} An Observable that performs the throttle operation to
   * limit the rate of emissions from the source.
   * @method throttleTime
   * @owner Observable
   */
  function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) {
      scheduler = rxjs_1.asyncScheduler;
    }
    if (config === void 0) {
      config = internal_compatibility_1.defaultThrottleConfig;
    }
    return operators_1.throttleTime(duration, scheduler, config)(this);
  }
  exports.throttleTime = throttleTime;

});
System.registerDynamic("rxjs/add/operator/throttleTime", ["rxjs", "rxjs-compat/operator/throttleTime"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var throttleTime_1 = $__require("rxjs-compat/operator/throttleTime");
  rxjs_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;

});
System.registerDynamic("rxjs-compat/operator/timeInterval", ["rxjs", "rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var operators_1 = $__require("rxjs/operators");
  /**
   * @param scheduler
   * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
   * @method timeInterval
   * @owner Observable
   */
  function timeInterval(scheduler) {
    if (scheduler === void 0) {
      scheduler = rxjs_1.asyncScheduler;
    }
    return operators_1.timeInterval(scheduler)(this);
  }
  exports.timeInterval = timeInterval;

});
System.registerDynamic("rxjs/add/operator/timeInterval", ["rxjs", "rxjs-compat/operator/timeInterval"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var timeInterval_1 = $__require("rxjs-compat/operator/timeInterval");
  rxjs_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval;

});
System.registerDynamic("rxjs-compat/operator/timeout", ["rxjs", "rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var operators_1 = $__require("rxjs/operators");
  /**
   *
   * Errors if Observable does not emit a value in given time span.
   *
   * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
   *
   * <img src="./img/timeout.png" width="100%">
   *
   * `timeout` operator accepts as an argument either a number or a Date.
   *
   * If number was provided, it returns an Observable that behaves like a source
   * Observable, unless there is a period of time where there is no value emitted.
   * So if you provide `100` as argument and first value comes after 50ms from
   * the moment of subscription, this value will be simply re-emitted by the resulting
   * Observable. If however after that 100ms passes without a second value being emitted,
   * stream will end with an error and source Observable will be unsubscribed.
   * These checks are performed throughout whole lifecycle of Observable - from the moment
   * it was subscribed to, until it completes or errors itself. Thus every value must be
   * emitted within specified period since previous value.
   *
   * If provided argument was Date, returned Observable behaves differently. It throws
   * if Observable did not complete before provided Date. This means that periods between
   * emission of particular values do not matter in this case. If Observable did not complete
   * before provided Date, source Observable will be unsubscribed. Other than that, resulting
   * stream behaves just as source Observable.
   *
   * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
   * when returned Observable will check if source stream emitted value or completed.
   *
   * @example <caption>Check if ticks are emitted within certain timespan</caption>
   * const seconds = Rx.Observable.interval(1000);
   *
   * seconds.timeout(1100) // Let's use bigger timespan to be safe,
   *                       // since `interval` might fire a bit later then scheduled.
   * .subscribe(
   *     value => console.log(value), // Will emit numbers just as regular `interval` would.
   *     err => console.log(err) // Will never be called.
   * );
   *
   * seconds.timeout(900).subscribe(
   *     value => console.log(value), // Will never be called.
   *     err => console.log(err) // Will emit error before even first value is emitted,
   *                             // since it did not arrive within 900ms period.
   * );
   *
   * @example <caption>Use Date to check if Observable completed</caption>
   * const seconds = Rx.Observable.interval(1000);
   *
   * seconds.timeout(new Date("December 17, 2020 03:24:00"))
   * .subscribe(
   *     value => console.log(value), // Will emit values as regular `interval` would
   *                                  // until December 17, 2020 at 03:24:00.
   *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
   *                             // since Observable did not complete by then.
   * );
   *
   * @see {@link timeoutWith}
   *
   * @param {number|Date} due Number specifying period within which Observable must emit values
   *                          or Date specifying before when Observable should complete
   * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
   * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
   * @method timeout
   * @owner Observable
   */
  function timeout(due, scheduler) {
    if (scheduler === void 0) {
      scheduler = rxjs_1.asyncScheduler;
    }
    return operators_1.timeout(due, scheduler)(this);
  }
  exports.timeout = timeout;

});
System.registerDynamic("rxjs/add/operator/timeout", ["rxjs", "rxjs-compat/operator/timeout"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var timeout_1 = $__require("rxjs-compat/operator/timeout");
  rxjs_1.Observable.prototype.timeout = timeout_1.timeout;

});
System.registerDynamic("rxjs-compat/operator/timeoutWith", ["rxjs", "rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var operators_1 = $__require("rxjs/operators");
  /* tslint:enable:max-line-length */
  /**
   *
   * Errors if Observable does not emit a value in given time span, in case of which
   * subscribes to the second Observable.
   *
   * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
   *
   * <img src="./img/timeoutWith.png" width="100%">
   *
   * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
   * still accepting as a first argument either a number or a Date, which control - respectively -
   * when values of source Observable should be emitted or when it should complete.
   *
   * The only difference is that it accepts a second, required parameter. This parameter
   * should be an Observable which will be subscribed when source Observable fails any timeout check.
   * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
   * values from second Observable. Note that this fallback Observable is not checked for timeouts
   * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
   * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
   * stream completes, it completes as well.
   *
   * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
   * here - as a third, optional parameter. It still is used to schedule timeout checks and -
   * as a consequence - when second Observable will be subscribed, since subscription happens
   * immediately after failing check.
   *
   * @example <caption>Add fallback observable</caption>
   * const seconds = Rx.Observable.interval(1000);
   * const minutes = Rx.Observable.interval(60 * 1000);
   *
   * seconds.timeoutWith(900, minutes)
   *     .subscribe(
   *         value => console.log(value), // After 900ms, will start emitting `minutes`,
   *                                      // since first value of `seconds` will not arrive fast enough.
   *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
   *                                 // but here will never be called.
   *     );
   *
   * @param {number|Date} due Number specifying period within which Observable must emit values
   *                          or Date specifying before when Observable should complete
   * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
   * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
   * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
   *                          passed as a second parameter.
   * @method timeoutWith
   * @owner Observable
   */
  function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
      scheduler = rxjs_1.asyncScheduler;
    }
    return operators_1.timeoutWith(due, withObservable, scheduler)(this);
  }
  exports.timeoutWith = timeoutWith;

});
System.registerDynamic("rxjs/add/operator/timeoutWith", ["rxjs", "rxjs-compat/operator/timeoutWith"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var timeoutWith_1 = $__require("rxjs-compat/operator/timeoutWith");
  rxjs_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;

});
System.registerDynamic("rxjs-compat/operator/timestamp", ["rxjs", "rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var operators_1 = $__require("rxjs/operators");
  /**
   * @param scheduler
   * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
   * @method timestamp
   * @owner Observable
   */
  function timestamp(scheduler) {
    if (scheduler === void 0) {
      scheduler = rxjs_1.asyncScheduler;
    }
    return operators_1.timestamp(scheduler)(this);
  }
  exports.timestamp = timestamp;

});
System.registerDynamic("rxjs/add/operator/timestamp", ["rxjs", "rxjs-compat/operator/timestamp"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var timestamp_1 = $__require("rxjs-compat/operator/timestamp");
  rxjs_1.Observable.prototype.timestamp = timestamp_1.timestamp;

});
System.registerDynamic("rxjs-compat/operator/toArray", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Collects all source emissions and emits them as an array when the source completes.
   *
   * <span class="informal">Get all values inside an array when the source completes</span>
   *
   * <img src="./img/toArray.png" width="100%">
   *
   * `toArray` will wait until the source Observable completes
   * before emitting the array containing all emissions.
   * When the source Observable errors no array will be emitted.
   *
   * @example <caption>Create array from input</caption>
   * const input = Rx.Observable.interval(100).take(4);
   *
   * input.toArray()
   *   .subscribe(arr => console.log(arr)); // [0,1,2,3]
   *
   * @see {@link buffer}
   *
   * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
   * @method toArray
   * @owner Observable
   */
  function toArray() {
    return operators_1.toArray()(this);
  }
  exports.toArray = toArray;

});
System.registerDynamic("rxjs/add/operator/toArray", ["rxjs", "rxjs-compat/operator/toArray"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var toArray_1 = $__require("rxjs-compat/operator/toArray");
  rxjs_1.Observable.prototype.toArray = toArray_1.toArray;

});
// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.

System.registerDynamic("rxjs/add/operator/toPromise", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.registry.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
System.registerDynamic("rxjs-compat/operator/window", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Branch out the source Observable values as a nested Observable whenever
   * `windowBoundaries` emits.
   *
   * <span class="informal">It's like {@link buffer}, but emits a nested Observable
   * instead of an array.</span>
   *
   * <img src="./img/window.png" width="100%">
   *
   * Returns an Observable that emits windows of items it collects from the source
   * Observable. The output Observable emits connected, non-overlapping
   * windows. It emits the current window and opens a new one whenever the
   * Observable `windowBoundaries` emits an item. Because each window is an
   * Observable, the output is a higher-order Observable.
   *
   * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var interval = Rx.Observable.interval(1000);
   * var result = clicks.window(interval)
   *   .map(win => win.take(2)) // each window has at most 2 emissions
   *   .mergeAll(); // flatten the Observable-of-Observables
   * result.subscribe(x => console.log(x));
   *
   * @see {@link windowCount}
   * @see {@link windowTime}
   * @see {@link windowToggle}
   * @see {@link windowWhen}
   * @see {@link buffer}
   *
   * @param {Observable<any>} windowBoundaries An Observable that completes the
   * previous window and starts a new window.
   * @return {Observable<Observable<T>>} An Observable of windows, which are
   * Observables emitting values of the source Observable.
   * @method window
   * @owner Observable
   */
  function window(windowBoundaries) {
    return operators_1.window(windowBoundaries)(this);
  }
  exports.window = window;

});
System.registerDynamic("rxjs/add/operator/window", ["rxjs", "rxjs-compat/operator/window"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var window_1 = $__require("rxjs-compat/operator/window");
  rxjs_1.Observable.prototype.window = window_1.window;

});
System.registerDynamic("rxjs-compat/operator/windowCount", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Branch out the source Observable values as a nested Observable with each
   * nested Observable emitting at most `windowSize` values.
   *
   * <span class="informal">It's like {@link bufferCount}, but emits a nested
   * Observable instead of an array.</span>
   *
   * <img src="./img/windowCount.png" width="100%">
   *
   * Returns an Observable that emits windows of items it collects from the source
   * Observable. The output Observable emits windows every `startWindowEvery`
   * items, each containing no more than `windowSize` items. When the source
   * Observable completes or encounters an error, the output Observable emits
   * the current window and propagates the notification from the source
   * Observable. If `startWindowEvery` is not provided, then new windows are
   * started immediately at the start of the source and when each window completes
   * with size `windowSize`.
   *
   * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.windowCount(3)
   *   .map(win => win.skip(1)) // skip first of every 3 clicks
   *   .mergeAll(); // flatten the Observable-of-Observables
   * result.subscribe(x => console.log(x));
   *
   * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.windowCount(2, 3)
   *   .mergeAll(); // flatten the Observable-of-Observables
   * result.subscribe(x => console.log(x));
   *
   * @see {@link window}
   * @see {@link windowTime}
   * @see {@link windowToggle}
   * @see {@link windowWhen}
   * @see {@link bufferCount}
   *
   * @param {number} windowSize The maximum number of values emitted by each
   * window.
   * @param {number} [startWindowEvery] Interval at which to start a new window.
   * For example if `startWindowEvery` is `2`, then a new window will be started
   * on every other value from the source. A new window is started at the
   * beginning of the source by default.
   * @return {Observable<Observable<T>>} An Observable of windows, which in turn
   * are Observable of values.
   * @method windowCount
   * @owner Observable
   */
  function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
      startWindowEvery = 0;
    }
    return operators_1.windowCount(windowSize, startWindowEvery)(this);
  }
  exports.windowCount = windowCount;

});
System.registerDynamic("rxjs/add/operator/windowCount", ["rxjs", "rxjs-compat/operator/windowCount"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var windowCount_1 = $__require("rxjs-compat/operator/windowCount");
  rxjs_1.Observable.prototype.windowCount = windowCount_1.windowCount;

});
System.registerDynamic("rxjs/internal/observable/dom/webSocket", ["rxjs/internal/observable/dom/WebSocketSubject"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var WebSocketSubject_1 = $__require("rxjs/internal/observable/dom/WebSocketSubject");
    function webSocket(urlConfigOrSource) {
        return new WebSocketSubject_1.WebSocketSubject(urlConfigOrSource);
    }
    exports.webSocket = webSocket;

});
System.registerDynamic("rxjs/internal/observable/dom/WebSocketSubject", ["rxjs/internal/Subject", "rxjs/internal/Subscriber", "rxjs/internal/Observable", "rxjs/internal/Subscription", "rxjs/internal/ReplaySubject", "rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    var __assign = exports && exports.__assign || Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var Observable_1 = $__require("rxjs/internal/Observable");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var ReplaySubject_1 = $__require("rxjs/internal/ReplaySubject");
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    var DEFAULT_WEBSOCKET_CONFIG = {
        url: '',
        deserializer: function (e) {
            return JSON.parse(e.data);
        },
        serializer: function (value) {
            return JSON.stringify(value);
        }
    };
    var WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = 'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';
    var WebSocketSubject = function (_super) {
        __extends(WebSocketSubject, _super);
        function WebSocketSubject(urlConfigOrSource, destination) {
            var _this = _super.call(this) || this;
            if (urlConfigOrSource instanceof Observable_1.Observable) {
                _this.destination = destination;
                _this.source = urlConfigOrSource;
            } else {
                var config = _this._config = __assign({}, DEFAULT_WEBSOCKET_CONFIG);
                _this._output = new Subject_1.Subject();
                if (typeof urlConfigOrSource === 'string') {
                    config.url = urlConfigOrSource;
                } else {
                    for (var key in urlConfigOrSource) {
                        if (urlConfigOrSource.hasOwnProperty(key)) {
                            config[key] = urlConfigOrSource[key];
                        }
                    }
                }
                if (!config.WebSocketCtor && WebSocket) {
                    config.WebSocketCtor = WebSocket;
                } else if (!config.WebSocketCtor) {
                    throw new Error('no WebSocket constructor can be found');
                }
                _this.destination = new ReplaySubject_1.ReplaySubject();
            }
            return _this;
        }
        WebSocketSubject.prototype.lift = function (operator) {
            var sock = new WebSocketSubject(this._config, this.destination);
            sock.operator = operator;
            sock.source = this;
            return sock;
        };
        WebSocketSubject.prototype._resetState = function () {
            this._socket = null;
            if (!this.source) {
                this.destination = new ReplaySubject_1.ReplaySubject();
            }
            this._output = new Subject_1.Subject();
        };
        WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
            var self = this;
            return new Observable_1.Observable(function (observer) {
                var result = tryCatch_1.tryCatch(subMsg)();
                if (result === errorObject_1.errorObject) {
                    observer.error(errorObject_1.errorObject.e);
                } else {
                    self.next(result);
                }
                var subscription = self.subscribe(function (x) {
                    var result = tryCatch_1.tryCatch(messageFilter)(x);
                    if (result === errorObject_1.errorObject) {
                        observer.error(errorObject_1.errorObject.e);
                    } else if (result) {
                        observer.next(x);
                    }
                }, function (err) {
                    return observer.error(err);
                }, function () {
                    return observer.complete();
                });
                return function () {
                    var result = tryCatch_1.tryCatch(unsubMsg)();
                    if (result === errorObject_1.errorObject) {
                        observer.error(errorObject_1.errorObject.e);
                    } else {
                        self.next(result);
                    }
                    subscription.unsubscribe();
                };
            });
        };
        WebSocketSubject.prototype._connectSocket = function () {
            var _this = this;
            var _a = this._config,
                WebSocketCtor = _a.WebSocketCtor,
                protocol = _a.protocol,
                url = _a.url,
                binaryType = _a.binaryType;
            var observer = this._output;
            var socket = null;
            try {
                socket = protocol ? new WebSocketCtor(url, protocol) : new WebSocketCtor(url);
                this._socket = socket;
                if (binaryType) {
                    this._socket.binaryType = binaryType;
                }
            } catch (e) {
                observer.error(e);
                return;
            }
            var subscription = new Subscription_1.Subscription(function () {
                _this._socket = null;
                if (socket && socket.readyState === 1) {
                    socket.close();
                }
            });
            socket.onopen = function (e) {
                var openObserver = _this._config.openObserver;
                if (openObserver) {
                    openObserver.next(e);
                }
                var queue = _this.destination;
                _this.destination = Subscriber_1.Subscriber.create(function (x) {
                    if (socket.readyState === 1) {
                        var serializer = _this._config.serializer;
                        var msg = tryCatch_1.tryCatch(serializer)(x);
                        if (msg === errorObject_1.errorObject) {
                            _this.destination.error(errorObject_1.errorObject.e);
                            return;
                        }
                        socket.send(msg);
                    }
                }, function (e) {
                    var closingObserver = _this._config.closingObserver;
                    if (closingObserver) {
                        closingObserver.next(undefined);
                    }
                    if (e && e.code) {
                        socket.close(e.code, e.reason);
                    } else {
                        observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
                    }
                    _this._resetState();
                }, function () {
                    var closingObserver = _this._config.closingObserver;
                    if (closingObserver) {
                        closingObserver.next(undefined);
                    }
                    socket.close();
                    _this._resetState();
                });
                if (queue && queue instanceof ReplaySubject_1.ReplaySubject) {
                    subscription.add(queue.subscribe(_this.destination));
                }
            };
            socket.onerror = function (e) {
                _this._resetState();
                observer.error(e);
            };
            socket.onclose = function (e) {
                _this._resetState();
                var closeObserver = _this._config.closeObserver;
                if (closeObserver) {
                    closeObserver.next(e);
                }
                if (e.wasClean) {
                    observer.complete();
                } else {
                    observer.error(e);
                }
            };
            socket.onmessage = function (e) {
                var deserializer = _this._config.deserializer;
                var result = tryCatch_1.tryCatch(deserializer)(e);
                if (result === errorObject_1.errorObject) {
                    observer.error(errorObject_1.errorObject.e);
                } else {
                    observer.next(result);
                }
            };
        };
        WebSocketSubject.prototype._subscribe = function (subscriber) {
            var _this = this;
            var source = this.source;
            if (source) {
                return source.subscribe(subscriber);
            }
            if (!this._socket) {
                this._connectSocket();
            }
            var subscription = new Subscription_1.Subscription();
            subscription.add(this._output.subscribe(subscriber));
            subscription.add(function () {
                var _socket = _this._socket;
                if (_this._output.observers.length === 0) {
                    if (_socket && _socket.readyState === 1) {
                        _socket.close();
                    }
                    _this._resetState();
                }
            });
            return subscription;
        };
        WebSocketSubject.prototype.unsubscribe = function () {
            var _a = this,
                source = _a.source,
                _socket = _a._socket;
            if (_socket && _socket.readyState === 1) {
                _socket.close();
                this._resetState();
            }
            _super.prototype.unsubscribe.call(this);
            if (!source) {
                this.destination = new ReplaySubject_1.ReplaySubject();
            }
        };
        return WebSocketSubject;
    }(Subject_1.AnonymousSubject);
    exports.WebSocketSubject = WebSocketSubject;

});
System.registerDynamic("rxjs/internal-compatibility", ["rxjs/internal/config", "rxjs/internal/InnerSubscriber", "rxjs/internal/OuterSubscriber", "rxjs/internal/Scheduler", "rxjs/internal/Subject", "rxjs/internal/SubjectSubscription", "rxjs/internal/Subscriber", "rxjs/internal/observable/fromPromise", "rxjs/internal/observable/fromIterable", "rxjs/internal/observable/dom/ajax", "rxjs/internal/observable/dom/webSocket", "rxjs/internal/observable/dom/AjaxObservable", "rxjs/internal/observable/dom/WebSocketSubject", "rxjs/internal/observable/combineLatest", "rxjs/internal/observable/range", "rxjs/internal/observable/SubscribeOnObservable", "rxjs/internal/operators/timestamp", "rxjs/internal/operators/timeInterval", "rxjs/internal/operators/groupBy", "rxjs/internal/operators/throttle", "rxjs/internal/symbol/rxSubscriber", "rxjs/internal/symbol/iterator", "rxjs/internal/symbol/observable", "rxjs/internal/util/ArgumentOutOfRangeError", "rxjs/internal/util/EmptyError", "rxjs/internal/util/Immediate", "rxjs/internal/util/ObjectUnsubscribedError", "rxjs/internal/util/TimeoutError", "rxjs/internal/util/UnsubscriptionError", "rxjs/internal/util/applyMixins", "rxjs/internal/util/errorObject", "rxjs/internal/util/hostReportError", "rxjs/internal/util/identity", "rxjs/internal/util/isArray", "rxjs/internal/util/isArrayLike", "rxjs/internal/util/isDate", "rxjs/internal/util/isFunction", "rxjs/internal/util/isIterable", "rxjs/internal/util/isNumeric", "rxjs/internal/util/isObject", "rxjs/internal/util/isInteropObservable", "rxjs/internal/util/isPromise", "rxjs/internal/util/isScheduler", "rxjs/internal/util/noop", "rxjs/internal/util/not", "rxjs/internal/util/pipe", "rxjs/internal/util/root", "rxjs/internal/util/subscribeTo", "rxjs/internal/util/subscribeToArray", "rxjs/internal/util/subscribeToIterable", "rxjs/internal/util/subscribeToObservable", "rxjs/internal/util/subscribeToPromise", "rxjs/internal/util/subscribeToResult", "rxjs/internal/util/toSubscriber", "rxjs/internal/util/tryCatch"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var config_1 = $__require("rxjs/internal/config");
  exports.config = config_1.config;
  var InnerSubscriber_1 = $__require("rxjs/internal/InnerSubscriber");
  exports.InnerSubscriber = InnerSubscriber_1.InnerSubscriber;
  var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
  exports.OuterSubscriber = OuterSubscriber_1.OuterSubscriber;
  var Scheduler_1 = $__require("rxjs/internal/Scheduler");
  exports.Scheduler = Scheduler_1.Scheduler;
  var Subject_1 = $__require("rxjs/internal/Subject");
  exports.AnonymousSubject = Subject_1.AnonymousSubject;
  var SubjectSubscription_1 = $__require("rxjs/internal/SubjectSubscription");
  exports.SubjectSubscription = SubjectSubscription_1.SubjectSubscription;
  var Subscriber_1 = $__require("rxjs/internal/Subscriber");
  exports.Subscriber = Subscriber_1.Subscriber;
  var fromPromise_1 = $__require("rxjs/internal/observable/fromPromise");
  exports.fromPromise = fromPromise_1.fromPromise;
  var fromIterable_1 = $__require("rxjs/internal/observable/fromIterable");
  exports.fromIterable = fromIterable_1.fromIterable;
  var ajax_1 = $__require("rxjs/internal/observable/dom/ajax");
  exports.ajax = ajax_1.ajax;
  var webSocket_1 = $__require("rxjs/internal/observable/dom/webSocket");
  exports.webSocket = webSocket_1.webSocket;
  var AjaxObservable_1 = $__require("rxjs/internal/observable/dom/AjaxObservable");
  exports.ajaxGet = AjaxObservable_1.ajaxGet;
  exports.ajaxPost = AjaxObservable_1.ajaxPost;
  exports.ajaxDelete = AjaxObservable_1.ajaxDelete;
  exports.ajaxPut = AjaxObservable_1.ajaxPut;
  exports.ajaxPatch = AjaxObservable_1.ajaxPatch;
  exports.ajaxGetJSON = AjaxObservable_1.ajaxGetJSON;
  exports.AjaxObservable = AjaxObservable_1.AjaxObservable;
  exports.AjaxSubscriber = AjaxObservable_1.AjaxSubscriber;
  exports.AjaxResponse = AjaxObservable_1.AjaxResponse;
  exports.AjaxError = AjaxObservable_1.AjaxError;
  exports.AjaxTimeoutError = AjaxObservable_1.AjaxTimeoutError;
  var WebSocketSubject_1 = $__require("rxjs/internal/observable/dom/WebSocketSubject");
  exports.WebSocketSubject = WebSocketSubject_1.WebSocketSubject;
  var combineLatest_1 = $__require("rxjs/internal/observable/combineLatest");
  exports.CombineLatestOperator = combineLatest_1.CombineLatestOperator;
  var range_1 = $__require("rxjs/internal/observable/range");
  exports.dispatch = range_1.dispatch;
  var SubscribeOnObservable_1 = $__require("rxjs/internal/observable/SubscribeOnObservable");
  exports.SubscribeOnObservable = SubscribeOnObservable_1.SubscribeOnObservable;
  var timestamp_1 = $__require("rxjs/internal/operators/timestamp");
  exports.Timestamp = timestamp_1.Timestamp;
  var timeInterval_1 = $__require("rxjs/internal/operators/timeInterval");
  exports.TimeInterval = timeInterval_1.TimeInterval;
  var groupBy_1 = $__require("rxjs/internal/operators/groupBy");
  exports.GroupedObservable = groupBy_1.GroupedObservable;
  var throttle_1 = $__require("rxjs/internal/operators/throttle");
  exports.defaultThrottleConfig = throttle_1.defaultThrottleConfig;
  var rxSubscriber_1 = $__require("rxjs/internal/symbol/rxSubscriber");
  exports.rxSubscriber = rxSubscriber_1.rxSubscriber;
  var iterator_1 = $__require("rxjs/internal/symbol/iterator");
  exports.iterator = iterator_1.iterator;
  var observable_1 = $__require("rxjs/internal/symbol/observable");
  exports.observable = observable_1.observable;
  var ArgumentOutOfRangeError_1 = $__require("rxjs/internal/util/ArgumentOutOfRangeError");
  exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
  var EmptyError_1 = $__require("rxjs/internal/util/EmptyError");
  exports.EmptyError = EmptyError_1.EmptyError;
  var Immediate_1 = $__require("rxjs/internal/util/Immediate");
  exports.Immediate = Immediate_1.Immediate;
  var ObjectUnsubscribedError_1 = $__require("rxjs/internal/util/ObjectUnsubscribedError");
  exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
  var TimeoutError_1 = $__require("rxjs/internal/util/TimeoutError");
  exports.TimeoutError = TimeoutError_1.TimeoutError;
  var UnsubscriptionError_1 = $__require("rxjs/internal/util/UnsubscriptionError");
  exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
  var applyMixins_1 = $__require("rxjs/internal/util/applyMixins");
  exports.applyMixins = applyMixins_1.applyMixins;
  var errorObject_1 = $__require("rxjs/internal/util/errorObject");
  exports.errorObject = errorObject_1.errorObject;
  var hostReportError_1 = $__require("rxjs/internal/util/hostReportError");
  exports.hostReportError = hostReportError_1.hostReportError;
  var identity_1 = $__require("rxjs/internal/util/identity");
  exports.identity = identity_1.identity;
  var isArray_1 = $__require("rxjs/internal/util/isArray");
  exports.isArray = isArray_1.isArray;
  var isArrayLike_1 = $__require("rxjs/internal/util/isArrayLike");
  exports.isArrayLike = isArrayLike_1.isArrayLike;
  var isDate_1 = $__require("rxjs/internal/util/isDate");
  exports.isDate = isDate_1.isDate;
  var isFunction_1 = $__require("rxjs/internal/util/isFunction");
  exports.isFunction = isFunction_1.isFunction;
  var isIterable_1 = $__require("rxjs/internal/util/isIterable");
  exports.isIterable = isIterable_1.isIterable;
  var isNumeric_1 = $__require("rxjs/internal/util/isNumeric");
  exports.isNumeric = isNumeric_1.isNumeric;
  var isObject_1 = $__require("rxjs/internal/util/isObject");
  exports.isObject = isObject_1.isObject;
  var isInteropObservable_1 = $__require("rxjs/internal/util/isInteropObservable");
  exports.isObservable = isInteropObservable_1.isInteropObservable;
  var isPromise_1 = $__require("rxjs/internal/util/isPromise");
  exports.isPromise = isPromise_1.isPromise;
  var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
  exports.isScheduler = isScheduler_1.isScheduler;
  var noop_1 = $__require("rxjs/internal/util/noop");
  exports.noop = noop_1.noop;
  var not_1 = $__require("rxjs/internal/util/not");
  exports.not = not_1.not;
  var pipe_1 = $__require("rxjs/internal/util/pipe");
  exports.pipe = pipe_1.pipe;
  var root_1 = $__require("rxjs/internal/util/root");
  exports.root = root_1.root;
  var subscribeTo_1 = $__require("rxjs/internal/util/subscribeTo");
  exports.subscribeTo = subscribeTo_1.subscribeTo;
  var subscribeToArray_1 = $__require("rxjs/internal/util/subscribeToArray");
  exports.subscribeToArray = subscribeToArray_1.subscribeToArray;
  var subscribeToIterable_1 = $__require("rxjs/internal/util/subscribeToIterable");
  exports.subscribeToIterable = subscribeToIterable_1.subscribeToIterable;
  var subscribeToObservable_1 = $__require("rxjs/internal/util/subscribeToObservable");
  exports.subscribeToObservable = subscribeToObservable_1.subscribeToObservable;
  var subscribeToPromise_1 = $__require("rxjs/internal/util/subscribeToPromise");
  exports.subscribeToPromise = subscribeToPromise_1.subscribeToPromise;
  var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
  exports.subscribeToResult = subscribeToResult_1.subscribeToResult;
  var toSubscriber_1 = $__require("rxjs/internal/util/toSubscriber");
  exports.toSubscriber = toSubscriber_1.toSubscriber;
  var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
  exports.tryCatch = tryCatch_1.tryCatch;

});
System.registerDynamic("rxjs-compat/operator/windowTime", ["rxjs", "rxjs/internal-compatibility", "rxjs/operators"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var rxjs_1 = $__require("rxjs");
    var internal_compatibility_1 = $__require("rxjs/internal-compatibility");
    var operators_1 = $__require("rxjs/operators");
    function windowTime(windowTimeSpan) {
        var scheduler = rxjs_1.asyncScheduler;
        var windowCreationInterval = null;
        var maxWindowSize = Number.POSITIVE_INFINITY;
        if (internal_compatibility_1.isScheduler(arguments[3])) {
            scheduler = arguments[3];
        }
        if (internal_compatibility_1.isScheduler(arguments[2])) {
            scheduler = arguments[2];
        } else if (internal_compatibility_1.isNumeric(arguments[2])) {
            maxWindowSize = arguments[2];
        }
        if (internal_compatibility_1.isScheduler(arguments[1])) {
            scheduler = arguments[1];
        } else if (internal_compatibility_1.isNumeric(arguments[1])) {
            windowCreationInterval = arguments[1];
        }
        return operators_1.windowTime(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler)(this);
    }
    exports.windowTime = windowTime;

});
System.registerDynamic("rxjs/add/operator/windowTime", ["rxjs", "rxjs-compat/operator/windowTime"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var windowTime_1 = $__require("rxjs-compat/operator/windowTime");
  rxjs_1.Observable.prototype.windowTime = windowTime_1.windowTime;

});
System.registerDynamic("rxjs-compat/operator/windowToggle", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Branch out the source Observable values as a nested Observable starting from
   * an emission from `openings` and ending when the output of `closingSelector`
   * emits.
   *
   * <span class="informal">It's like {@link bufferToggle}, but emits a nested
   * Observable instead of an array.</span>
   *
   * <img src="./img/windowToggle.png" width="100%">
   *
   * Returns an Observable that emits windows of items it collects from the source
   * Observable. The output Observable emits windows that contain those items
   * emitted by the source Observable between the time when the `openings`
   * Observable emits an item and when the Observable returned by
   * `closingSelector` emits an item.
   *
   * @example <caption>Every other second, emit the click events from the next 500ms</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var openings = Rx.Observable.interval(1000);
   * var result = clicks.windowToggle(openings, i =>
   *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
   * ).mergeAll();
   * result.subscribe(x => console.log(x));
   *
   * @see {@link window}
   * @see {@link windowCount}
   * @see {@link windowTime}
   * @see {@link windowWhen}
   * @see {@link bufferToggle}
   *
   * @param {Observable<O>} openings An observable of notifications to start new
   * windows.
   * @param {function(value: O): Observable} closingSelector A function that takes
   * the value emitted by the `openings` observable and returns an Observable,
   * which, when it emits (either `next` or `complete`), signals that the
   * associated window should complete.
   * @return {Observable<Observable<T>>} An observable of windows, which in turn
   * are Observables.
   * @method windowToggle
   * @owner Observable
   */
  function windowToggle(openings, closingSelector) {
    return operators_1.windowToggle(openings, closingSelector)(this);
  }
  exports.windowToggle = windowToggle;

});
System.registerDynamic("rxjs/add/operator/windowToggle", ["rxjs", "rxjs-compat/operator/windowToggle"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var windowToggle_1 = $__require("rxjs-compat/operator/windowToggle");
  rxjs_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;

});
System.registerDynamic("rxjs-compat/operator/windowWhen", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * Branch out the source Observable values as a nested Observable using a
   * factory function of closing Observables to determine when to start a new
   * window.
   *
   * <span class="informal">It's like {@link bufferWhen}, but emits a nested
   * Observable instead of an array.</span>
   *
   * <img src="./img/windowWhen.png" width="100%">
   *
   * Returns an Observable that emits windows of items it collects from the source
   * Observable. The output Observable emits connected, non-overlapping windows.
   * It emits the current window and opens a new one whenever the Observable
   * produced by the specified `closingSelector` function emits an item. The first
   * window is opened immediately when subscribing to the output Observable.
   *
   * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks
   *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
   *   .map(win => win.take(2)) // each window has at most 2 emissions
   *   .mergeAll(); // flatten the Observable-of-Observables
   * result.subscribe(x => console.log(x));
   *
   * @see {@link window}
   * @see {@link windowCount}
   * @see {@link windowTime}
   * @see {@link windowToggle}
   * @see {@link bufferWhen}
   *
   * @param {function(): Observable} closingSelector A function that takes no
   * arguments and returns an Observable that signals (on either `next` or
   * `complete`) when to close the previous window and start a new one.
   * @return {Observable<Observable<T>>} An observable of windows, which in turn
   * are Observables.
   * @method windowWhen
   * @owner Observable
   */
  function windowWhen(closingSelector) {
    return operators_1.windowWhen(closingSelector)(this);
  }
  exports.windowWhen = windowWhen;

});
System.registerDynamic("rxjs/add/operator/windowWhen", ["rxjs", "rxjs-compat/operator/windowWhen"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var windowWhen_1 = $__require("rxjs-compat/operator/windowWhen");
  rxjs_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;

});
System.registerDynamic("rxjs-compat/operator/withLatestFrom", ["rxjs/operators"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var operators_1 = $__require("rxjs/operators");
    /* tslint:enable:max-line-length */
    /**
     * Combines the source Observable with other Observables to create an Observable
     * whose values are calculated from the latest values of each, only when the
     * source emits.
     *
     * <span class="informal">Whenever the source Observable emits a value, it
     * computes a formula using that value plus the latest values from other input
     * Observables, then emits the output of that formula.</span>
     *
     * <img src="./img/withLatestFrom.png" width="100%">
     *
     * `withLatestFrom` combines each value from the source Observable (the
     * instance) with the latest values from the other input Observables only when
     * the source emits a value, optionally using a `project` function to determine
     * the value to be emitted on the output Observable. All input Observables must
     * emit at least one value before the output Observable will emit a value.
     *
     * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var timer = Rx.Observable.interval(1000);
     * var result = clicks.withLatestFrom(timer);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link combineLatest}
     *
     * @param {ObservableInput} other An input Observable to combine with the source
     * Observable. More than one input Observables may be given as argument.
     * @param {Function} [project] Projection function for combining values
     * together. Receives all values in order of the Observables passed, where the
     * first parameter is a value from the source Observable. (e.g.
     * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
     * passed, arrays will be emitted on the output Observable.
     * @return {Observable} An Observable of projected values from the most recent
     * values from each input Observable, or an array of the most recent values from
     * each input Observable.
     * @method withLatestFrom
     * @owner Observable
     */
    function withLatestFrom() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return operators_1.withLatestFrom.apply(void 0, args)(this);
    }
    exports.withLatestFrom = withLatestFrom;

});
System.registerDynamic("rxjs/add/operator/withLatestFrom", ["rxjs", "rxjs-compat/operator/withLatestFrom"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var withLatestFrom_1 = $__require("rxjs-compat/operator/withLatestFrom");
  rxjs_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;

});
System.registerDynamic("rxjs-compat/operator/zip", ["rxjs"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var rxjs_1 = $__require("rxjs");
    /* tslint:enable:max-line-length */
    /**
     * @param observables
     * @return {Observable<R>}
     * @method zip
     * @owner Observable
     */
    function zipProto() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return this.lift.call(rxjs_1.zip.apply(void 0, [this].concat(observables)));
    }
    exports.zipProto = zipProto;

});
System.registerDynamic("rxjs/add/operator/zip", ["rxjs", "rxjs-compat/operator/zip"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var zip_1 = $__require("rxjs-compat/operator/zip");
  rxjs_1.Observable.prototype.zip = zip_1.zipProto;

});
System.registerDynamic("rxjs/internal/scheduler/AnimationFrameAction", ["rxjs/internal/scheduler/AsyncAction"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var AsyncAction_1 = $__require("rxjs/internal/scheduler/AsyncAction");
    var AnimationFrameAction = function (_super) {
        __extends(AnimationFrameAction, _super);
        function AnimationFrameAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            return _this;
        }
        AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay !== null && delay > 0) {
                return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
            }
            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
                return scheduler.flush(null);
            }));
        };
        AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
                return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
            }
            if (scheduler.actions.length === 0) {
                cancelAnimationFrame(id);
                scheduler.scheduled = undefined;
            }
            return undefined;
        };
        return AnimationFrameAction;
    }(AsyncAction_1.AsyncAction);
    exports.AnimationFrameAction = AnimationFrameAction;

});
System.registerDynamic("rxjs/internal/scheduler/AnimationFrameScheduler", ["rxjs/internal/scheduler/AsyncScheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var AsyncScheduler_1 = $__require("rxjs/internal/scheduler/AsyncScheduler");
    var AnimationFrameScheduler = function (_super) {
        __extends(AnimationFrameScheduler, _super);
        function AnimationFrameScheduler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimationFrameScheduler.prototype.flush = function (action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (++index < count && (action = actions.shift()));
            this.active = false;
            if (error) {
                while (++index < count && (action = actions.shift())) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AnimationFrameScheduler;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.AnimationFrameScheduler = AnimationFrameScheduler;

});
System.registerDynamic("rxjs/internal/scheduler/animationFrame", ["rxjs/internal/scheduler/AnimationFrameAction", "rxjs/internal/scheduler/AnimationFrameScheduler"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var AnimationFrameAction_1 = $__require("rxjs/internal/scheduler/AnimationFrameAction");
  var AnimationFrameScheduler_1 = $__require("rxjs/internal/scheduler/AnimationFrameScheduler");
  exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);

});
System.registerDynamic("rxjs/internal/util/isObservable", ["rxjs/internal/Observable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    function isObservable(obj) {
        return !!obj && (obj instanceof Observable_1.Observable || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
    }
    exports.isObservable = isObservable;

});
System.registerDynamic("rxjs/internal/observable/bindCallback", ["rxjs/internal/Observable", "rxjs/internal/AsyncSubject", "rxjs/internal/operators/map", "rxjs/internal/util/isArray", "rxjs/internal/util/isScheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var AsyncSubject_1 = $__require("rxjs/internal/AsyncSubject");
    var map_1 = $__require("rxjs/internal/operators/map");
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
    function bindCallback(callbackFunc, resultSelector, scheduler) {
        if (resultSelector) {
            if (isScheduler_1.isScheduler(resultSelector)) {
                scheduler = resultSelector;
            } else {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) {
                        return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
                    }));
                };
            }
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var context = this;
            var subject;
            var params = {
                context: context,
                subject: subject,
                callbackFunc: callbackFunc,
                scheduler: scheduler
            };
            return new Observable_1.Observable(function (subscriber) {
                if (!scheduler) {
                    if (!subject) {
                        subject = new AsyncSubject_1.AsyncSubject();
                        var handler = function () {
                            var innerArgs = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                innerArgs[_i] = arguments[_i];
                            }
                            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                            subject.complete();
                        };
                        try {
                            callbackFunc.apply(context, args.concat([handler]));
                        } catch (err) {
                            subject.error(err);
                        }
                    }
                    return subject.subscribe(subscriber);
                } else {
                    var state = {
                        args: args, subscriber: subscriber, params: params
                    };
                    return scheduler.schedule(dispatch, 0, state);
                }
            });
        };
    }
    exports.bindCallback = bindCallback;
    function dispatch(state) {
        var _this = this;
        var self = this;
        var args = state.args,
            subscriber = state.subscriber,
            params = state.params;
        var callbackFunc = params.callbackFunc,
            context = params.context,
            scheduler = params.scheduler;
        var subject = params.subject;
        if (!subject) {
            subject = params.subject = new AsyncSubject_1.AsyncSubject();
            var handler = function () {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i] = arguments[_i];
                }
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            };
            try {
                callbackFunc.apply(context, args.concat([handler]));
            } catch (err) {
                subject.error(err);
            }
        }
        this.add(subject.subscribe(subscriber));
    }
    function dispatchNext(state) {
        var value = state.value,
            subject = state.subject;
        subject.next(value);
        subject.complete();
    }
    function dispatchError(state) {
        var err = state.err,
            subject = state.subject;
        subject.error(err);
    }

});
System.registerDynamic("rxjs/internal/observable/bindNodeCallback", ["rxjs/internal/Observable", "rxjs/internal/AsyncSubject", "rxjs/internal/operators/map", "rxjs/internal/util/isScheduler", "rxjs/internal/util/isArray"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var AsyncSubject_1 = $__require("rxjs/internal/AsyncSubject");
    var map_1 = $__require("rxjs/internal/operators/map");
    var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
        if (resultSelector) {
            if (isScheduler_1.isScheduler(resultSelector)) {
                scheduler = resultSelector;
            } else {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) {
                        return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
                    }));
                };
            }
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var params = {
                subject: undefined,
                args: args,
                callbackFunc: callbackFunc,
                scheduler: scheduler,
                context: this
            };
            return new Observable_1.Observable(function (subscriber) {
                var context = params.context;
                var subject = params.subject;
                if (!scheduler) {
                    if (!subject) {
                        subject = params.subject = new AsyncSubject_1.AsyncSubject();
                        var handler = function () {
                            var innerArgs = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                innerArgs[_i] = arguments[_i];
                            }
                            var err = innerArgs.shift();
                            if (err) {
                                subject.error(err);
                                return;
                            }
                            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                            subject.complete();
                        };
                        try {
                            callbackFunc.apply(context, args.concat([handler]));
                        } catch (err) {
                            subject.error(err);
                        }
                    }
                    return subject.subscribe(subscriber);
                } else {
                    return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
                }
            });
        };
    }
    exports.bindNodeCallback = bindNodeCallback;
    function dispatch(state) {
        var _this = this;
        var params = state.params,
            subscriber = state.subscriber,
            context = state.context;
        var callbackFunc = params.callbackFunc,
            args = params.args,
            scheduler = params.scheduler;
        var subject = params.subject;
        if (!subject) {
            subject = params.subject = new AsyncSubject_1.AsyncSubject();
            var handler = function () {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i] = arguments[_i];
                }
                var err = innerArgs.shift();
                if (err) {
                    _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
                } else {
                    var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                    _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
                }
            };
            try {
                callbackFunc.apply(context, args.concat([handler]));
            } catch (err) {
                this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
        }
        this.add(subject.subscribe(subscriber));
    }
    function dispatchNext(arg) {
        var value = arg.value,
            subject = arg.subject;
        subject.next(value);
        subject.complete();
    }
    function dispatchError(arg) {
        var err = arg.err,
            subject = arg.subject;
        subject.error(err);
    }

});
System.registerDynamic("rxjs/internal/observable/forkJoin", ["rxjs/internal/Observable", "rxjs/internal/util/isArray", "rxjs/internal/observable/empty", "rxjs/internal/util/subscribeToResult", "rxjs/internal/OuterSubscriber", "rxjs/internal/operators/map"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    var empty_1 = $__require("rxjs/internal/observable/empty");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var map_1 = $__require("rxjs/internal/operators/map");
    function forkJoin() {
        var sources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sources[_i] = arguments[_i];
        }
        var resultSelector;
        if (typeof sources[sources.length - 1] === 'function') {
            resultSelector = sources.pop();
        }
        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
            sources = sources[0];
        }
        if (sources.length === 0) {
            return empty_1.EMPTY;
        }
        if (resultSelector) {
            return forkJoin(sources).pipe(map_1.map(function (args) {
                return resultSelector.apply(void 0, args);
            }));
        }
        return new Observable_1.Observable(function (subscriber) {
            return new ForkJoinSubscriber(subscriber, sources);
        });
    }
    exports.forkJoin = forkJoin;
    var ForkJoinSubscriber = function (_super) {
        __extends(ForkJoinSubscriber, _super);
        function ForkJoinSubscriber(destination, sources) {
            var _this = _super.call(this, destination) || this;
            _this.sources = sources;
            _this.completed = 0;
            _this.haveValues = 0;
            var len = sources.length;
            _this.values = new Array(len);
            for (var i = 0; i < len; i++) {
                var source = sources[i];
                var innerSubscription = subscribeToResult_1.subscribeToResult(_this, source, null, i);
                if (innerSubscription) {
                    _this.add(innerSubscription);
                }
            }
            return _this;
        }
        ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.values[outerIndex] = innerValue;
            if (!innerSub._hasValue) {
                innerSub._hasValue = true;
                this.haveValues++;
            }
        };
        ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
            var _a = this,
                destination = _a.destination,
                haveValues = _a.haveValues,
                values = _a.values;
            var len = values.length;
            if (!innerSub._hasValue) {
                destination.complete();
                return;
            }
            this.completed++;
            if (this.completed !== len) {
                return;
            }
            if (haveValues === len) {
                destination.next(values);
            }
            destination.complete();
        };
        return ForkJoinSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/observable/fromEvent", ["rxjs/internal/Observable", "rxjs/internal/util/isArray", "rxjs/internal/util/isFunction", "rxjs/internal/operators/map"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    var isFunction_1 = $__require("rxjs/internal/util/isFunction");
    var map_1 = $__require("rxjs/internal/operators/map");
    var toString = Object.prototype.toString;
    function fromEvent(target, eventName, options, resultSelector) {
        if (isFunction_1.isFunction(options)) {
            resultSelector = options;
            options = undefined;
        }
        if (resultSelector) {
            return fromEvent(target, eventName, options).pipe(map_1.map(function (args) {
                return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
            }));
        }
        return new Observable_1.Observable(function (subscriber) {
            function handler(e) {
                if (arguments.length > 1) {
                    subscriber.next(Array.prototype.slice.call(arguments));
                } else {
                    subscriber.next(e);
                }
            }
            setupSubscription(target, eventName, handler, subscriber, options);
        });
    }
    exports.fromEvent = fromEvent;
    function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;
        if (isEventTarget(sourceObj)) {
            var source_1 = sourceObj;
            sourceObj.addEventListener(eventName, handler, options);
            unsubscribe = function () {
                return source_1.removeEventListener(eventName, handler, options);
            };
        } else if (isJQueryStyleEventEmitter(sourceObj)) {
            var source_2 = sourceObj;
            sourceObj.on(eventName, handler);
            unsubscribe = function () {
                return source_2.off(eventName, handler);
            };
        } else if (isNodeStyleEventEmitter(sourceObj)) {
            var source_3 = sourceObj;
            sourceObj.addListener(eventName, handler);
            unsubscribe = function () {
                return source_3.removeListener(eventName, handler);
            };
        } else if (sourceObj && sourceObj.length) {
            for (var i = 0, len = sourceObj.length; i < len; i++) {
                setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
            }
        } else {
            throw new TypeError('Invalid event target');
        }
        subscriber.add(unsubscribe);
    }
    function isNodeStyleEventEmitter(sourceObj) {
        return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
    }
    function isJQueryStyleEventEmitter(sourceObj) {
        return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
    }
    function isEventTarget(sourceObj) {
        return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
    }

});
System.registerDynamic("rxjs/internal/observable/fromEventPattern", ["rxjs/internal/Observable", "rxjs/internal/util/isArray", "rxjs/internal/util/isFunction", "rxjs/internal/operators/map"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    var isFunction_1 = $__require("rxjs/internal/util/isFunction");
    var map_1 = $__require("rxjs/internal/operators/map");
    function fromEventPattern(addHandler, removeHandler, resultSelector) {
        if (resultSelector) {
            return fromEventPattern(addHandler, removeHandler).pipe(map_1.map(function (args) {
                return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
            }));
        }
        return new Observable_1.Observable(function (subscriber) {
            var handler = function () {
                var e = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    e[_i] = arguments[_i];
                }
                return subscriber.next(e.length === 1 ? e[0] : e);
            };
            var retValue;
            try {
                retValue = addHandler(handler);
            } catch (err) {
                subscriber.error(err);
                return undefined;
            }
            if (!isFunction_1.isFunction(removeHandler)) {
                return undefined;
            }
            return function () {
                return removeHandler(handler, retValue);
            };
        });
    }
    exports.fromEventPattern = fromEventPattern;

});
System.registerDynamic("rxjs/internal/observable/generate", ["rxjs/internal/Observable", "rxjs/internal/util/identity", "rxjs/internal/util/isScheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var identity_1 = $__require("rxjs/internal/util/identity");
    var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
    function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
        var resultSelector;
        var initialState;
        if (arguments.length == 1) {
            var options = initialStateOrOptions;
            initialState = options.initialState;
            condition = options.condition;
            iterate = options.iterate;
            resultSelector = options.resultSelector || identity_1.identity;
            scheduler = options.scheduler;
        } else if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
            initialState = initialStateOrOptions;
            resultSelector = identity_1.identity;
            scheduler = resultSelectorOrObservable;
        } else {
            initialState = initialStateOrOptions;
            resultSelector = resultSelectorOrObservable;
        }
        return new Observable_1.Observable(function (subscriber) {
            var state = initialState;
            if (scheduler) {
                return scheduler.schedule(dispatch, 0, {
                    subscriber: subscriber,
                    iterate: iterate,
                    condition: condition,
                    resultSelector: resultSelector,
                    state: state
                });
            }
            do {
                if (condition) {
                    var conditionResult = void 0;
                    try {
                        conditionResult = condition(state);
                    } catch (err) {
                        subscriber.error(err);
                        return undefined;
                    }
                    if (!conditionResult) {
                        subscriber.complete();
                        break;
                    }
                }
                var value = void 0;
                try {
                    value = resultSelector(state);
                } catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                subscriber.next(value);
                if (subscriber.closed) {
                    break;
                }
                try {
                    state = iterate(state);
                } catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
            } while (true);
            return undefined;
        });
    }
    exports.generate = generate;
    function dispatch(state) {
        var subscriber = state.subscriber,
            condition = state.condition;
        if (subscriber.closed) {
            return undefined;
        }
        if (state.needIterate) {
            try {
                state.state = state.iterate(state.state);
            } catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } else {
            state.needIterate = true;
        }
        if (condition) {
            var conditionResult = void 0;
            try {
                conditionResult = condition(state.state);
            } catch (err) {
                subscriber.error(err);
                return undefined;
            }
            if (!conditionResult) {
                subscriber.complete();
                return undefined;
            }
            if (subscriber.closed) {
                return undefined;
            }
        }
        var value;
        try {
            value = state.resultSelector(state.state);
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return undefined;
        }
        return this.schedule(state);
    }

});
System.registerDynamic("rxjs/internal/observable/iif", ["rxjs/internal/observable/defer", "rxjs/internal/observable/empty"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var defer_1 = $__require("rxjs/internal/observable/defer");
    var empty_1 = $__require("rxjs/internal/observable/empty");
    function iif(condition, trueResult, falseResult) {
        if (trueResult === void 0) {
            trueResult = empty_1.EMPTY;
        }
        if (falseResult === void 0) {
            falseResult = empty_1.EMPTY;
        }
        return defer_1.defer(function () {
            return condition() ? trueResult : falseResult;
        });
    }
    exports.iif = iif;

});
System.registerDynamic("rxjs/internal/observable/interval", ["rxjs/internal/Observable", "rxjs/internal/scheduler/async", "rxjs/internal/util/isNumeric"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var async_1 = $__require("rxjs/internal/scheduler/async");
    var isNumeric_1 = $__require("rxjs/internal/util/isNumeric");
    function interval(period, scheduler) {
        if (period === void 0) {
            period = 0;
        }
        if (scheduler === void 0) {
            scheduler = async_1.async;
        }
        if (!isNumeric_1.isNumeric(period) || period < 0) {
            period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            scheduler = async_1.async;
        }
        return new Observable_1.Observable(function (subscriber) {
            subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
            return subscriber;
        });
    }
    exports.interval = interval;
    function dispatch(state) {
        var subscriber = state.subscriber,
            counter = state.counter,
            period = state.period;
        subscriber.next(counter);
        this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
    }

});
System.registerDynamic("rxjs/internal/observable/never", ["rxjs/internal/Observable", "rxjs/internal/util/noop"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var noop_1 = $__require("rxjs/internal/util/noop");
    exports.NEVER = new Observable_1.Observable(noop_1.noop);
    function never() {
        return exports.NEVER;
    }
    exports.never = never;

});
System.registerDynamic("rxjs/internal/observable/onErrorResumeNext", ["rxjs/internal/Observable", "rxjs/internal/observable/from", "rxjs/internal/util/isArray", "rxjs/internal/observable/empty"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var from_1 = $__require("rxjs/internal/observable/from");
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    var empty_1 = $__require("rxjs/internal/observable/empty");
    function onErrorResumeNext() {
        var sources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sources[_i] = arguments[_i];
        }
        if (sources.length === 0) {
            return empty_1.EMPTY;
        }
        var first = sources[0],
            remainder = sources.slice(1);
        if (sources.length === 1 && isArray_1.isArray(first)) {
            return onErrorResumeNext.apply(void 0, first);
        }
        return new Observable_1.Observable(function (subscriber) {
            var subNext = function () {
                return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
            };
            return from_1.from(first).subscribe({
                next: function (value) {
                    subscriber.next(value);
                },
                error: subNext,
                complete: subNext
            });
        });
    }
    exports.onErrorResumeNext = onErrorResumeNext;

});
System.registerDynamic("rxjs/internal/observable/pairs", ["rxjs/internal/Observable", "rxjs/internal/Subscription"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    function pairs(obj, scheduler) {
        if (!scheduler) {
            return new Observable_1.Observable(function (subscriber) {
                var keys = Object.keys(obj);
                for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                    var key = keys[i];
                    if (obj.hasOwnProperty(key)) {
                        subscriber.next([key, obj[key]]);
                    }
                }
                subscriber.complete();
            });
        } else {
            return new Observable_1.Observable(function (subscriber) {
                var keys = Object.keys(obj);
                var subscription = new Subscription_1.Subscription();
                subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
                return subscription;
            });
        }
    }
    exports.pairs = pairs;
    function dispatch(state) {
        var keys = state.keys,
            index = state.index,
            subscriber = state.subscriber,
            subscription = state.subscription,
            obj = state.obj;
        if (!subscriber.closed) {
            if (index < keys.length) {
                var key = keys[index];
                subscriber.next([key, obj[key]]);
                subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
            } else {
                subscriber.complete();
            }
        }
    }
    exports.dispatch = dispatch;

});
System.registerDynamic("rxjs/internal/observable/range", ["rxjs/internal/Observable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    function range(start, count, scheduler) {
        if (start === void 0) {
            start = 0;
        }
        if (count === void 0) {
            count = 0;
        }
        return new Observable_1.Observable(function (subscriber) {
            var index = 0;
            var current = start;
            if (scheduler) {
                return scheduler.schedule(dispatch, 0, {
                    index: index, count: count, start: start, subscriber: subscriber
                });
            } else {
                do {
                    if (index++ >= count) {
                        subscriber.complete();
                        break;
                    }
                    subscriber.next(current++);
                    if (subscriber.closed) {
                        break;
                    }
                } while (true);
            }
            return undefined;
        });
    }
    exports.range = range;
    function dispatch(state) {
        var start = state.start,
            index = state.index,
            count = state.count,
            subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(start);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
    }
    exports.dispatch = dispatch;

});
System.registerDynamic("rxjs/internal/observable/using", ["rxjs/internal/Observable", "rxjs/internal/observable/from", "rxjs/internal/observable/empty"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var from_1 = $__require("rxjs/internal/observable/from");
    var empty_1 = $__require("rxjs/internal/observable/empty");
    function using(resourceFactory, observableFactory) {
        return new Observable_1.Observable(function (subscriber) {
            var resource;
            try {
                resource = resourceFactory();
            } catch (err) {
                subscriber.error(err);
                return undefined;
            }
            var result;
            try {
                result = observableFactory(resource);
            } catch (err) {
                subscriber.error(err);
                return undefined;
            }
            var source = result ? from_1.from(result) : empty_1.EMPTY;
            var subscription = source.subscribe(subscriber);
            return function () {
                subscription.unsubscribe();
                if (resource) {
                    resource.unsubscribe();
                }
            };
        });
    }
    exports.using = using;

});
System.registerDynamic("rxjs", ["rxjs/internal/Observable", "rxjs/internal/observable/ConnectableObservable", "rxjs/internal/operators/groupBy", "rxjs/internal/symbol/observable", "rxjs/internal/Subject", "rxjs/internal/BehaviorSubject", "rxjs/internal/ReplaySubject", "rxjs/internal/AsyncSubject", "rxjs/internal/scheduler/asap", "rxjs/internal/scheduler/async", "rxjs/internal/scheduler/queue", "rxjs/internal/scheduler/animationFrame", "rxjs/internal/scheduler/VirtualTimeScheduler", "rxjs/internal/Scheduler", "rxjs/internal/Subscription", "rxjs/internal/Subscriber", "rxjs/internal/Notification", "rxjs/internal/util/pipe", "rxjs/internal/util/noop", "rxjs/internal/util/identity", "rxjs/internal/util/isObservable", "rxjs/internal/util/ArgumentOutOfRangeError", "rxjs/internal/util/EmptyError", "rxjs/internal/util/ObjectUnsubscribedError", "rxjs/internal/util/UnsubscriptionError", "rxjs/internal/util/TimeoutError", "rxjs/internal/observable/bindCallback", "rxjs/internal/observable/bindNodeCallback", "rxjs/internal/observable/combineLatest", "rxjs/internal/observable/concat", "rxjs/internal/observable/defer", "rxjs/internal/observable/empty", "rxjs/internal/observable/forkJoin", "rxjs/internal/observable/from", "rxjs/internal/observable/fromEvent", "rxjs/internal/observable/fromEventPattern", "rxjs/internal/observable/generate", "rxjs/internal/observable/iif", "rxjs/internal/observable/interval", "rxjs/internal/observable/merge", "rxjs/internal/observable/never", "rxjs/internal/observable/of", "rxjs/internal/observable/onErrorResumeNext", "rxjs/internal/observable/pairs", "rxjs/internal/observable/race", "rxjs/internal/observable/range", "rxjs/internal/observable/throwError", "rxjs/internal/observable/timer", "rxjs/internal/observable/using", "rxjs/internal/observable/zip", "rxjs/internal/config"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var Observable_1 = $__require("rxjs/internal/Observable");
  exports.Observable = Observable_1.Observable;
  var ConnectableObservable_1 = $__require("rxjs/internal/observable/ConnectableObservable");
  exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
  var groupBy_1 = $__require("rxjs/internal/operators/groupBy");
  exports.GroupedObservable = groupBy_1.GroupedObservable;
  var observable_1 = $__require("rxjs/internal/symbol/observable");
  exports.observable = observable_1.observable;
  var Subject_1 = $__require("rxjs/internal/Subject");
  exports.Subject = Subject_1.Subject;
  var BehaviorSubject_1 = $__require("rxjs/internal/BehaviorSubject");
  exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
  var ReplaySubject_1 = $__require("rxjs/internal/ReplaySubject");
  exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
  var AsyncSubject_1 = $__require("rxjs/internal/AsyncSubject");
  exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
  var asap_1 = $__require("rxjs/internal/scheduler/asap");
  exports.asapScheduler = asap_1.asap;
  var async_1 = $__require("rxjs/internal/scheduler/async");
  exports.asyncScheduler = async_1.async;
  var queue_1 = $__require("rxjs/internal/scheduler/queue");
  exports.queueScheduler = queue_1.queue;
  var animationFrame_1 = $__require("rxjs/internal/scheduler/animationFrame");
  exports.animationFrameScheduler = animationFrame_1.animationFrame;
  var VirtualTimeScheduler_1 = $__require("rxjs/internal/scheduler/VirtualTimeScheduler");
  exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
  exports.VirtualAction = VirtualTimeScheduler_1.VirtualAction;
  var Scheduler_1 = $__require("rxjs/internal/Scheduler");
  exports.Scheduler = Scheduler_1.Scheduler;
  var Subscription_1 = $__require("rxjs/internal/Subscription");
  exports.Subscription = Subscription_1.Subscription;
  var Subscriber_1 = $__require("rxjs/internal/Subscriber");
  exports.Subscriber = Subscriber_1.Subscriber;
  var Notification_1 = $__require("rxjs/internal/Notification");
  exports.Notification = Notification_1.Notification;
  var pipe_1 = $__require("rxjs/internal/util/pipe");
  exports.pipe = pipe_1.pipe;
  var noop_1 = $__require("rxjs/internal/util/noop");
  exports.noop = noop_1.noop;
  var identity_1 = $__require("rxjs/internal/util/identity");
  exports.identity = identity_1.identity;
  var isObservable_1 = $__require("rxjs/internal/util/isObservable");
  exports.isObservable = isObservable_1.isObservable;
  var ArgumentOutOfRangeError_1 = $__require("rxjs/internal/util/ArgumentOutOfRangeError");
  exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
  var EmptyError_1 = $__require("rxjs/internal/util/EmptyError");
  exports.EmptyError = EmptyError_1.EmptyError;
  var ObjectUnsubscribedError_1 = $__require("rxjs/internal/util/ObjectUnsubscribedError");
  exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
  var UnsubscriptionError_1 = $__require("rxjs/internal/util/UnsubscriptionError");
  exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
  var TimeoutError_1 = $__require("rxjs/internal/util/TimeoutError");
  exports.TimeoutError = TimeoutError_1.TimeoutError;
  var bindCallback_1 = $__require("rxjs/internal/observable/bindCallback");
  exports.bindCallback = bindCallback_1.bindCallback;
  var bindNodeCallback_1 = $__require("rxjs/internal/observable/bindNodeCallback");
  exports.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
  var combineLatest_1 = $__require("rxjs/internal/observable/combineLatest");
  exports.combineLatest = combineLatest_1.combineLatest;
  var concat_1 = $__require("rxjs/internal/observable/concat");
  exports.concat = concat_1.concat;
  var defer_1 = $__require("rxjs/internal/observable/defer");
  exports.defer = defer_1.defer;
  var empty_1 = $__require("rxjs/internal/observable/empty");
  exports.empty = empty_1.empty;
  var forkJoin_1 = $__require("rxjs/internal/observable/forkJoin");
  exports.forkJoin = forkJoin_1.forkJoin;
  var from_1 = $__require("rxjs/internal/observable/from");
  exports.from = from_1.from;
  var fromEvent_1 = $__require("rxjs/internal/observable/fromEvent");
  exports.fromEvent = fromEvent_1.fromEvent;
  var fromEventPattern_1 = $__require("rxjs/internal/observable/fromEventPattern");
  exports.fromEventPattern = fromEventPattern_1.fromEventPattern;
  var generate_1 = $__require("rxjs/internal/observable/generate");
  exports.generate = generate_1.generate;
  var iif_1 = $__require("rxjs/internal/observable/iif");
  exports.iif = iif_1.iif;
  var interval_1 = $__require("rxjs/internal/observable/interval");
  exports.interval = interval_1.interval;
  var merge_1 = $__require("rxjs/internal/observable/merge");
  exports.merge = merge_1.merge;
  var never_1 = $__require("rxjs/internal/observable/never");
  exports.never = never_1.never;
  var of_1 = $__require("rxjs/internal/observable/of");
  exports.of = of_1.of;
  var onErrorResumeNext_1 = $__require("rxjs/internal/observable/onErrorResumeNext");
  exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
  var pairs_1 = $__require("rxjs/internal/observable/pairs");
  exports.pairs = pairs_1.pairs;
  var race_1 = $__require("rxjs/internal/observable/race");
  exports.race = race_1.race;
  var range_1 = $__require("rxjs/internal/observable/range");
  exports.range = range_1.range;
  var throwError_1 = $__require("rxjs/internal/observable/throwError");
  exports.throwError = throwError_1.throwError;
  var timer_1 = $__require("rxjs/internal/observable/timer");
  exports.timer = timer_1.timer;
  var using_1 = $__require("rxjs/internal/observable/using");
  exports.using = using_1.using;
  var zip_1 = $__require("rxjs/internal/observable/zip");
  exports.zip = zip_1.zip;
  var empty_2 = $__require("rxjs/internal/observable/empty");
  exports.EMPTY = empty_2.EMPTY;
  var never_2 = $__require("rxjs/internal/observable/never");
  exports.NEVER = never_2.NEVER;
  var config_1 = $__require("rxjs/internal/config");
  exports.config = config_1.config;

});
System.registerDynamic("rxjs-compat/operator/zipAll", ["rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var operators_1 = $__require("rxjs/operators");
  /**
   * @param project
   * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
   * @method zipAll
   * @owner Observable
   */
  function zipAll(project) {
    return operators_1.zipAll(project)(this);
  }
  exports.zipAll = zipAll;

});
System.registerDynamic("rxjs/add/operator/zipAll", ["rxjs", "rxjs-compat/operator/zipAll"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var rxjs_1 = $__require("rxjs");
  var zipAll_1 = $__require("rxjs-compat/operator/zipAll");
  rxjs_1.Observable.prototype.zipAll = zipAll_1.zipAll;

});
System.registerDynamic("rxjs/internal/testing/ColdObservable", ["rxjs/internal/Observable", "rxjs/internal/Subscription", "rxjs/internal/testing/SubscriptionLoggable", "rxjs/internal/util/applyMixins"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var SubscriptionLoggable_1 = $__require("rxjs/internal/testing/SubscriptionLoggable");
    var applyMixins_1 = $__require("rxjs/internal/util/applyMixins");
    var ColdObservable = function (_super) {
        __extends(ColdObservable, _super);
        function ColdObservable(messages, scheduler) {
            var _this = _super.call(this, function (subscriber) {
                var observable = this;
                var index = observable.logSubscribedFrame();
                subscriber.add(new Subscription_1.Subscription(function () {
                    observable.logUnsubscribedFrame(index);
                }));
                observable.scheduleMessages(subscriber);
                return subscriber;
            }) || this;
            _this.messages = messages;
            _this.subscriptions = [];
            _this.scheduler = scheduler;
            return _this;
        }
        ColdObservable.prototype.scheduleMessages = function (subscriber) {
            var messagesLength = this.messages.length;
            for (var i = 0; i < messagesLength; i++) {
                var message = this.messages[i];
                subscriber.add(this.scheduler.schedule(function (_a) {
                    var message = _a.message,
                        subscriber = _a.subscriber;
                    message.notification.observe(subscriber);
                }, message.frame, { message: message, subscriber: subscriber }));
            }
        };
        return ColdObservable;
    }(Observable_1.Observable);
    exports.ColdObservable = ColdObservable;
    applyMixins_1.applyMixins(ColdObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);

});
System.registerDynamic("rxjs/internal/testing/SubscriptionLoggable", ["rxjs/internal/testing/SubscriptionLog"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var SubscriptionLog_1 = $__require("rxjs/internal/testing/SubscriptionLog");
    var SubscriptionLoggable = function () {
        function SubscriptionLoggable() {
            this.subscriptions = [];
        }
        SubscriptionLoggable.prototype.logSubscribedFrame = function () {
            this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
            return this.subscriptions.length - 1;
        };
        SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
            var subscriptionLogs = this.subscriptions;
            var oldSubscriptionLog = subscriptionLogs[index];
            subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
        };
        return SubscriptionLoggable;
    }();
    exports.SubscriptionLoggable = SubscriptionLoggable;

});
System.registerDynamic("rxjs/internal/util/applyMixins", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    function applyMixins(derivedCtor, baseCtors) {
        for (var i = 0, len = baseCtors.length; i < len; i++) {
            var baseCtor = baseCtors[i];
            var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
            for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
                var name_1 = propertyKeys[j];
                derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
            }
        }
    }
    exports.applyMixins = applyMixins;

});
System.registerDynamic("rxjs/internal/testing/HotObservable", ["rxjs/internal/Subject", "rxjs/internal/Subscription", "rxjs/internal/testing/SubscriptionLoggable", "rxjs/internal/util/applyMixins"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var SubscriptionLoggable_1 = $__require("rxjs/internal/testing/SubscriptionLoggable");
    var applyMixins_1 = $__require("rxjs/internal/util/applyMixins");
    var HotObservable = function (_super) {
        __extends(HotObservable, _super);
        function HotObservable(messages, scheduler) {
            var _this = _super.call(this) || this;
            _this.messages = messages;
            _this.subscriptions = [];
            _this.scheduler = scheduler;
            return _this;
        }
        HotObservable.prototype._subscribe = function (subscriber) {
            var subject = this;
            var index = subject.logSubscribedFrame();
            subscriber.add(new Subscription_1.Subscription(function () {
                subject.logUnsubscribedFrame(index);
            }));
            return _super.prototype._subscribe.call(this, subscriber);
        };
        HotObservable.prototype.setup = function () {
            var subject = this;
            var messagesLength = subject.messages.length;
            for (var i = 0; i < messagesLength; i++) {
                (function () {
                    var message = subject.messages[i];
                    subject.scheduler.schedule(function () {
                        message.notification.observe(subject);
                    }, message.frame);
                })();
            }
        };
        return HotObservable;
    }(Subject_1.Subject);
    exports.HotObservable = HotObservable;
    applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);

});
System.registerDynamic("rxjs/internal/testing/SubscriptionLog", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var SubscriptionLog = function () {
        function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
            if (unsubscribedFrame === void 0) {
                unsubscribedFrame = Number.POSITIVE_INFINITY;
            }
            this.subscribedFrame = subscribedFrame;
            this.unsubscribedFrame = unsubscribedFrame;
        }
        return SubscriptionLog;
    }();
    exports.SubscriptionLog = SubscriptionLog;

});
System.registerDynamic("rxjs/internal/scheduler/VirtualTimeScheduler", ["rxjs/internal/scheduler/AsyncAction", "rxjs/internal/scheduler/AsyncScheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var AsyncAction_1 = $__require("rxjs/internal/scheduler/AsyncAction");
    var AsyncScheduler_1 = $__require("rxjs/internal/scheduler/AsyncScheduler");
    var VirtualTimeScheduler = function (_super) {
        __extends(VirtualTimeScheduler, _super);
        function VirtualTimeScheduler(SchedulerAction, maxFrames) {
            if (SchedulerAction === void 0) {
                SchedulerAction = VirtualAction;
            }
            if (maxFrames === void 0) {
                maxFrames = Number.POSITIVE_INFINITY;
            }
            var _this = _super.call(this, SchedulerAction, function () {
                return _this.frame;
            }) || this;
            _this.maxFrames = maxFrames;
            _this.frame = 0;
            _this.index = -1;
            return _this;
        }
        VirtualTimeScheduler.prototype.flush = function () {
            var _a = this,
                actions = _a.actions,
                maxFrames = _a.maxFrames;
            var error, action;
            while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            }
            if (error) {
                while (action = actions.shift()) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        VirtualTimeScheduler.frameTimeFactor = 10;
        return VirtualTimeScheduler;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.VirtualTimeScheduler = VirtualTimeScheduler;
    var VirtualAction = function (_super) {
        __extends(VirtualAction, _super);
        function VirtualAction(scheduler, work, index) {
            if (index === void 0) {
                index = scheduler.index += 1;
            }
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            _this.index = index;
            _this.active = true;
            _this.index = scheduler.index = index;
            return _this;
        }
        VirtualAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (!this.id) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.active = false;
            var action = new VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        };
        VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            this.delay = scheduler.frame + delay;
            var actions = scheduler.actions;
            actions.push(this);
            actions.sort(VirtualAction.sortActions);
            return true;
        };
        VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            return undefined;
        };
        VirtualAction.prototype._execute = function (state, delay) {
            if (this.active === true) {
                return _super.prototype._execute.call(this, state, delay);
            }
        };
        VirtualAction.sortActions = function (a, b) {
            if (a.delay === b.delay) {
                if (a.index === b.index) {
                    return 0;
                } else if (a.index > b.index) {
                    return 1;
                } else {
                    return -1;
                }
            } else if (a.delay > b.delay) {
                return 1;
            } else {
                return -1;
            }
        };
        return VirtualAction;
    }(AsyncAction_1.AsyncAction);
    exports.VirtualAction = VirtualAction;

});
System.registerDynamic("rxjs/internal/testing/TestScheduler", ["rxjs/internal/Observable", "rxjs/internal/Notification", "rxjs/internal/testing/ColdObservable", "rxjs/internal/testing/HotObservable", "rxjs/internal/testing/SubscriptionLog", "rxjs/internal/scheduler/VirtualTimeScheduler", "rxjs/internal/scheduler/AsyncScheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var Notification_1 = $__require("rxjs/internal/Notification");
    var ColdObservable_1 = $__require("rxjs/internal/testing/ColdObservable");
    var HotObservable_1 = $__require("rxjs/internal/testing/HotObservable");
    var SubscriptionLog_1 = $__require("rxjs/internal/testing/SubscriptionLog");
    var VirtualTimeScheduler_1 = $__require("rxjs/internal/scheduler/VirtualTimeScheduler");
    var AsyncScheduler_1 = $__require("rxjs/internal/scheduler/AsyncScheduler");
    var defaultMaxFrame = 750;
    var TestScheduler = function (_super) {
        __extends(TestScheduler, _super);
        function TestScheduler(assertDeepEqual) {
            var _this = _super.call(this, VirtualTimeScheduler_1.VirtualAction, defaultMaxFrame) || this;
            _this.assertDeepEqual = assertDeepEqual;
            _this.hotObservables = [];
            _this.coldObservables = [];
            _this.flushTests = [];
            _this.runMode = false;
            return _this;
        }
        TestScheduler.prototype.createTime = function (marbles) {
            var indexOf = marbles.indexOf('|');
            if (indexOf === -1) {
                throw new Error('marble diagram for time should have a completion marker "|"');
            }
            return indexOf * TestScheduler.frameTimeFactor;
        };
        TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
            if (marbles.indexOf('^') !== -1) {
                throw new Error('cold observable cannot have subscription offset "^"');
            }
            if (marbles.indexOf('!') !== -1) {
                throw new Error('cold observable cannot have unsubscription marker "!"');
            }
            var messages = TestScheduler.parseMarbles(marbles, values, error, undefined, this.runMode);
            var cold = new ColdObservable_1.ColdObservable(messages, this);
            this.coldObservables.push(cold);
            return cold;
        };
        TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
            if (marbles.indexOf('!') !== -1) {
                throw new Error('hot observable cannot have unsubscription marker "!"');
            }
            var messages = TestScheduler.parseMarbles(marbles, values, error, undefined, this.runMode);
            var subject = new HotObservable_1.HotObservable(messages, this);
            this.hotObservables.push(subject);
            return subject;
        };
        TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
            var _this = this;
            var messages = [];
            observable.subscribe(function (value) {
                messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createNext(value) });
            }, function (err) {
                messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createError(err) });
            }, function () {
                messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createComplete() });
            });
            return messages;
        };
        TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
            var _this = this;
            if (unsubscriptionMarbles === void 0) {
                unsubscriptionMarbles = null;
            }
            var actual = [];
            var flushTest = { actual: actual, ready: false };
            var unsubscriptionFrame = TestScheduler.parseMarblesAsSubscriptions(unsubscriptionMarbles, this.runMode).unsubscribedFrame;
            var subscription;
            this.schedule(function () {
                subscription = observable.subscribe(function (x) {
                    var value = x;
                    if (x instanceof Observable_1.Observable) {
                        value = _this.materializeInnerObservable(value, _this.frame);
                    }
                    actual.push({ frame: _this.frame, notification: Notification_1.Notification.createNext(value) });
                }, function (err) {
                    actual.push({ frame: _this.frame, notification: Notification_1.Notification.createError(err) });
                }, function () {
                    actual.push({ frame: _this.frame, notification: Notification_1.Notification.createComplete() });
                });
            }, 0);
            if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                this.schedule(function () {
                    return subscription.unsubscribe();
                }, unsubscriptionFrame);
            }
            this.flushTests.push(flushTest);
            var runMode = this.runMode;
            return {
                toBe: function (marbles, values, errorValue) {
                    flushTest.ready = true;
                    flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true, runMode);
                }
            };
        };
        TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
            var flushTest = { actual: actualSubscriptionLogs, ready: false };
            this.flushTests.push(flushTest);
            var runMode = this.runMode;
            return {
                toBe: function (marbles) {
                    var marblesArray = typeof marbles === 'string' ? [marbles] : marbles;
                    flushTest.ready = true;
                    flushTest.expected = marblesArray.map(function (marbles) {
                        return TestScheduler.parseMarblesAsSubscriptions(marbles, runMode);
                    });
                }
            };
        };
        TestScheduler.prototype.flush = function () {
            var _this = this;
            var hotObservables = this.hotObservables;
            while (hotObservables.length > 0) {
                hotObservables.shift().setup();
            }
            _super.prototype.flush.call(this);
            this.flushTests = this.flushTests.filter(function (test) {
                if (test.ready) {
                    _this.assertDeepEqual(test.actual, test.expected);
                    return false;
                }
                return true;
            });
        };
        TestScheduler.parseMarblesAsSubscriptions = function (marbles, runMode) {
            var _this = this;
            if (runMode === void 0) {
                runMode = false;
            }
            if (typeof marbles !== 'string') {
                return new SubscriptionLog_1.SubscriptionLog(Number.POSITIVE_INFINITY);
            }
            var len = marbles.length;
            var groupStart = -1;
            var subscriptionFrame = Number.POSITIVE_INFINITY;
            var unsubscriptionFrame = Number.POSITIVE_INFINITY;
            var frame = 0;
            var _loop_1 = function (i) {
                var nextFrame = frame;
                var advanceFrameBy = function (count) {
                    nextFrame += count * _this.frameTimeFactor;
                };
                var c = marbles[i];
                switch (c) {
                    case ' ':
                        if (!runMode) {
                            advanceFrameBy(1);
                        }
                        break;
                    case '-':
                        advanceFrameBy(1);
                        break;
                    case '(':
                        groupStart = frame;
                        advanceFrameBy(1);
                        break;
                    case ')':
                        groupStart = -1;
                        advanceFrameBy(1);
                        break;
                    case '^':
                        if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                            throw new Error('found a second subscription point \'^\' in a ' + 'subscription marble diagram. There can only be one.');
                        }
                        subscriptionFrame = groupStart > -1 ? groupStart : frame;
                        advanceFrameBy(1);
                        break;
                    case '!':
                        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                            throw new Error('found a second subscription point \'^\' in a ' + 'subscription marble diagram. There can only be one.');
                        }
                        unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                        break;
                    default:
                        if (runMode && c.match(/^[0-9]$/)) {
                            if (i === 0 || marbles[i - 1] === ' ') {
                                var buffer = marbles.slice(i);
                                var match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                                if (match) {
                                    i += match[0].length - 1;
                                    var duration = parseFloat(match[1]);
                                    var unit = match[2];
                                    var durationInMs = void 0;
                                    switch (unit) {
                                        case 'ms':
                                            durationInMs = duration;
                                            break;
                                        case 's':
                                            durationInMs = duration * 1000;
                                            break;
                                        case 'm':
                                            durationInMs = duration * 1000 * 60;
                                            break;
                                        default:
                                            break;
                                    }
                                    advanceFrameBy(durationInMs / this_1.frameTimeFactor);
                                    break;
                                }
                            }
                        }
                        throw new Error('there can only be \'^\' and \'!\' markers in a ' + 'subscription marble diagram. Found instead \'' + c + '\'.');
                }
                frame = nextFrame;
                out_i_1 = i;
            };
            var this_1 = this,
                out_i_1;
            for (var i = 0; i < len; i++) {
                _loop_1(i);
                i = out_i_1;
            }
            if (unsubscriptionFrame < 0) {
                return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame);
            } else {
                return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
            }
        };
        TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables, runMode) {
            var _this = this;
            if (materializeInnerObservables === void 0) {
                materializeInnerObservables = false;
            }
            if (runMode === void 0) {
                runMode = false;
            }
            if (marbles.indexOf('!') !== -1) {
                throw new Error('conventional marble diagrams cannot have the ' + 'unsubscription marker "!"');
            }
            var len = marbles.length;
            var testMessages = [];
            var subIndex = runMode ? marbles.replace(/^[ ]+/, '').indexOf('^') : marbles.indexOf('^');
            var frame = subIndex === -1 ? 0 : subIndex * -this.frameTimeFactor;
            var getValue = typeof values !== 'object' ? function (x) {
                return x;
            } : function (x) {
                if (materializeInnerObservables && values[x] instanceof ColdObservable_1.ColdObservable) {
                    return values[x].messages;
                }
                return values[x];
            };
            var groupStart = -1;
            var _loop_2 = function (i) {
                var nextFrame = frame;
                var advanceFrameBy = function (count) {
                    nextFrame += count * _this.frameTimeFactor;
                };
                var notification = void 0;
                var c = marbles[i];
                switch (c) {
                    case ' ':
                        if (!runMode) {
                            advanceFrameBy(1);
                        }
                        break;
                    case '-':
                        advanceFrameBy(1);
                        break;
                    case '(':
                        groupStart = frame;
                        advanceFrameBy(1);
                        break;
                    case ')':
                        groupStart = -1;
                        advanceFrameBy(1);
                        break;
                    case '|':
                        notification = Notification_1.Notification.createComplete();
                        advanceFrameBy(1);
                        break;
                    case '^':
                        advanceFrameBy(1);
                        break;
                    case '#':
                        notification = Notification_1.Notification.createError(errorValue || 'error');
                        advanceFrameBy(1);
                        break;
                    default:
                        if (runMode && c.match(/^[0-9]$/)) {
                            if (i === 0 || marbles[i - 1] === ' ') {
                                var buffer = marbles.slice(i);
                                var match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                                if (match) {
                                    i += match[0].length - 1;
                                    var duration = parseFloat(match[1]);
                                    var unit = match[2];
                                    var durationInMs = void 0;
                                    switch (unit) {
                                        case 'ms':
                                            durationInMs = duration;
                                            break;
                                        case 's':
                                            durationInMs = duration * 1000;
                                            break;
                                        case 'm':
                                            durationInMs = duration * 1000 * 60;
                                            break;
                                        default:
                                            break;
                                    }
                                    advanceFrameBy(durationInMs / this_2.frameTimeFactor);
                                    break;
                                }
                            }
                        }
                        notification = Notification_1.Notification.createNext(getValue(c));
                        advanceFrameBy(1);
                        break;
                }
                if (notification) {
                    testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
                }
                frame = nextFrame;
                out_i_2 = i;
            };
            var this_2 = this,
                out_i_2;
            for (var i = 0; i < len; i++) {
                _loop_2(i);
                i = out_i_2;
            }
            return testMessages;
        };
        TestScheduler.prototype.run = function (callback) {
            var prevFrameTimeFactor = TestScheduler.frameTimeFactor;
            var prevMaxFrames = this.maxFrames;
            TestScheduler.frameTimeFactor = 1;
            this.maxFrames = Number.POSITIVE_INFINITY;
            this.runMode = true;
            AsyncScheduler_1.AsyncScheduler.delegate = this;
            var helpers = {
                cold: this.createColdObservable.bind(this),
                hot: this.createHotObservable.bind(this),
                flush: this.flush.bind(this),
                expectObservable: this.expectObservable.bind(this),
                expectSubscriptions: this.expectSubscriptions.bind(this)
            };
            try {
                var ret = callback(helpers);
                this.flush();
                return ret;
            } finally {
                TestScheduler.frameTimeFactor = prevFrameTimeFactor;
                this.maxFrames = prevMaxFrames;
                this.runMode = false;
                AsyncScheduler_1.AsyncScheduler.delegate = undefined;
            }
        };
        return TestScheduler;
    }(VirtualTimeScheduler_1.VirtualTimeScheduler);
    exports.TestScheduler = TestScheduler;

});
System.registerDynamic("rxjs/testing", ["rxjs/internal/testing/TestScheduler"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var TestScheduler_1 = $__require("rxjs/internal/testing/TestScheduler");
  exports.TestScheduler = TestScheduler_1.TestScheduler;

});
System.registerDynamic("rxjs/internal/observable/dom/ajax", ["rxjs/internal/observable/dom/AjaxObservable"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var AjaxObservable_1 = $__require("rxjs/internal/observable/dom/AjaxObservable");
  exports.ajax = AjaxObservable_1.AjaxObservable.create;

});
System.registerDynamic("rxjs/internal/util/root", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var __window = typeof window !== 'undefined' && window;
    var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;
    var __global = typeof global !== 'undefined' && global;
    var _root = __window || __global || __self;
    exports.root = _root;
    (function () {
        if (!_root) {
            throw new Error('RxJS could not find any global context (window, self, global)');
        }
    })();

});
System.registerDynamic("rxjs/internal/observable/dom/AjaxObservable", ["rxjs/internal/util/root", "rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject", "rxjs/internal/Observable", "rxjs/internal/Subscriber", "rxjs/internal/operators/map"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var root_1 = $__require("rxjs/internal/util/root");
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    var Observable_1 = $__require("rxjs/internal/Observable");
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var map_1 = $__require("rxjs/internal/operators/map");
    function getCORSRequest() {
        if (root_1.root.XMLHttpRequest) {
            return new root_1.root.XMLHttpRequest();
        } else if (!!root_1.root.XDomainRequest) {
            return new root_1.root.XDomainRequest();
        } else {
            throw new Error('CORS is not supported by your browser');
        }
    }
    function getXMLHttpRequest() {
        if (root_1.root.XMLHttpRequest) {
            return new root_1.root.XMLHttpRequest();
        } else {
            var progId = void 0;
            try {
                var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
                for (var i = 0; i < 3; i++) {
                    try {
                        progId = progIds[i];
                        if (new root_1.root.ActiveXObject(progId)) {
                            break;
                        }
                    } catch (e) {}
                }
                return new root_1.root.ActiveXObject(progId);
            } catch (e) {
                throw new Error('XMLHttpRequest is not supported by your browser');
            }
        }
    }
    function ajaxGet(url, headers) {
        if (headers === void 0) {
            headers = null;
        }
        return new AjaxObservable({ method: 'GET', url: url, headers: headers });
    }
    exports.ajaxGet = ajaxGet;
    function ajaxPost(url, body, headers) {
        return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
    }
    exports.ajaxPost = ajaxPost;
    function ajaxDelete(url, headers) {
        return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
    }
    exports.ajaxDelete = ajaxDelete;
    function ajaxPut(url, body, headers) {
        return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
    }
    exports.ajaxPut = ajaxPut;
    function ajaxPatch(url, body, headers) {
        return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
    }
    exports.ajaxPatch = ajaxPatch;
    var mapResponse = map_1.map(function (x, index) {
        return x.response;
    });
    function ajaxGetJSON(url, headers) {
        return mapResponse(new AjaxObservable({
            method: 'GET',
            url: url,
            responseType: 'json',
            headers: headers
        }));
    }
    exports.ajaxGetJSON = ajaxGetJSON;
    var AjaxObservable = function (_super) {
        __extends(AjaxObservable, _super);
        function AjaxObservable(urlOrRequest) {
            var _this = _super.call(this) || this;
            var request = {
                async: true,
                createXHR: function () {
                    return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
                },
                crossDomain: true,
                withCredentials: false,
                headers: {},
                method: 'GET',
                responseType: 'json',
                timeout: 0
            };
            if (typeof urlOrRequest === 'string') {
                request.url = urlOrRequest;
            } else {
                for (var prop in urlOrRequest) {
                    if (urlOrRequest.hasOwnProperty(prop)) {
                        request[prop] = urlOrRequest[prop];
                    }
                }
            }
            _this.request = request;
            return _this;
        }
        AjaxObservable.prototype._subscribe = function (subscriber) {
            return new AjaxSubscriber(subscriber, this.request);
        };
        AjaxObservable.create = function () {
            var create = function (urlOrRequest) {
                return new AjaxObservable(urlOrRequest);
            };
            create.get = ajaxGet;
            create.post = ajaxPost;
            create.delete = ajaxDelete;
            create.put = ajaxPut;
            create.patch = ajaxPatch;
            create.getJSON = ajaxGetJSON;
            return create;
        }();
        return AjaxObservable;
    }(Observable_1.Observable);
    exports.AjaxObservable = AjaxObservable;
    var AjaxSubscriber = function (_super) {
        __extends(AjaxSubscriber, _super);
        function AjaxSubscriber(destination, request) {
            var _this = _super.call(this, destination) || this;
            _this.request = request;
            _this.done = false;
            var headers = request.headers = request.headers || {};
            if (!request.crossDomain && !headers['X-Requested-With']) {
                headers['X-Requested-With'] = 'XMLHttpRequest';
            }
            if (!('Content-Type' in headers) && !(root_1.root.FormData && request.body instanceof root_1.root.FormData) && typeof request.body !== 'undefined') {
                headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
            }
            request.body = _this.serializeBody(request.body, request.headers['Content-Type']);
            _this.send();
            return _this;
        }
        AjaxSubscriber.prototype.next = function (e) {
            this.done = true;
            var _a = this,
                xhr = _a.xhr,
                request = _a.request,
                destination = _a.destination;
            var response = new AjaxResponse(e, xhr, request);
            destination.next(response);
        };
        AjaxSubscriber.prototype.send = function () {
            var _a = this,
                request = _a.request,
                _b = _a.request,
                user = _b.user,
                method = _b.method,
                url = _b.url,
                async = _b.async,
                password = _b.password,
                headers = _b.headers,
                body = _b.body;
            var createXHR = request.createXHR;
            var xhr = tryCatch_1.tryCatch(createXHR).call(request);
            if (xhr === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
            } else {
                this.xhr = xhr;
                this.setupEvents(xhr, request);
                var result = void 0;
                if (user) {
                    result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async, user, password);
                } else {
                    result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async);
                }
                if (result === errorObject_1.errorObject) {
                    this.error(errorObject_1.errorObject.e);
                    return null;
                }
                if (async) {
                    xhr.timeout = request.timeout;
                    xhr.responseType = request.responseType;
                }
                if ('withCredentials' in xhr) {
                    xhr.withCredentials = !!request.withCredentials;
                }
                this.setHeaders(xhr, headers);
                result = body ? tryCatch_1.tryCatch(xhr.send).call(xhr, body) : tryCatch_1.tryCatch(xhr.send).call(xhr);
                if (result === errorObject_1.errorObject) {
                    this.error(errorObject_1.errorObject.e);
                    return null;
                }
            }
            return xhr;
        };
        AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
            if (!body || typeof body === 'string') {
                return body;
            } else if (root_1.root.FormData && body instanceof root_1.root.FormData) {
                return body;
            }
            if (contentType) {
                var splitIndex = contentType.indexOf(';');
                if (splitIndex !== -1) {
                    contentType = contentType.substring(0, splitIndex);
                }
            }
            switch (contentType) {
                case 'application/x-www-form-urlencoded':
                    return Object.keys(body).map(function (key) {
                        return encodeURIComponent(key) + "=" + encodeURIComponent(body[key]);
                    }).join('&');
                case 'application/json':
                    return JSON.stringify(body);
                default:
                    return body;
            }
        };
        AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
            for (var key in headers) {
                if (headers.hasOwnProperty(key)) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            }
        };
        AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
            var progressSubscriber = request.progressSubscriber;
            function xhrTimeout(e) {
                var _a = xhrTimeout,
                    subscriber = _a.subscriber,
                    progressSubscriber = _a.progressSubscriber,
                    request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                subscriber.error(new AjaxTimeoutError(this, request));
            }
            xhr.ontimeout = xhrTimeout;
            xhrTimeout.request = request;
            xhrTimeout.subscriber = this;
            xhrTimeout.progressSubscriber = progressSubscriber;
            if (xhr.upload && 'withCredentials' in xhr) {
                if (progressSubscriber) {
                    var xhrProgress_1;
                    xhrProgress_1 = function (e) {
                        var progressSubscriber = xhrProgress_1.progressSubscriber;
                        progressSubscriber.next(e);
                    };
                    if (root_1.root.XDomainRequest) {
                        xhr.onprogress = xhrProgress_1;
                    } else {
                        xhr.upload.onprogress = xhrProgress_1;
                    }
                    xhrProgress_1.progressSubscriber = progressSubscriber;
                }
                var xhrError_1;
                xhrError_1 = function (e) {
                    var _a = xhrError_1,
                        progressSubscriber = _a.progressSubscriber,
                        subscriber = _a.subscriber,
                        request = _a.request;
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    subscriber.error(new AjaxError('ajax error', this, request));
                };
                xhr.onerror = xhrError_1;
                xhrError_1.request = request;
                xhrError_1.subscriber = this;
                xhrError_1.progressSubscriber = progressSubscriber;
            }
            function xhrReadyStateChange(e) {
                return;
            }
            xhr.onreadystatechange = xhrReadyStateChange;
            xhrReadyStateChange.subscriber = this;
            xhrReadyStateChange.progressSubscriber = progressSubscriber;
            xhrReadyStateChange.request = request;
            function xhrLoad(e) {
                var _a = xhrLoad,
                    subscriber = _a.subscriber,
                    progressSubscriber = _a.progressSubscriber,
                    request = _a.request;
                if (this.readyState === 4) {
                    var status_1 = this.status === 1223 ? 204 : this.status;
                    var response = this.responseType === 'text' ? this.response || this.responseText : this.response;
                    if (status_1 === 0) {
                        status_1 = response ? 200 : 0;
                    }
                    if (status_1 < 400) {
                        if (progressSubscriber) {
                            progressSubscriber.complete();
                        }
                        subscriber.next(e);
                        subscriber.complete();
                    } else {
                        if (progressSubscriber) {
                            progressSubscriber.error(e);
                        }
                        subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                    }
                }
            }
            xhr.onload = xhrLoad;
            xhrLoad.subscriber = this;
            xhrLoad.progressSubscriber = progressSubscriber;
            xhrLoad.request = request;
        };
        AjaxSubscriber.prototype.unsubscribe = function () {
            var _a = this,
                done = _a.done,
                xhr = _a.xhr;
            if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
                xhr.abort();
            }
            _super.prototype.unsubscribe.call(this);
        };
        return AjaxSubscriber;
    }(Subscriber_1.Subscriber);
    exports.AjaxSubscriber = AjaxSubscriber;
    var AjaxResponse = function () {
        function AjaxResponse(originalEvent, xhr, request) {
            this.originalEvent = originalEvent;
            this.xhr = xhr;
            this.request = request;
            this.status = xhr.status;
            this.responseType = xhr.responseType || request.responseType;
            this.response = parseXhrResponse(this.responseType, xhr);
        }
        return AjaxResponse;
    }();
    exports.AjaxResponse = AjaxResponse;
    var AjaxError = function (_super) {
        __extends(AjaxError, _super);
        function AjaxError(message, xhr, request) {
            var _this = _super.call(this, message) || this;
            _this.name = 'AjaxError';
            _this.message = message;
            _this.xhr = xhr;
            _this.request = request;
            _this.status = xhr.status;
            _this.responseType = xhr.responseType || request.responseType;
            _this.response = parseXhrResponse(_this.responseType, xhr);
            Object.setPrototypeOf(_this, AjaxError.prototype);
            return _this;
        }
        return AjaxError;
    }(Error);
    exports.AjaxError = AjaxError;
    function parseXhrResponse(responseType, xhr) {
        switch (responseType) {
            case 'json':
                if ('response' in xhr) {
                    return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
                } else {
                    return JSON.parse(xhr.responseText || 'null');
                }
            case 'xml':
                return xhr.responseXML;
            case 'text':
            default:
                return 'response' in xhr ? xhr.response : xhr.responseText;
        }
    }
    var AjaxTimeoutError = function (_super) {
        __extends(AjaxTimeoutError, _super);
        function AjaxTimeoutError(xhr, request) {
            var _this = _super.call(this, 'ajax timeout', xhr, request) || this;
            _this.name = 'AjaxTimeoutError';
            Object.setPrototypeOf(_this, AjaxTimeoutError.prototype);
            return _this;
        }
        return AjaxTimeoutError;
    }(AjaxError);
    exports.AjaxTimeoutError = AjaxTimeoutError;

});
System.registerDynamic("rxjs/ajax", ["rxjs/internal/observable/dom/ajax", "rxjs/internal/observable/dom/AjaxObservable"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var ajax_1 = $__require("rxjs/internal/observable/dom/ajax");
  exports.ajax = ajax_1.ajax;
  var AjaxObservable_1 = $__require("rxjs/internal/observable/dom/AjaxObservable");
  exports.AjaxResponse = AjaxObservable_1.AjaxResponse;
  exports.AjaxError = AjaxObservable_1.AjaxError;
  exports.AjaxTimeoutError = AjaxObservable_1.AjaxTimeoutError;

});
System.registerDynamic("rxjs/internal/operators/audit", ["rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function audit(durationSelector) {
        return function auditOperatorFunction(source) {
            return source.lift(new AuditOperator(durationSelector));
        };
    }
    exports.audit = audit;
    var AuditOperator = function () {
        function AuditOperator(durationSelector) {
            this.durationSelector = durationSelector;
        }
        AuditOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
        };
        return AuditOperator;
    }();
    var AuditSubscriber = function (_super) {
        __extends(AuditSubscriber, _super);
        function AuditSubscriber(destination, durationSelector) {
            var _this = _super.call(this, destination) || this;
            _this.durationSelector = durationSelector;
            _this.hasValue = false;
            return _this;
        }
        AuditSubscriber.prototype._next = function (value) {
            this.value = value;
            this.hasValue = true;
            if (!this.throttled) {
                var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
                if (duration === errorObject_1.errorObject) {
                    this.destination.error(errorObject_1.errorObject.e);
                } else {
                    var innerSubscription = subscribeToResult_1.subscribeToResult(this, duration);
                    if (!innerSubscription || innerSubscription.closed) {
                        this.clearThrottle();
                    } else {
                        this.add(this.throttled = innerSubscription);
                    }
                }
            }
        };
        AuditSubscriber.prototype.clearThrottle = function () {
            var _a = this,
                value = _a.value,
                hasValue = _a.hasValue,
                throttled = _a.throttled;
            if (throttled) {
                this.remove(throttled);
                this.throttled = null;
                throttled.unsubscribe();
            }
            if (hasValue) {
                this.value = null;
                this.hasValue = false;
                this.destination.next(value);
            }
        };
        AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
            this.clearThrottle();
        };
        AuditSubscriber.prototype.notifyComplete = function () {
            this.clearThrottle();
        };
        return AuditSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/observable/timer", ["rxjs/internal/Observable", "rxjs/internal/scheduler/async", "rxjs/internal/util/isNumeric", "rxjs/internal/util/isScheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var async_1 = $__require("rxjs/internal/scheduler/async");
    var isNumeric_1 = $__require("rxjs/internal/util/isNumeric");
    var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
    function timer(dueTime, periodOrScheduler, scheduler) {
        if (dueTime === void 0) {
            dueTime = 0;
        }
        var period = -1;
        if (isNumeric_1.isNumeric(periodOrScheduler)) {
            period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
        } else if (isScheduler_1.isScheduler(periodOrScheduler)) {
            scheduler = periodOrScheduler;
        }
        if (!isScheduler_1.isScheduler(scheduler)) {
            scheduler = async_1.async;
        }
        return new Observable_1.Observable(function (subscriber) {
            var due = isNumeric_1.isNumeric(dueTime) ? dueTime : +dueTime - scheduler.now();
            return scheduler.schedule(dispatch, due, {
                index: 0, period: period, subscriber: subscriber
            });
        });
    }
    exports.timer = timer;
    function dispatch(state) {
        var index = state.index,
            period = state.period,
            subscriber = state.subscriber;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        } else if (period === -1) {
            return subscriber.complete();
        }
        state.index = index + 1;
        this.schedule(state, period);
    }

});
System.registerDynamic("rxjs/internal/operators/auditTime", ["rxjs/internal/scheduler/async", "rxjs/internal/operators/audit", "rxjs/internal/observable/timer"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = $__require("rxjs/internal/scheduler/async");
    var audit_1 = $__require("rxjs/internal/operators/audit");
    var timer_1 = $__require("rxjs/internal/observable/timer");
    function auditTime(duration, scheduler) {
        if (scheduler === void 0) {
            scheduler = async_1.async;
        }
        return audit_1.audit(function () {
            return timer_1.timer(duration, scheduler);
        });
    }
    exports.auditTime = auditTime;

});
System.registerDynamic("rxjs/internal/operators/buffer", ["rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function buffer(closingNotifier) {
        return function bufferOperatorFunction(source) {
            return source.lift(new BufferOperator(closingNotifier));
        };
    }
    exports.buffer = buffer;
    var BufferOperator = function () {
        function BufferOperator(closingNotifier) {
            this.closingNotifier = closingNotifier;
        }
        BufferOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
        };
        return BufferOperator;
    }();
    var BufferSubscriber = function (_super) {
        __extends(BufferSubscriber, _super);
        function BufferSubscriber(destination, closingNotifier) {
            var _this = _super.call(this, destination) || this;
            _this.buffer = [];
            _this.add(subscribeToResult_1.subscribeToResult(_this, closingNotifier));
            return _this;
        }
        BufferSubscriber.prototype._next = function (value) {
            this.buffer.push(value);
        };
        BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var buffer = this.buffer;
            this.buffer = [];
            this.destination.next(buffer);
        };
        return BufferSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/bufferCount", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function bufferCount(bufferSize, startBufferEvery) {
        if (startBufferEvery === void 0) {
            startBufferEvery = null;
        }
        return function bufferCountOperatorFunction(source) {
            return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
        };
    }
    exports.bufferCount = bufferCount;
    var BufferCountOperator = function () {
        function BufferCountOperator(bufferSize, startBufferEvery) {
            this.bufferSize = bufferSize;
            this.startBufferEvery = startBufferEvery;
            if (!startBufferEvery || bufferSize === startBufferEvery) {
                this.subscriberClass = BufferCountSubscriber;
            } else {
                this.subscriberClass = BufferSkipCountSubscriber;
            }
        }
        BufferCountOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
        };
        return BufferCountOperator;
    }();
    var BufferCountSubscriber = function (_super) {
        __extends(BufferCountSubscriber, _super);
        function BufferCountSubscriber(destination, bufferSize) {
            var _this = _super.call(this, destination) || this;
            _this.bufferSize = bufferSize;
            _this.buffer = [];
            return _this;
        }
        BufferCountSubscriber.prototype._next = function (value) {
            var buffer = this.buffer;
            buffer.push(value);
            if (buffer.length == this.bufferSize) {
                this.destination.next(buffer);
                this.buffer = [];
            }
        };
        BufferCountSubscriber.prototype._complete = function () {
            var buffer = this.buffer;
            if (buffer.length > 0) {
                this.destination.next(buffer);
            }
            _super.prototype._complete.call(this);
        };
        return BufferCountSubscriber;
    }(Subscriber_1.Subscriber);
    var BufferSkipCountSubscriber = function (_super) {
        __extends(BufferSkipCountSubscriber, _super);
        function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
            var _this = _super.call(this, destination) || this;
            _this.bufferSize = bufferSize;
            _this.startBufferEvery = startBufferEvery;
            _this.buffers = [];
            _this.count = 0;
            return _this;
        }
        BufferSkipCountSubscriber.prototype._next = function (value) {
            var _a = this,
                bufferSize = _a.bufferSize,
                startBufferEvery = _a.startBufferEvery,
                buffers = _a.buffers,
                count = _a.count;
            this.count++;
            if (count % startBufferEvery === 0) {
                buffers.push([]);
            }
            for (var i = buffers.length; i--;) {
                var buffer = buffers[i];
                buffer.push(value);
                if (buffer.length === bufferSize) {
                    buffers.splice(i, 1);
                    this.destination.next(buffer);
                }
            }
        };
        BufferSkipCountSubscriber.prototype._complete = function () {
            var _a = this,
                buffers = _a.buffers,
                destination = _a.destination;
            while (buffers.length > 0) {
                var buffer = buffers.shift();
                if (buffer.length > 0) {
                    destination.next(buffer);
                }
            }
            _super.prototype._complete.call(this);
        };
        return BufferSkipCountSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/bufferTime", ["rxjs/internal/scheduler/async", "rxjs/internal/Subscriber", "rxjs/internal/util/isScheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = $__require("rxjs/internal/scheduler/async");
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
    function bufferTime(bufferTimeSpan) {
        var length = arguments.length;
        var scheduler = async_1.async;
        if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
            scheduler = arguments[arguments.length - 1];
            length--;
        }
        var bufferCreationInterval = null;
        if (length >= 2) {
            bufferCreationInterval = arguments[1];
        }
        var maxBufferSize = Number.POSITIVE_INFINITY;
        if (length >= 3) {
            maxBufferSize = arguments[2];
        }
        return function bufferTimeOperatorFunction(source) {
            return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
        };
    }
    exports.bufferTime = bufferTime;
    var BufferTimeOperator = function () {
        function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
            this.bufferTimeSpan = bufferTimeSpan;
            this.bufferCreationInterval = bufferCreationInterval;
            this.maxBufferSize = maxBufferSize;
            this.scheduler = scheduler;
        }
        BufferTimeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
        };
        return BufferTimeOperator;
    }();
    var Context = function () {
        function Context() {
            this.buffer = [];
        }
        return Context;
    }();
    var BufferTimeSubscriber = function (_super) {
        __extends(BufferTimeSubscriber, _super);
        function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.bufferTimeSpan = bufferTimeSpan;
            _this.bufferCreationInterval = bufferCreationInterval;
            _this.maxBufferSize = maxBufferSize;
            _this.scheduler = scheduler;
            _this.contexts = [];
            var context = _this.openContext();
            _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
            if (_this.timespanOnly) {
                var timeSpanOnlyState = { subscriber: _this, context: context, bufferTimeSpan: bufferTimeSpan };
                _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
            } else {
                var closeState = { subscriber: _this, context: context };
                var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: _this, scheduler: scheduler };
                _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
                _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
            }
            return _this;
        }
        BufferTimeSubscriber.prototype._next = function (value) {
            var contexts = this.contexts;
            var len = contexts.length;
            var filledBufferContext;
            for (var i = 0; i < len; i++) {
                var context_1 = contexts[i];
                var buffer = context_1.buffer;
                buffer.push(value);
                if (buffer.length == this.maxBufferSize) {
                    filledBufferContext = context_1;
                }
            }
            if (filledBufferContext) {
                this.onBufferFull(filledBufferContext);
            }
        };
        BufferTimeSubscriber.prototype._error = function (err) {
            this.contexts.length = 0;
            _super.prototype._error.call(this, err);
        };
        BufferTimeSubscriber.prototype._complete = function () {
            var _a = this,
                contexts = _a.contexts,
                destination = _a.destination;
            while (contexts.length > 0) {
                var context_2 = contexts.shift();
                destination.next(context_2.buffer);
            }
            _super.prototype._complete.call(this);
        };
        BufferTimeSubscriber.prototype._unsubscribe = function () {
            this.contexts = null;
        };
        BufferTimeSubscriber.prototype.onBufferFull = function (context) {
            this.closeContext(context);
            var closeAction = context.closeAction;
            closeAction.unsubscribe();
            this.remove(closeAction);
            if (!this.closed && this.timespanOnly) {
                context = this.openContext();
                var bufferTimeSpan = this.bufferTimeSpan;
                var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
                this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
            }
        };
        BufferTimeSubscriber.prototype.openContext = function () {
            var context = new Context();
            this.contexts.push(context);
            return context;
        };
        BufferTimeSubscriber.prototype.closeContext = function (context) {
            this.destination.next(context.buffer);
            var contexts = this.contexts;
            var spliceIndex = contexts ? contexts.indexOf(context) : -1;
            if (spliceIndex >= 0) {
                contexts.splice(contexts.indexOf(context), 1);
            }
        };
        return BufferTimeSubscriber;
    }(Subscriber_1.Subscriber);
    function dispatchBufferTimeSpanOnly(state) {
        var subscriber = state.subscriber;
        var prevContext = state.context;
        if (prevContext) {
            subscriber.closeContext(prevContext);
        }
        if (!subscriber.closed) {
            state.context = subscriber.openContext();
            state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
        }
    }
    function dispatchBufferCreation(state) {
        var bufferCreationInterval = state.bufferCreationInterval,
            bufferTimeSpan = state.bufferTimeSpan,
            subscriber = state.subscriber,
            scheduler = state.scheduler;
        var context = subscriber.openContext();
        var action = this;
        if (!subscriber.closed) {
            subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
            action.schedule(state, bufferCreationInterval);
        }
    }
    function dispatchBufferClose(arg) {
        var subscriber = arg.subscriber,
            context = arg.context;
        subscriber.closeContext(context);
    }

});
System.registerDynamic("rxjs/internal/operators/bufferToggle", ["rxjs/internal/Subscription", "rxjs/internal/util/subscribeToResult", "rxjs/internal/OuterSubscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    function bufferToggle(openings, closingSelector) {
        return function bufferToggleOperatorFunction(source) {
            return source.lift(new BufferToggleOperator(openings, closingSelector));
        };
    }
    exports.bufferToggle = bufferToggle;
    var BufferToggleOperator = function () {
        function BufferToggleOperator(openings, closingSelector) {
            this.openings = openings;
            this.closingSelector = closingSelector;
        }
        BufferToggleOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
        };
        return BufferToggleOperator;
    }();
    var BufferToggleSubscriber = function (_super) {
        __extends(BufferToggleSubscriber, _super);
        function BufferToggleSubscriber(destination, openings, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.openings = openings;
            _this.closingSelector = closingSelector;
            _this.contexts = [];
            _this.add(subscribeToResult_1.subscribeToResult(_this, openings));
            return _this;
        }
        BufferToggleSubscriber.prototype._next = function (value) {
            var contexts = this.contexts;
            var len = contexts.length;
            for (var i = 0; i < len; i++) {
                contexts[i].buffer.push(value);
            }
        };
        BufferToggleSubscriber.prototype._error = function (err) {
            var contexts = this.contexts;
            while (contexts.length > 0) {
                var context_1 = contexts.shift();
                context_1.subscription.unsubscribe();
                context_1.buffer = null;
                context_1.subscription = null;
            }
            this.contexts = null;
            _super.prototype._error.call(this, err);
        };
        BufferToggleSubscriber.prototype._complete = function () {
            var contexts = this.contexts;
            while (contexts.length > 0) {
                var context_2 = contexts.shift();
                this.destination.next(context_2.buffer);
                context_2.subscription.unsubscribe();
                context_2.buffer = null;
                context_2.subscription = null;
            }
            this.contexts = null;
            _super.prototype._complete.call(this);
        };
        BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
        };
        BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
            this.closeBuffer(innerSub.context);
        };
        BufferToggleSubscriber.prototype.openBuffer = function (value) {
            try {
                var closingSelector = this.closingSelector;
                var closingNotifier = closingSelector.call(this, value);
                if (closingNotifier) {
                    this.trySubscribe(closingNotifier);
                }
            } catch (err) {
                this._error(err);
            }
        };
        BufferToggleSubscriber.prototype.closeBuffer = function (context) {
            var contexts = this.contexts;
            if (contexts && context) {
                var buffer = context.buffer,
                    subscription = context.subscription;
                this.destination.next(buffer);
                contexts.splice(contexts.indexOf(context), 1);
                this.remove(subscription);
                subscription.unsubscribe();
            }
        };
        BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
            var contexts = this.contexts;
            var buffer = [];
            var subscription = new Subscription_1.Subscription();
            var context = { buffer: buffer, subscription: subscription };
            contexts.push(context);
            var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
            if (!innerSubscription || innerSubscription.closed) {
                this.closeBuffer(context);
            } else {
                innerSubscription.context = context;
                this.add(innerSubscription);
                subscription.add(innerSubscription);
            }
        };
        return BufferToggleSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/bufferWhen", ["rxjs/internal/Subscription", "rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function bufferWhen(closingSelector) {
        return function (source) {
            return source.lift(new BufferWhenOperator(closingSelector));
        };
    }
    exports.bufferWhen = bufferWhen;
    var BufferWhenOperator = function () {
        function BufferWhenOperator(closingSelector) {
            this.closingSelector = closingSelector;
        }
        BufferWhenOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
        };
        return BufferWhenOperator;
    }();
    var BufferWhenSubscriber = function (_super) {
        __extends(BufferWhenSubscriber, _super);
        function BufferWhenSubscriber(destination, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.closingSelector = closingSelector;
            _this.subscribing = false;
            _this.openBuffer();
            return _this;
        }
        BufferWhenSubscriber.prototype._next = function (value) {
            this.buffer.push(value);
        };
        BufferWhenSubscriber.prototype._complete = function () {
            var buffer = this.buffer;
            if (buffer) {
                this.destination.next(buffer);
            }
            _super.prototype._complete.call(this);
        };
        BufferWhenSubscriber.prototype._unsubscribe = function () {
            this.buffer = null;
            this.subscribing = false;
        };
        BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.openBuffer();
        };
        BufferWhenSubscriber.prototype.notifyComplete = function () {
            if (this.subscribing) {
                this.complete();
            } else {
                this.openBuffer();
            }
        };
        BufferWhenSubscriber.prototype.openBuffer = function () {
            var closingSubscription = this.closingSubscription;
            if (closingSubscription) {
                this.remove(closingSubscription);
                closingSubscription.unsubscribe();
            }
            var buffer = this.buffer;
            if (this.buffer) {
                this.destination.next(buffer);
            }
            this.buffer = [];
            var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
            if (closingNotifier === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
            } else {
                closingSubscription = new Subscription_1.Subscription();
                this.closingSubscription = closingSubscription;
                this.add(closingSubscription);
                this.subscribing = true;
                closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
                this.subscribing = false;
            }
        };
        return BufferWhenSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/catchError", ["rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function catchError(selector) {
        return function catchErrorOperatorFunction(source) {
            var operator = new CatchOperator(selector);
            var caught = source.lift(operator);
            return operator.caught = caught;
        };
    }
    exports.catchError = catchError;
    var CatchOperator = function () {
        function CatchOperator(selector) {
            this.selector = selector;
        }
        CatchOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
        };
        return CatchOperator;
    }();
    var CatchSubscriber = function (_super) {
        __extends(CatchSubscriber, _super);
        function CatchSubscriber(destination, selector, caught) {
            var _this = _super.call(this, destination) || this;
            _this.selector = selector;
            _this.caught = caught;
            return _this;
        }
        CatchSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var result = void 0;
                try {
                    result = this.selector(err, this.caught);
                } catch (err2) {
                    _super.prototype.error.call(this, err2);
                    return;
                }
                this._unsubscribeAndRecycle();
                this.add(subscribeToResult_1.subscribeToResult(this, result));
            }
        };
        return CatchSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/combineAll", ["rxjs/internal/observable/combineLatest"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var combineLatest_1 = $__require("rxjs/internal/observable/combineLatest");
    function combineAll(project) {
        return function (source) {
            return source.lift(new combineLatest_1.CombineLatestOperator(project));
        };
    }
    exports.combineAll = combineAll;

});
System.registerDynamic("rxjs/internal/observable/combineLatest", ["rxjs/internal/util/isScheduler", "rxjs/internal/util/isArray", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult", "rxjs/internal/observable/fromArray"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    var fromArray_1 = $__require("rxjs/internal/observable/fromArray");
    var NONE = {};
    function combineLatest() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        var resultSelector = null;
        var scheduler = null;
        if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
            scheduler = observables.pop();
        }
        if (typeof observables[observables.length - 1] === 'function') {
            resultSelector = observables.pop();
        }
        if (observables.length === 1 && isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        return fromArray_1.fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
    }
    exports.combineLatest = combineLatest;
    var CombineLatestOperator = function () {
        function CombineLatestOperator(resultSelector) {
            this.resultSelector = resultSelector;
        }
        CombineLatestOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
        };
        return CombineLatestOperator;
    }();
    exports.CombineLatestOperator = CombineLatestOperator;
    var CombineLatestSubscriber = function (_super) {
        __extends(CombineLatestSubscriber, _super);
        function CombineLatestSubscriber(destination, resultSelector) {
            var _this = _super.call(this, destination) || this;
            _this.resultSelector = resultSelector;
            _this.active = 0;
            _this.values = [];
            _this.observables = [];
            return _this;
        }
        CombineLatestSubscriber.prototype._next = function (observable) {
            this.values.push(NONE);
            this.observables.push(observable);
        };
        CombineLatestSubscriber.prototype._complete = function () {
            var observables = this.observables;
            var len = observables.length;
            if (len === 0) {
                this.destination.complete();
            } else {
                this.active = len;
                this.toRespond = len;
                for (var i = 0; i < len; i++) {
                    var observable = observables[i];
                    this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
                }
            }
        };
        CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
            if ((this.active -= 1) === 0) {
                this.destination.complete();
            }
        };
        CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var values = this.values;
            var oldVal = values[outerIndex];
            var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
            values[outerIndex] = innerValue;
            if (toRespond === 0) {
                if (this.resultSelector) {
                    this._tryResultSelector(values);
                } else {
                    this.destination.next(values.slice());
                }
            }
        };
        CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
            var result;
            try {
                result = this.resultSelector.apply(this, values);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return CombineLatestSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
    exports.CombineLatestSubscriber = CombineLatestSubscriber;

});
System.registerDynamic("rxjs/internal/operators/combineLatest", ["rxjs/internal/util/isArray", "rxjs/internal/observable/combineLatest", "rxjs/internal/observable/from"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    var combineLatest_1 = $__require("rxjs/internal/observable/combineLatest");
    var from_1 = $__require("rxjs/internal/observable/from");
    var none = {};
    function combineLatest() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        var project = null;
        if (typeof observables[observables.length - 1] === 'function') {
            project = observables.pop();
        }
        if (observables.length === 1 && isArray_1.isArray(observables[0])) {
            observables = observables[0].slice();
        }
        return function (source) {
            return source.lift.call(from_1.from([source].concat(observables)), new combineLatest_1.CombineLatestOperator(project));
        };
    }
    exports.combineLatest = combineLatest;

});
System.registerDynamic("rxjs/internal/operators/concat", ["rxjs/internal/observable/concat"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var concat_1 = $__require("rxjs/internal/observable/concat");
    function concat() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return function (source) {
            return source.lift.call(concat_1.concat.apply(void 0, [source].concat(observables)));
        };
    }
    exports.concat = concat;

});
System.registerDynamic("rxjs/internal/operators/concatMap", ["rxjs/internal/operators/mergeMap"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var mergeMap_1 = $__require("rxjs/internal/operators/mergeMap");
    function concatMap(project, resultSelector) {
        return mergeMap_1.mergeMap(project, resultSelector, 1);
    }
    exports.concatMap = concatMap;

});
System.registerDynamic("rxjs/internal/operators/concatMapTo", ["rxjs/internal/operators/concatMap"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var concatMap_1 = $__require("rxjs/internal/operators/concatMap");
    function concatMapTo(innerObservable, resultSelector) {
        return concatMap_1.concatMap(function () {
            return innerObservable;
        }, resultSelector);
    }
    exports.concatMapTo = concatMapTo;

});
System.registerDynamic("rxjs/internal/operators/count", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function count(predicate) {
        return function (source) {
            return source.lift(new CountOperator(predicate, source));
        };
    }
    exports.count = count;
    var CountOperator = function () {
        function CountOperator(predicate, source) {
            this.predicate = predicate;
            this.source = source;
        }
        CountOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
        };
        return CountOperator;
    }();
    var CountSubscriber = function (_super) {
        __extends(CountSubscriber, _super);
        function CountSubscriber(destination, predicate, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.source = source;
            _this.count = 0;
            _this.index = 0;
            return _this;
        }
        CountSubscriber.prototype._next = function (value) {
            if (this.predicate) {
                this._tryPredicate(value);
            } else {
                this.count++;
            }
        };
        CountSubscriber.prototype._tryPredicate = function (value) {
            var result;
            try {
                result = this.predicate(value, this.index++, this.source);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            if (result) {
                this.count++;
            }
        };
        CountSubscriber.prototype._complete = function () {
            this.destination.next(this.count);
            this.destination.complete();
        };
        return CountSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/debounce", ["rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function debounce(durationSelector) {
        return function (source) {
            return source.lift(new DebounceOperator(durationSelector));
        };
    }
    exports.debounce = debounce;
    var DebounceOperator = function () {
        function DebounceOperator(durationSelector) {
            this.durationSelector = durationSelector;
        }
        DebounceOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
        };
        return DebounceOperator;
    }();
    var DebounceSubscriber = function (_super) {
        __extends(DebounceSubscriber, _super);
        function DebounceSubscriber(destination, durationSelector) {
            var _this = _super.call(this, destination) || this;
            _this.durationSelector = durationSelector;
            _this.hasValue = false;
            _this.durationSubscription = null;
            return _this;
        }
        DebounceSubscriber.prototype._next = function (value) {
            try {
                var result = this.durationSelector.call(this, value);
                if (result) {
                    this._tryNext(value, result);
                }
            } catch (err) {
                this.destination.error(err);
            }
        };
        DebounceSubscriber.prototype._complete = function () {
            this.emitValue();
            this.destination.complete();
        };
        DebounceSubscriber.prototype._tryNext = function (value, duration) {
            var subscription = this.durationSubscription;
            this.value = value;
            this.hasValue = true;
            if (subscription) {
                subscription.unsubscribe();
                this.remove(subscription);
            }
            subscription = subscribeToResult_1.subscribeToResult(this, duration);
            if (subscription && !subscription.closed) {
                this.add(this.durationSubscription = subscription);
            }
        };
        DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.emitValue();
        };
        DebounceSubscriber.prototype.notifyComplete = function () {
            this.emitValue();
        };
        DebounceSubscriber.prototype.emitValue = function () {
            if (this.hasValue) {
                var value = this.value;
                var subscription = this.durationSubscription;
                if (subscription) {
                    this.durationSubscription = null;
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
                this.value = null;
                this.hasValue = false;
                _super.prototype._next.call(this, value);
            }
        };
        return DebounceSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/debounceTime", ["rxjs/internal/Subscriber", "rxjs/internal/scheduler/async"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var async_1 = $__require("rxjs/internal/scheduler/async");
    function debounceTime(dueTime, scheduler) {
        if (scheduler === void 0) {
            scheduler = async_1.async;
        }
        return function (source) {
            return source.lift(new DebounceTimeOperator(dueTime, scheduler));
        };
    }
    exports.debounceTime = debounceTime;
    var DebounceTimeOperator = function () {
        function DebounceTimeOperator(dueTime, scheduler) {
            this.dueTime = dueTime;
            this.scheduler = scheduler;
        }
        DebounceTimeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
        };
        return DebounceTimeOperator;
    }();
    var DebounceTimeSubscriber = function (_super) {
        __extends(DebounceTimeSubscriber, _super);
        function DebounceTimeSubscriber(destination, dueTime, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.dueTime = dueTime;
            _this.scheduler = scheduler;
            _this.debouncedSubscription = null;
            _this.lastValue = null;
            _this.hasValue = false;
            return _this;
        }
        DebounceTimeSubscriber.prototype._next = function (value) {
            this.clearDebounce();
            this.lastValue = value;
            this.hasValue = true;
            this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
        };
        DebounceTimeSubscriber.prototype._complete = function () {
            this.debouncedNext();
            this.destination.complete();
        };
        DebounceTimeSubscriber.prototype.debouncedNext = function () {
            this.clearDebounce();
            if (this.hasValue) {
                var lastValue = this.lastValue;
                this.lastValue = null;
                this.hasValue = false;
                this.destination.next(lastValue);
            }
        };
        DebounceTimeSubscriber.prototype.clearDebounce = function () {
            var debouncedSubscription = this.debouncedSubscription;
            if (debouncedSubscription !== null) {
                this.remove(debouncedSubscription);
                debouncedSubscription.unsubscribe();
                this.debouncedSubscription = null;
            }
        };
        return DebounceTimeSubscriber;
    }(Subscriber_1.Subscriber);
    function dispatchNext(subscriber) {
        subscriber.debouncedNext();
    }

});
System.registerDynamic("rxjs/internal/operators/delay", ["rxjs/internal/scheduler/async", "rxjs/internal/util/isDate", "rxjs/internal/Subscriber", "rxjs/internal/Notification"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = $__require("rxjs/internal/scheduler/async");
    var isDate_1 = $__require("rxjs/internal/util/isDate");
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var Notification_1 = $__require("rxjs/internal/Notification");
    function delay(delay, scheduler) {
        if (scheduler === void 0) {
            scheduler = async_1.async;
        }
        var absoluteDelay = isDate_1.isDate(delay);
        var delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
        return function (source) {
            return source.lift(new DelayOperator(delayFor, scheduler));
        };
    }
    exports.delay = delay;
    var DelayOperator = function () {
        function DelayOperator(delay, scheduler) {
            this.delay = delay;
            this.scheduler = scheduler;
        }
        DelayOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
        };
        return DelayOperator;
    }();
    var DelaySubscriber = function (_super) {
        __extends(DelaySubscriber, _super);
        function DelaySubscriber(destination, delay, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.delay = delay;
            _this.scheduler = scheduler;
            _this.queue = [];
            _this.active = false;
            _this.errored = false;
            return _this;
        }
        DelaySubscriber.dispatch = function (state) {
            var source = state.source;
            var queue = source.queue;
            var scheduler = state.scheduler;
            var destination = state.destination;
            while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
                queue.shift().notification.observe(destination);
            }
            if (queue.length > 0) {
                var delay_1 = Math.max(0, queue[0].time - scheduler.now());
                this.schedule(state, delay_1);
            } else {
                this.unsubscribe();
                source.active = false;
            }
        };
        DelaySubscriber.prototype._schedule = function (scheduler) {
            this.active = true;
            this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
                source: this, destination: this.destination, scheduler: scheduler
            }));
        };
        DelaySubscriber.prototype.scheduleNotification = function (notification) {
            if (this.errored === true) {
                return;
            }
            var scheduler = this.scheduler;
            var message = new DelayMessage(scheduler.now() + this.delay, notification);
            this.queue.push(message);
            if (this.active === false) {
                this._schedule(scheduler);
            }
        };
        DelaySubscriber.prototype._next = function (value) {
            this.scheduleNotification(Notification_1.Notification.createNext(value));
        };
        DelaySubscriber.prototype._error = function (err) {
            this.errored = true;
            this.queue = [];
            this.destination.error(err);
        };
        DelaySubscriber.prototype._complete = function () {
            this.scheduleNotification(Notification_1.Notification.createComplete());
        };
        return DelaySubscriber;
    }(Subscriber_1.Subscriber);
    var DelayMessage = function () {
        function DelayMessage(time, notification) {
            this.time = time;
            this.notification = notification;
        }
        return DelayMessage;
    }();

});
System.registerDynamic("rxjs/internal/operators/delayWhen", ["rxjs/internal/Subscriber", "rxjs/internal/Observable", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var Observable_1 = $__require("rxjs/internal/Observable");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function delayWhen(delayDurationSelector, subscriptionDelay) {
        if (subscriptionDelay) {
            return function (source) {
                return new SubscriptionDelayObservable(source, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
            };
        }
        return function (source) {
            return source.lift(new DelayWhenOperator(delayDurationSelector));
        };
    }
    exports.delayWhen = delayWhen;
    var DelayWhenOperator = function () {
        function DelayWhenOperator(delayDurationSelector) {
            this.delayDurationSelector = delayDurationSelector;
        }
        DelayWhenOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
        };
        return DelayWhenOperator;
    }();
    var DelayWhenSubscriber = function (_super) {
        __extends(DelayWhenSubscriber, _super);
        function DelayWhenSubscriber(destination, delayDurationSelector) {
            var _this = _super.call(this, destination) || this;
            _this.delayDurationSelector = delayDurationSelector;
            _this.completed = false;
            _this.delayNotifierSubscriptions = [];
            return _this;
        }
        DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(outerValue);
            this.removeSubscription(innerSub);
            this.tryComplete();
        };
        DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
            var value = this.removeSubscription(innerSub);
            if (value) {
                this.destination.next(value);
            }
            this.tryComplete();
        };
        DelayWhenSubscriber.prototype._next = function (value) {
            try {
                var delayNotifier = this.delayDurationSelector(value);
                if (delayNotifier) {
                    this.tryDelay(delayNotifier, value);
                }
            } catch (err) {
                this.destination.error(err);
            }
        };
        DelayWhenSubscriber.prototype._complete = function () {
            this.completed = true;
            this.tryComplete();
        };
        DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
            subscription.unsubscribe();
            var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
            if (subscriptionIdx !== -1) {
                this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
            }
            return subscription.outerValue;
        };
        DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
            var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
            if (notifierSubscription && !notifierSubscription.closed) {
                this.add(notifierSubscription);
                this.delayNotifierSubscriptions.push(notifierSubscription);
            }
        };
        DelayWhenSubscriber.prototype.tryComplete = function () {
            if (this.completed && this.delayNotifierSubscriptions.length === 0) {
                this.destination.complete();
            }
        };
        return DelayWhenSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
    var SubscriptionDelayObservable = function (_super) {
        __extends(SubscriptionDelayObservable, _super);
        function SubscriptionDelayObservable(source, subscriptionDelay) {
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.subscriptionDelay = subscriptionDelay;
            return _this;
        }
        SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
            this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
        };
        return SubscriptionDelayObservable;
    }(Observable_1.Observable);
    var SubscriptionDelaySubscriber = function (_super) {
        __extends(SubscriptionDelaySubscriber, _super);
        function SubscriptionDelaySubscriber(parent, source) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            _this.source = source;
            _this.sourceSubscribed = false;
            return _this;
        }
        SubscriptionDelaySubscriber.prototype._next = function (unused) {
            this.subscribeToSource();
        };
        SubscriptionDelaySubscriber.prototype._error = function (err) {
            this.unsubscribe();
            this.parent.error(err);
        };
        SubscriptionDelaySubscriber.prototype._complete = function () {
            this.subscribeToSource();
        };
        SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
            if (!this.sourceSubscribed) {
                this.sourceSubscribed = true;
                this.unsubscribe();
                this.source.subscribe(this.parent);
            }
        };
        return SubscriptionDelaySubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/dematerialize", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function dematerialize() {
        return function dematerializeOperatorFunction(source) {
            return source.lift(new DeMaterializeOperator());
        };
    }
    exports.dematerialize = dematerialize;
    var DeMaterializeOperator = function () {
        function DeMaterializeOperator() {}
        DeMaterializeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DeMaterializeSubscriber(subscriber));
        };
        return DeMaterializeOperator;
    }();
    var DeMaterializeSubscriber = function (_super) {
        __extends(DeMaterializeSubscriber, _super);
        function DeMaterializeSubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        DeMaterializeSubscriber.prototype._next = function (value) {
            value.observe(this.destination);
        };
        return DeMaterializeSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/distinct", ["rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function distinct(keySelector, flushes) {
        return function (source) {
            return source.lift(new DistinctOperator(keySelector, flushes));
        };
    }
    exports.distinct = distinct;
    var DistinctOperator = function () {
        function DistinctOperator(keySelector, flushes) {
            this.keySelector = keySelector;
            this.flushes = flushes;
        }
        DistinctOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
        };
        return DistinctOperator;
    }();
    var DistinctSubscriber = function (_super) {
        __extends(DistinctSubscriber, _super);
        function DistinctSubscriber(destination, keySelector, flushes) {
            var _this = _super.call(this, destination) || this;
            _this.keySelector = keySelector;
            _this.values = new Set();
            if (flushes) {
                _this.add(subscribeToResult_1.subscribeToResult(_this, flushes));
            }
            return _this;
        }
        DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.values.clear();
        };
        DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        DistinctSubscriber.prototype._next = function (value) {
            if (this.keySelector) {
                this._useKeySelector(value);
            } else {
                this._finalizeNext(value, value);
            }
        };
        DistinctSubscriber.prototype._useKeySelector = function (value) {
            var key;
            var destination = this.destination;
            try {
                key = this.keySelector(value);
            } catch (err) {
                destination.error(err);
                return;
            }
            this._finalizeNext(key, value);
        };
        DistinctSubscriber.prototype._finalizeNext = function (key, value) {
            var values = this.values;
            if (!values.has(key)) {
                values.add(key);
                this.destination.next(value);
            }
        };
        return DistinctSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
    exports.DistinctSubscriber = DistinctSubscriber;

});
System.registerDynamic("rxjs/internal/operators/distinctUntilChanged", ["rxjs/internal/Subscriber", "rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    function distinctUntilChanged(compare, keySelector) {
        return function (source) {
            return source.lift(new DistinctUntilChangedOperator(compare, keySelector));
        };
    }
    exports.distinctUntilChanged = distinctUntilChanged;
    var DistinctUntilChangedOperator = function () {
        function DistinctUntilChangedOperator(compare, keySelector) {
            this.compare = compare;
            this.keySelector = keySelector;
        }
        DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
        };
        return DistinctUntilChangedOperator;
    }();
    var DistinctUntilChangedSubscriber = function (_super) {
        __extends(DistinctUntilChangedSubscriber, _super);
        function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
            var _this = _super.call(this, destination) || this;
            _this.keySelector = keySelector;
            _this.hasKey = false;
            if (typeof compare === 'function') {
                _this.compare = compare;
            }
            return _this;
        }
        DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
            return x === y;
        };
        DistinctUntilChangedSubscriber.prototype._next = function (value) {
            var keySelector = this.keySelector;
            var key = value;
            if (keySelector) {
                key = tryCatch_1.tryCatch(this.keySelector)(value);
                if (key === errorObject_1.errorObject) {
                    return this.destination.error(errorObject_1.errorObject.e);
                }
            }
            var result = false;
            if (this.hasKey) {
                result = tryCatch_1.tryCatch(this.compare)(this.key, key);
                if (result === errorObject_1.errorObject) {
                    return this.destination.error(errorObject_1.errorObject.e);
                }
            } else {
                this.hasKey = true;
            }
            if (Boolean(result) === false) {
                this.key = key;
                this.destination.next(value);
            }
        };
        return DistinctUntilChangedSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/distinctUntilKeyChanged", ["rxjs/internal/operators/distinctUntilChanged"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var distinctUntilChanged_1 = $__require("rxjs/internal/operators/distinctUntilChanged");
    function distinctUntilKeyChanged(key, compare) {
        return distinctUntilChanged_1.distinctUntilChanged(function (x, y) {
            return compare ? compare(x[key], y[key]) : x[key] === y[key];
        });
    }
    exports.distinctUntilKeyChanged = distinctUntilKeyChanged;

});
System.registerDynamic("rxjs/internal/operators/elementAt", ["rxjs/internal/util/ArgumentOutOfRangeError", "rxjs/internal/operators/filter", "rxjs/internal/operators/throwIfEmpty", "rxjs/internal/operators/defaultIfEmpty", "rxjs/internal/operators/take"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArgumentOutOfRangeError_1 = $__require("rxjs/internal/util/ArgumentOutOfRangeError");
    var filter_1 = $__require("rxjs/internal/operators/filter");
    var throwIfEmpty_1 = $__require("rxjs/internal/operators/throwIfEmpty");
    var defaultIfEmpty_1 = $__require("rxjs/internal/operators/defaultIfEmpty");
    var take_1 = $__require("rxjs/internal/operators/take");
    function elementAt(index, defaultValue) {
        if (index < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
        }
        var hasDefaultValue = arguments.length >= 2;
        return function (source) {
            return source.pipe(filter_1.filter(function (v, i) {
                return i === index;
            }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () {
                return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
            }));
        };
    }
    exports.elementAt = elementAt;

});
System.registerDynamic("rxjs/internal/operators/endWith", ["rxjs/internal/observable/fromArray", "rxjs/internal/observable/scalar", "rxjs/internal/observable/empty", "rxjs/internal/observable/concat", "rxjs/internal/util/isScheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var fromArray_1 = $__require("rxjs/internal/observable/fromArray");
    var scalar_1 = $__require("rxjs/internal/observable/scalar");
    var empty_1 = $__require("rxjs/internal/observable/empty");
    var concat_1 = $__require("rxjs/internal/observable/concat");
    var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
    function endWith() {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        return function (source) {
            var scheduler = array[array.length - 1];
            if (isScheduler_1.isScheduler(scheduler)) {
                array.pop();
            } else {
                scheduler = null;
            }
            var len = array.length;
            if (len === 1 && !scheduler) {
                return concat_1.concat(source, scalar_1.scalar(array[0]));
            } else if (len > 0) {
                return concat_1.concat(source, fromArray_1.fromArray(array, scheduler));
            } else {
                return concat_1.concat(source, empty_1.empty(scheduler));
            }
        };
    }
    exports.endWith = endWith;

});
System.registerDynamic("rxjs/internal/operators/every", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function every(predicate, thisArg) {
        return function (source) {
            return source.lift(new EveryOperator(predicate, thisArg, source));
        };
    }
    exports.every = every;
    var EveryOperator = function () {
        function EveryOperator(predicate, thisArg, source) {
            this.predicate = predicate;
            this.thisArg = thisArg;
            this.source = source;
        }
        EveryOperator.prototype.call = function (observer, source) {
            return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
        };
        return EveryOperator;
    }();
    var EverySubscriber = function (_super) {
        __extends(EverySubscriber, _super);
        function EverySubscriber(destination, predicate, thisArg, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.thisArg = thisArg;
            _this.source = source;
            _this.index = 0;
            _this.thisArg = thisArg || _this;
            return _this;
        }
        EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
            this.destination.next(everyValueMatch);
            this.destination.complete();
        };
        EverySubscriber.prototype._next = function (value) {
            var result = false;
            try {
                result = this.predicate.call(this.thisArg, value, this.index++, this.source);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            if (!result) {
                this.notifyComplete(false);
            }
        };
        EverySubscriber.prototype._complete = function () {
            this.notifyComplete(true);
        };
        return EverySubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/exhaust", ["rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function exhaust() {
        return function (source) {
            return source.lift(new SwitchFirstOperator());
        };
    }
    exports.exhaust = exhaust;
    var SwitchFirstOperator = function () {
        function SwitchFirstOperator() {}
        SwitchFirstOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SwitchFirstSubscriber(subscriber));
        };
        return SwitchFirstOperator;
    }();
    var SwitchFirstSubscriber = function (_super) {
        __extends(SwitchFirstSubscriber, _super);
        function SwitchFirstSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.hasCompleted = false;
            _this.hasSubscription = false;
            return _this;
        }
        SwitchFirstSubscriber.prototype._next = function (value) {
            if (!this.hasSubscription) {
                this.hasSubscription = true;
                this.add(subscribeToResult_1.subscribeToResult(this, value));
            }
        };
        SwitchFirstSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (!this.hasSubscription) {
                this.destination.complete();
            }
        };
        SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
            this.remove(innerSub);
            this.hasSubscription = false;
            if (this.hasCompleted) {
                this.destination.complete();
            }
        };
        return SwitchFirstSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/exhaustMap", ["rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult", "rxjs/internal/operators/map", "rxjs/internal/observable/from"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    var map_1 = $__require("rxjs/internal/operators/map");
    var from_1 = $__require("rxjs/internal/observable/from");
    function exhaustMap(project, resultSelector) {
        if (resultSelector) {
            return function (source) {
                return source.pipe(exhaustMap(function (a, i) {
                    return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) {
                        return resultSelector(a, b, i, ii);
                    }));
                }));
            };
        }
        return function (source) {
            return source.lift(new ExhauseMapOperator(project));
        };
    }
    exports.exhaustMap = exhaustMap;
    var ExhauseMapOperator = function () {
        function ExhauseMapOperator(project) {
            this.project = project;
        }
        ExhauseMapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
        };
        return ExhauseMapOperator;
    }();
    var ExhaustMapSubscriber = function (_super) {
        __extends(ExhaustMapSubscriber, _super);
        function ExhaustMapSubscriber(destination, project) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.hasSubscription = false;
            _this.hasCompleted = false;
            _this.index = 0;
            return _this;
        }
        ExhaustMapSubscriber.prototype._next = function (value) {
            if (!this.hasSubscription) {
                this.tryNext(value);
            }
        };
        ExhaustMapSubscriber.prototype.tryNext = function (value) {
            var index = this.index++;
            var destination = this.destination;
            try {
                var result = this.project(value, index);
                this.hasSubscription = true;
                this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
            } catch (err) {
                destination.error(err);
            }
        };
        ExhaustMapSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (!this.hasSubscription) {
                this.destination.complete();
            }
        };
        ExhaustMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        ExhaustMapSubscriber.prototype.notifyError = function (err) {
            this.destination.error(err);
        };
        ExhaustMapSubscriber.prototype.notifyComplete = function (innerSub) {
            this.remove(innerSub);
            this.hasSubscription = false;
            if (this.hasCompleted) {
                this.destination.complete();
            }
        };
        return ExhaustMapSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/expand", ["rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function expand(project, concurrent, scheduler) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        if (scheduler === void 0) {
            scheduler = undefined;
        }
        concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
        return function (source) {
            return source.lift(new ExpandOperator(project, concurrent, scheduler));
        };
    }
    exports.expand = expand;
    var ExpandOperator = function () {
        function ExpandOperator(project, concurrent, scheduler) {
            this.project = project;
            this.concurrent = concurrent;
            this.scheduler = scheduler;
        }
        ExpandOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
        };
        return ExpandOperator;
    }();
    exports.ExpandOperator = ExpandOperator;
    var ExpandSubscriber = function (_super) {
        __extends(ExpandSubscriber, _super);
        function ExpandSubscriber(destination, project, concurrent, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.concurrent = concurrent;
            _this.scheduler = scheduler;
            _this.index = 0;
            _this.active = 0;
            _this.hasCompleted = false;
            if (concurrent < Number.POSITIVE_INFINITY) {
                _this.buffer = [];
            }
            return _this;
        }
        ExpandSubscriber.dispatch = function (arg) {
            var subscriber = arg.subscriber,
                result = arg.result,
                value = arg.value,
                index = arg.index;
            subscriber.subscribeToProjection(result, value, index);
        };
        ExpandSubscriber.prototype._next = function (value) {
            var destination = this.destination;
            if (destination.closed) {
                this._complete();
                return;
            }
            var index = this.index++;
            if (this.active < this.concurrent) {
                destination.next(value);
                var result = tryCatch_1.tryCatch(this.project)(value, index);
                if (result === errorObject_1.errorObject) {
                    destination.error(errorObject_1.errorObject.e);
                } else if (!this.scheduler) {
                    this.subscribeToProjection(result, value, index);
                } else {
                    var state = { subscriber: this, result: result, value: value, index: index };
                    this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
                }
            } else {
                this.buffer.push(value);
            }
        };
        ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
            this.active++;
            this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
        };
        ExpandSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.hasCompleted && this.active === 0) {
                this.destination.complete();
            }
        };
        ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this._next(innerValue);
        };
        ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            this.remove(innerSub);
            this.active--;
            if (buffer && buffer.length > 0) {
                this._next(buffer.shift());
            }
            if (this.hasCompleted && this.active === 0) {
                this.destination.complete();
            }
        };
        return ExpandSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
    exports.ExpandSubscriber = ExpandSubscriber;

});
System.registerDynamic("rxjs/internal/operators/finalize", ["rxjs/internal/Subscriber", "rxjs/internal/Subscription"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    function finalize(callback) {
        return function (source) {
            return source.lift(new FinallyOperator(callback));
        };
    }
    exports.finalize = finalize;
    var FinallyOperator = function () {
        function FinallyOperator(callback) {
            this.callback = callback;
        }
        FinallyOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new FinallySubscriber(subscriber, this.callback));
        };
        return FinallyOperator;
    }();
    var FinallySubscriber = function (_super) {
        __extends(FinallySubscriber, _super);
        function FinallySubscriber(destination, callback) {
            var _this = _super.call(this, destination) || this;
            _this.add(new Subscription_1.Subscription(callback));
            return _this;
        }
        return FinallySubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/find", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function find(predicate, thisArg) {
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate is not a function');
        }
        return function (source) {
            return source.lift(new FindValueOperator(predicate, source, false, thisArg));
        };
    }
    exports.find = find;
    var FindValueOperator = function () {
        function FindValueOperator(predicate, source, yieldIndex, thisArg) {
            this.predicate = predicate;
            this.source = source;
            this.yieldIndex = yieldIndex;
            this.thisArg = thisArg;
        }
        FindValueOperator.prototype.call = function (observer, source) {
            return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
        };
        return FindValueOperator;
    }();
    exports.FindValueOperator = FindValueOperator;
    var FindValueSubscriber = function (_super) {
        __extends(FindValueSubscriber, _super);
        function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.source = source;
            _this.yieldIndex = yieldIndex;
            _this.thisArg = thisArg;
            _this.index = 0;
            return _this;
        }
        FindValueSubscriber.prototype.notifyComplete = function (value) {
            var destination = this.destination;
            destination.next(value);
            destination.complete();
        };
        FindValueSubscriber.prototype._next = function (value) {
            var _a = this,
                predicate = _a.predicate,
                thisArg = _a.thisArg;
            var index = this.index++;
            try {
                var result = predicate.call(thisArg || this, value, index, this.source);
                if (result) {
                    this.notifyComplete(this.yieldIndex ? index : value);
                }
            } catch (err) {
                this.destination.error(err);
            }
        };
        FindValueSubscriber.prototype._complete = function () {
            this.notifyComplete(this.yieldIndex ? -1 : undefined);
        };
        return FindValueSubscriber;
    }(Subscriber_1.Subscriber);
    exports.FindValueSubscriber = FindValueSubscriber;

});
System.registerDynamic("rxjs/internal/operators/findIndex", ["rxjs/internal/operators/find"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var find_1 = $__require("rxjs/internal/operators/find");
    function findIndex(predicate, thisArg) {
        return function (source) {
            return source.lift(new find_1.FindValueOperator(predicate, source, true, thisArg));
        };
    }
    exports.findIndex = findIndex;

});
System.registerDynamic("rxjs/internal/operators/first", ["rxjs/internal/util/EmptyError", "rxjs/internal/operators/filter", "rxjs/internal/operators/take", "rxjs/internal/operators/defaultIfEmpty", "rxjs/internal/operators/throwIfEmpty", "rxjs/internal/util/identity"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmptyError_1 = $__require("rxjs/internal/util/EmptyError");
    var filter_1 = $__require("rxjs/internal/operators/filter");
    var take_1 = $__require("rxjs/internal/operators/take");
    var defaultIfEmpty_1 = $__require("rxjs/internal/operators/defaultIfEmpty");
    var throwIfEmpty_1 = $__require("rxjs/internal/operators/throwIfEmpty");
    var identity_1 = $__require("rxjs/internal/util/identity");
    function first(predicate, defaultValue) {
        var hasDefaultValue = arguments.length >= 2;
        return function (source) {
            return source.pipe(predicate ? filter_1.filter(function (v, i) {
                return predicate(v, i, source);
            }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () {
                return new EmptyError_1.EmptyError();
            }));
        };
    }
    exports.first = first;

});
System.registerDynamic("rxjs/internal/operators/groupBy", ["rxjs/internal/Subscriber", "rxjs/internal/Subscription", "rxjs/internal/Observable", "rxjs/internal/Subject"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var Observable_1 = $__require("rxjs/internal/Observable");
    var Subject_1 = $__require("rxjs/internal/Subject");
    function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
        return function (source) {
            return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
        };
    }
    exports.groupBy = groupBy;
    var GroupByOperator = function () {
        function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
            this.keySelector = keySelector;
            this.elementSelector = elementSelector;
            this.durationSelector = durationSelector;
            this.subjectSelector = subjectSelector;
        }
        GroupByOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
        };
        return GroupByOperator;
    }();
    var GroupBySubscriber = function (_super) {
        __extends(GroupBySubscriber, _super);
        function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
            var _this = _super.call(this, destination) || this;
            _this.keySelector = keySelector;
            _this.elementSelector = elementSelector;
            _this.durationSelector = durationSelector;
            _this.subjectSelector = subjectSelector;
            _this.groups = null;
            _this.attemptedToUnsubscribe = false;
            _this.count = 0;
            return _this;
        }
        GroupBySubscriber.prototype._next = function (value) {
            var key;
            try {
                key = this.keySelector(value);
            } catch (err) {
                this.error(err);
                return;
            }
            this._group(value, key);
        };
        GroupBySubscriber.prototype._group = function (value, key) {
            var groups = this.groups;
            if (!groups) {
                groups = this.groups = new Map();
            }
            var group = groups.get(key);
            var element;
            if (this.elementSelector) {
                try {
                    element = this.elementSelector(value);
                } catch (err) {
                    this.error(err);
                }
            } else {
                element = value;
            }
            if (!group) {
                group = this.subjectSelector ? this.subjectSelector() : new Subject_1.Subject();
                groups.set(key, group);
                var groupedObservable = new GroupedObservable(key, group, this);
                this.destination.next(groupedObservable);
                if (this.durationSelector) {
                    var duration = void 0;
                    try {
                        duration = this.durationSelector(new GroupedObservable(key, group));
                    } catch (err) {
                        this.error(err);
                        return;
                    }
                    this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
                }
            }
            if (!group.closed) {
                group.next(element);
            }
        };
        GroupBySubscriber.prototype._error = function (err) {
            var groups = this.groups;
            if (groups) {
                groups.forEach(function (group, key) {
                    group.error(err);
                });
                groups.clear();
            }
            this.destination.error(err);
        };
        GroupBySubscriber.prototype._complete = function () {
            var groups = this.groups;
            if (groups) {
                groups.forEach(function (group, key) {
                    group.complete();
                });
                groups.clear();
            }
            this.destination.complete();
        };
        GroupBySubscriber.prototype.removeGroup = function (key) {
            this.groups.delete(key);
        };
        GroupBySubscriber.prototype.unsubscribe = function () {
            if (!this.closed) {
                this.attemptedToUnsubscribe = true;
                if (this.count === 0) {
                    _super.prototype.unsubscribe.call(this);
                }
            }
        };
        return GroupBySubscriber;
    }(Subscriber_1.Subscriber);
    var GroupDurationSubscriber = function (_super) {
        __extends(GroupDurationSubscriber, _super);
        function GroupDurationSubscriber(key, group, parent) {
            var _this = _super.call(this, group) || this;
            _this.key = key;
            _this.group = group;
            _this.parent = parent;
            return _this;
        }
        GroupDurationSubscriber.prototype._next = function (value) {
            this.complete();
        };
        GroupDurationSubscriber.prototype._unsubscribe = function () {
            var _a = this,
                parent = _a.parent,
                key = _a.key;
            this.key = this.parent = null;
            if (parent) {
                parent.removeGroup(key);
            }
        };
        return GroupDurationSubscriber;
    }(Subscriber_1.Subscriber);
    var GroupedObservable = function (_super) {
        __extends(GroupedObservable, _super);
        function GroupedObservable(key, groupSubject, refCountSubscription) {
            var _this = _super.call(this) || this;
            _this.key = key;
            _this.groupSubject = groupSubject;
            _this.refCountSubscription = refCountSubscription;
            return _this;
        }
        GroupedObservable.prototype._subscribe = function (subscriber) {
            var subscription = new Subscription_1.Subscription();
            var _a = this,
                refCountSubscription = _a.refCountSubscription,
                groupSubject = _a.groupSubject;
            if (refCountSubscription && !refCountSubscription.closed) {
                subscription.add(new InnerRefCountSubscription(refCountSubscription));
            }
            subscription.add(groupSubject.subscribe(subscriber));
            return subscription;
        };
        return GroupedObservable;
    }(Observable_1.Observable);
    exports.GroupedObservable = GroupedObservable;
    var InnerRefCountSubscription = function (_super) {
        __extends(InnerRefCountSubscription, _super);
        function InnerRefCountSubscription(parent) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            parent.count++;
            return _this;
        }
        InnerRefCountSubscription.prototype.unsubscribe = function () {
            var parent = this.parent;
            if (!parent.closed && !this.closed) {
                _super.prototype.unsubscribe.call(this);
                parent.count -= 1;
                if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                    parent.unsubscribe();
                }
            }
        };
        return InnerRefCountSubscription;
    }(Subscription_1.Subscription);

});
System.registerDynamic("rxjs/internal/operators/ignoreElements", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function ignoreElements() {
        return function ignoreElementsOperatorFunction(source) {
            return source.lift(new IgnoreElementsOperator());
        };
    }
    exports.ignoreElements = ignoreElements;
    var IgnoreElementsOperator = function () {
        function IgnoreElementsOperator() {}
        IgnoreElementsOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new IgnoreElementsSubscriber(subscriber));
        };
        return IgnoreElementsOperator;
    }();
    var IgnoreElementsSubscriber = function (_super) {
        __extends(IgnoreElementsSubscriber, _super);
        function IgnoreElementsSubscriber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IgnoreElementsSubscriber.prototype._next = function (unused) {};
        return IgnoreElementsSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/isEmpty", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function isEmpty() {
        return function (source) {
            return source.lift(new IsEmptyOperator());
        };
    }
    exports.isEmpty = isEmpty;
    var IsEmptyOperator = function () {
        function IsEmptyOperator() {}
        IsEmptyOperator.prototype.call = function (observer, source) {
            return source.subscribe(new IsEmptySubscriber(observer));
        };
        return IsEmptyOperator;
    }();
    var IsEmptySubscriber = function (_super) {
        __extends(IsEmptySubscriber, _super);
        function IsEmptySubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
            var destination = this.destination;
            destination.next(isEmpty);
            destination.complete();
        };
        IsEmptySubscriber.prototype._next = function (value) {
            this.notifyComplete(false);
        };
        IsEmptySubscriber.prototype._complete = function () {
            this.notifyComplete(true);
        };
        return IsEmptySubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/last", ["rxjs/internal/util/EmptyError", "rxjs/internal/operators/filter", "rxjs/internal/operators/takeLast", "rxjs/internal/operators/throwIfEmpty", "rxjs/internal/operators/defaultIfEmpty", "rxjs/internal/util/identity"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmptyError_1 = $__require("rxjs/internal/util/EmptyError");
    var filter_1 = $__require("rxjs/internal/operators/filter");
    var takeLast_1 = $__require("rxjs/internal/operators/takeLast");
    var throwIfEmpty_1 = $__require("rxjs/internal/operators/throwIfEmpty");
    var defaultIfEmpty_1 = $__require("rxjs/internal/operators/defaultIfEmpty");
    var identity_1 = $__require("rxjs/internal/util/identity");
    function last(predicate, defaultValue) {
        var hasDefaultValue = arguments.length >= 2;
        return function (source) {
            return source.pipe(predicate ? filter_1.filter(function (v, i) {
                return predicate(v, i, source);
            }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () {
                return new EmptyError_1.EmptyError();
            }));
        };
    }
    exports.last = last;

});
System.registerDynamic("rxjs/internal/operators/mapTo", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function mapTo(value) {
        return function (source) {
            return source.lift(new MapToOperator(value));
        };
    }
    exports.mapTo = mapTo;
    var MapToOperator = function () {
        function MapToOperator(value) {
            this.value = value;
        }
        MapToOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MapToSubscriber(subscriber, this.value));
        };
        return MapToOperator;
    }();
    var MapToSubscriber = function (_super) {
        __extends(MapToSubscriber, _super);
        function MapToSubscriber(destination, value) {
            var _this = _super.call(this, destination) || this;
            _this.value = value;
            return _this;
        }
        MapToSubscriber.prototype._next = function (x) {
            this.destination.next(this.value);
        };
        return MapToSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/materialize", ["rxjs/internal/Subscriber", "rxjs/internal/Notification"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var Notification_1 = $__require("rxjs/internal/Notification");
    function materialize() {
        return function materializeOperatorFunction(source) {
            return source.lift(new MaterializeOperator());
        };
    }
    exports.materialize = materialize;
    var MaterializeOperator = function () {
        function MaterializeOperator() {}
        MaterializeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MaterializeSubscriber(subscriber));
        };
        return MaterializeOperator;
    }();
    var MaterializeSubscriber = function (_super) {
        __extends(MaterializeSubscriber, _super);
        function MaterializeSubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        MaterializeSubscriber.prototype._next = function (value) {
            this.destination.next(Notification_1.Notification.createNext(value));
        };
        MaterializeSubscriber.prototype._error = function (err) {
            var destination = this.destination;
            destination.next(Notification_1.Notification.createError(err));
            destination.complete();
        };
        MaterializeSubscriber.prototype._complete = function () {
            var destination = this.destination;
            destination.next(Notification_1.Notification.createComplete());
            destination.complete();
        };
        return MaterializeSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/max", ["rxjs/internal/operators/reduce"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var reduce_1 = $__require("rxjs/internal/operators/reduce");
    function max(comparer) {
        var max = typeof comparer === 'function' ? function (x, y) {
            return comparer(x, y) > 0 ? x : y;
        } : function (x, y) {
            return x > y ? x : y;
        };
        return reduce_1.reduce(max);
    }
    exports.max = max;

});
System.registerDynamic("rxjs/internal/observable/merge", ["rxjs/internal/Observable", "rxjs/internal/util/isScheduler", "rxjs/internal/operators/mergeAll", "rxjs/internal/observable/fromArray"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
    var mergeAll_1 = $__require("rxjs/internal/operators/mergeAll");
    var fromArray_1 = $__require("rxjs/internal/observable/fromArray");
    function merge() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        var concurrent = Number.POSITIVE_INFINITY;
        var scheduler = null;
        var last = observables[observables.length - 1];
        if (isScheduler_1.isScheduler(last)) {
            scheduler = observables.pop();
            if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
                concurrent = observables.pop();
            }
        } else if (typeof last === 'number') {
            concurrent = observables.pop();
        }
        if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
            return observables[0];
        }
        return mergeAll_1.mergeAll(concurrent)(fromArray_1.fromArray(observables, scheduler));
    }
    exports.merge = merge;

});
System.registerDynamic("rxjs/internal/operators/merge", ["rxjs/internal/observable/merge"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var merge_1 = $__require("rxjs/internal/observable/merge");
    function merge() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return function (source) {
            return source.lift.call(merge_1.merge.apply(void 0, [source].concat(observables)));
        };
    }
    exports.merge = merge;

});
System.registerDynamic("rxjs/internal/operators/mergeMapTo", ["rxjs/internal/operators/mergeMap"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var mergeMap_1 = $__require("rxjs/internal/operators/mergeMap");
    function mergeMapTo(innerObservable, resultSelector, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        if (typeof resultSelector === 'function') {
            return mergeMap_1.mergeMap(function () {
                return innerObservable;
            }, resultSelector, concurrent);
        }
        if (typeof resultSelector === 'number') {
            concurrent = resultSelector;
        }
        return mergeMap_1.mergeMap(function () {
            return innerObservable;
        }, concurrent);
    }
    exports.mergeMapTo = mergeMapTo;

});
System.registerDynamic("rxjs/internal/operators/mergeScan", ["rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject", "rxjs/internal/util/subscribeToResult", "rxjs/internal/OuterSubscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    function mergeScan(accumulator, seed, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        return function (source) {
            return source.lift(new MergeScanOperator(accumulator, seed, concurrent));
        };
    }
    exports.mergeScan = mergeScan;
    var MergeScanOperator = function () {
        function MergeScanOperator(accumulator, seed, concurrent) {
            this.accumulator = accumulator;
            this.seed = seed;
            this.concurrent = concurrent;
        }
        MergeScanOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
        };
        return MergeScanOperator;
    }();
    exports.MergeScanOperator = MergeScanOperator;
    var MergeScanSubscriber = function (_super) {
        __extends(MergeScanSubscriber, _super);
        function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
            var _this = _super.call(this, destination) || this;
            _this.accumulator = accumulator;
            _this.acc = acc;
            _this.concurrent = concurrent;
            _this.hasValue = false;
            _this.hasCompleted = false;
            _this.buffer = [];
            _this.active = 0;
            _this.index = 0;
            return _this;
        }
        MergeScanSubscriber.prototype._next = function (value) {
            if (this.active < this.concurrent) {
                var index = this.index++;
                var ish = tryCatch_1.tryCatch(this.accumulator)(this.acc, value);
                var destination = this.destination;
                if (ish === errorObject_1.errorObject) {
                    destination.error(errorObject_1.errorObject.e);
                } else {
                    this.active++;
                    this._innerSub(ish, value, index);
                }
            } else {
                this.buffer.push(value);
            }
        };
        MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
            this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
        };
        MergeScanSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.active === 0 && this.buffer.length === 0) {
                if (this.hasValue === false) {
                    this.destination.next(this.acc);
                }
                this.destination.complete();
            }
        };
        MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var destination = this.destination;
            this.acc = innerValue;
            this.hasValue = true;
            destination.next(innerValue);
        };
        MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            this.remove(innerSub);
            this.active--;
            if (buffer.length > 0) {
                this._next(buffer.shift());
            } else if (this.active === 0 && this.hasCompleted) {
                if (this.hasValue === false) {
                    this.destination.next(this.acc);
                }
                this.destination.complete();
            }
        };
        return MergeScanSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
    exports.MergeScanSubscriber = MergeScanSubscriber;

});
System.registerDynamic("rxjs/internal/operators/min", ["rxjs/internal/operators/reduce"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var reduce_1 = $__require("rxjs/internal/operators/reduce");
    function min(comparer) {
        var min = typeof comparer === 'function' ? function (x, y) {
            return comparer(x, y) < 0 ? x : y;
        } : function (x, y) {
            return x < y ? x : y;
        };
        return reduce_1.reduce(min);
    }
    exports.min = min;

});
System.registerDynamic("rxjs/internal/operators/onErrorResumeNext", ["rxjs/internal/observable/from", "rxjs/internal/util/isArray", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var from_1 = $__require("rxjs/internal/observable/from");
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function onErrorResumeNext() {
        var nextSources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nextSources[_i] = arguments[_i];
        }
        if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
            nextSources = nextSources[0];
        }
        return function (source) {
            return source.lift(new OnErrorResumeNextOperator(nextSources));
        };
    }
    exports.onErrorResumeNext = onErrorResumeNext;
    function onErrorResumeNextStatic() {
        var nextSources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nextSources[_i] = arguments[_i];
        }
        var source = null;
        if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
            nextSources = nextSources[0];
        }
        source = nextSources.shift();
        return from_1.from(source, null).lift(new OnErrorResumeNextOperator(nextSources));
    }
    exports.onErrorResumeNextStatic = onErrorResumeNextStatic;
    var OnErrorResumeNextOperator = function () {
        function OnErrorResumeNextOperator(nextSources) {
            this.nextSources = nextSources;
        }
        OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
        };
        return OnErrorResumeNextOperator;
    }();
    var OnErrorResumeNextSubscriber = function (_super) {
        __extends(OnErrorResumeNextSubscriber, _super);
        function OnErrorResumeNextSubscriber(destination, nextSources) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.nextSources = nextSources;
            return _this;
        }
        OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
            this.subscribeToNextSource();
        };
        OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
            this.subscribeToNextSource();
        };
        OnErrorResumeNextSubscriber.prototype._error = function (err) {
            this.subscribeToNextSource();
        };
        OnErrorResumeNextSubscriber.prototype._complete = function () {
            this.subscribeToNextSource();
        };
        OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
            var next = this.nextSources.shift();
            if (next) {
                this.add(subscribeToResult_1.subscribeToResult(this, next));
            } else {
                this.destination.complete();
            }
        };
        return OnErrorResumeNextSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/pairwise", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function pairwise() {
        return function (source) {
            return source.lift(new PairwiseOperator());
        };
    }
    exports.pairwise = pairwise;
    var PairwiseOperator = function () {
        function PairwiseOperator() {}
        PairwiseOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new PairwiseSubscriber(subscriber));
        };
        return PairwiseOperator;
    }();
    var PairwiseSubscriber = function (_super) {
        __extends(PairwiseSubscriber, _super);
        function PairwiseSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.hasPrev = false;
            return _this;
        }
        PairwiseSubscriber.prototype._next = function (value) {
            if (this.hasPrev) {
                this.destination.next([this.prev, value]);
            } else {
                this.hasPrev = true;
            }
            this.prev = value;
        };
        return PairwiseSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/util/not", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    function not(pred, thisArg) {
        function notPred() {
            return !notPred.pred.apply(notPred.thisArg, arguments);
        }
        notPred.pred = pred;
        notPred.thisArg = thisArg;
        return notPred;
    }
    exports.not = not;

});
System.registerDynamic("rxjs/internal/operators/filter", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function filter(predicate, thisArg) {
        return function filterOperatorFunction(source) {
            return source.lift(new FilterOperator(predicate, thisArg));
        };
    }
    exports.filter = filter;
    var FilterOperator = function () {
        function FilterOperator(predicate, thisArg) {
            this.predicate = predicate;
            this.thisArg = thisArg;
        }
        FilterOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
        };
        return FilterOperator;
    }();
    var FilterSubscriber = function (_super) {
        __extends(FilterSubscriber, _super);
        function FilterSubscriber(destination, predicate, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.thisArg = thisArg;
            _this.count = 0;
            return _this;
        }
        FilterSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.predicate.call(this.thisArg, value, this.count++);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            if (result) {
                this.destination.next(value);
            }
        };
        return FilterSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/partition", ["rxjs/internal/util/not", "rxjs/internal/operators/filter"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var not_1 = $__require("rxjs/internal/util/not");
    var filter_1 = $__require("rxjs/internal/operators/filter");
    function partition(predicate, thisArg) {
        return function (source) {
            return [filter_1.filter(predicate, thisArg)(source), filter_1.filter(not_1.not(predicate, thisArg))(source)];
        };
    }
    exports.partition = partition;

});
System.registerDynamic("rxjs/internal/operators/pluck", ["rxjs/internal/operators/map"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var map_1 = $__require("rxjs/internal/operators/map");
    function pluck() {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        var length = properties.length;
        if (length === 0) {
            throw new Error('list of properties cannot be empty.');
        }
        return function (source) {
            return map_1.map(plucker(properties, length))(source);
        };
    }
    exports.pluck = pluck;
    function plucker(props, length) {
        var mapper = function (x) {
            var currentProp = x;
            for (var i = 0; i < length; i++) {
                var p = currentProp[props[i]];
                if (typeof p !== 'undefined') {
                    currentProp = p;
                } else {
                    return undefined;
                }
            }
            return currentProp;
        };
        return mapper;
    }

});
System.registerDynamic("rxjs/internal/operators/publish", ["rxjs/internal/Subject", "rxjs/internal/operators/multicast"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var multicast_1 = $__require("rxjs/internal/operators/multicast");
    function publish(selector) {
        return selector ? multicast_1.multicast(function () {
            return new Subject_1.Subject();
        }, selector) : multicast_1.multicast(new Subject_1.Subject());
    }
    exports.publish = publish;

});
System.registerDynamic("rxjs/internal/BehaviorSubject", ["rxjs/internal/Subject", "rxjs/internal/util/ObjectUnsubscribedError"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var ObjectUnsubscribedError_1 = $__require("rxjs/internal/util/ObjectUnsubscribedError");
    var BehaviorSubject = function (_super) {
        __extends(BehaviorSubject, _super);
        function BehaviorSubject(_value) {
            var _this = _super.call(this) || this;
            _this._value = _value;
            return _this;
        }
        Object.defineProperty(BehaviorSubject.prototype, "value", {
            get: function () {
                return this.getValue();
            },
            enumerable: true,
            configurable: true
        });
        BehaviorSubject.prototype._subscribe = function (subscriber) {
            var subscription = _super.prototype._subscribe.call(this, subscriber);
            if (subscription && !subscription.closed) {
                subscriber.next(this._value);
            }
            return subscription;
        };
        BehaviorSubject.prototype.getValue = function () {
            if (this.hasError) {
                throw this.thrownError;
            } else if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            } else {
                return this._value;
            }
        };
        BehaviorSubject.prototype.next = function (value) {
            _super.prototype.next.call(this, this._value = value);
        };
        return BehaviorSubject;
    }(Subject_1.Subject);
    exports.BehaviorSubject = BehaviorSubject;

});
System.registerDynamic("rxjs/internal/operators/publishBehavior", ["rxjs/internal/BehaviorSubject", "rxjs/internal/operators/multicast"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var BehaviorSubject_1 = $__require("rxjs/internal/BehaviorSubject");
    var multicast_1 = $__require("rxjs/internal/operators/multicast");
    function publishBehavior(value) {
        return function (source) {
            return multicast_1.multicast(new BehaviorSubject_1.BehaviorSubject(value))(source);
        };
    }
    exports.publishBehavior = publishBehavior;

});
System.registerDynamic("rxjs/internal/AsyncSubject", ["rxjs/internal/Subject", "rxjs/internal/Subscription"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var AsyncSubject = function (_super) {
        __extends(AsyncSubject, _super);
        function AsyncSubject() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.value = null;
            _this.hasNext = false;
            _this.hasCompleted = false;
            return _this;
        }
        AsyncSubject.prototype._subscribe = function (subscriber) {
            if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription_1.Subscription.EMPTY;
            } else if (this.hasCompleted && this.hasNext) {
                subscriber.next(this.value);
                subscriber.complete();
                return Subscription_1.Subscription.EMPTY;
            }
            return _super.prototype._subscribe.call(this, subscriber);
        };
        AsyncSubject.prototype.next = function (value) {
            if (!this.hasCompleted) {
                this.value = value;
                this.hasNext = true;
            }
        };
        AsyncSubject.prototype.error = function (error) {
            if (!this.hasCompleted) {
                _super.prototype.error.call(this, error);
            }
        };
        AsyncSubject.prototype.complete = function () {
            this.hasCompleted = true;
            if (this.hasNext) {
                _super.prototype.next.call(this, this.value);
            }
            _super.prototype.complete.call(this);
        };
        return AsyncSubject;
    }(Subject_1.Subject);
    exports.AsyncSubject = AsyncSubject;

});
System.registerDynamic("rxjs/internal/operators/publishLast", ["rxjs/internal/AsyncSubject", "rxjs/internal/operators/multicast"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var AsyncSubject_1 = $__require("rxjs/internal/AsyncSubject");
    var multicast_1 = $__require("rxjs/internal/operators/multicast");
    function publishLast() {
        return function (source) {
            return multicast_1.multicast(new AsyncSubject_1.AsyncSubject())(source);
        };
    }
    exports.publishLast = publishLast;

});
System.registerDynamic("rxjs/internal/operators/publishReplay", ["rxjs/internal/ReplaySubject", "rxjs/internal/operators/multicast"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReplaySubject_1 = $__require("rxjs/internal/ReplaySubject");
    var multicast_1 = $__require("rxjs/internal/operators/multicast");
    function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
        if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
            scheduler = selectorOrScheduler;
        }
        var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
        var subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
        return function (source) {
            return multicast_1.multicast(function () {
                return subject;
            }, selector)(source);
        };
    }
    exports.publishReplay = publishReplay;

});
System.registerDynamic("rxjs/internal/observable/race", ["rxjs/internal/util/isArray", "rxjs/internal/observable/fromArray", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    var fromArray_1 = $__require("rxjs/internal/observable/fromArray");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function race() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        if (observables.length === 1) {
            if (isArray_1.isArray(observables[0])) {
                observables = observables[0];
            } else {
                return observables[0];
            }
        }
        return fromArray_1.fromArray(observables, undefined).lift(new RaceOperator());
    }
    exports.race = race;
    var RaceOperator = function () {
        function RaceOperator() {}
        RaceOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new RaceSubscriber(subscriber));
        };
        return RaceOperator;
    }();
    exports.RaceOperator = RaceOperator;
    var RaceSubscriber = function (_super) {
        __extends(RaceSubscriber, _super);
        function RaceSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.hasFirst = false;
            _this.observables = [];
            _this.subscriptions = [];
            return _this;
        }
        RaceSubscriber.prototype._next = function (observable) {
            this.observables.push(observable);
        };
        RaceSubscriber.prototype._complete = function () {
            var observables = this.observables;
            var len = observables.length;
            if (len === 0) {
                this.destination.complete();
            } else {
                for (var i = 0; i < len && !this.hasFirst; i++) {
                    var observable = observables[i];
                    var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
                    if (this.subscriptions) {
                        this.subscriptions.push(subscription);
                    }
                    this.add(subscription);
                }
                this.observables = null;
            }
        };
        RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            if (!this.hasFirst) {
                this.hasFirst = true;
                for (var i = 0; i < this.subscriptions.length; i++) {
                    if (i !== outerIndex) {
                        var subscription = this.subscriptions[i];
                        subscription.unsubscribe();
                        this.remove(subscription);
                    }
                }
                this.subscriptions = null;
            }
            this.destination.next(innerValue);
        };
        return RaceSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
    exports.RaceSubscriber = RaceSubscriber;

});
System.registerDynamic("rxjs/internal/operators/race", ["rxjs/internal/util/isArray", "rxjs/internal/observable/race"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    var race_1 = $__require("rxjs/internal/observable/race");
    function race() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return function raceOperatorFunction(source) {
            if (observables.length === 1 && isArray_1.isArray(observables[0])) {
                observables = observables[0];
            }
            return source.lift.call(race_1.race.apply(void 0, [source].concat(observables)));
        };
    }
    exports.race = race;

});
System.registerDynamic("rxjs/internal/operators/repeat", ["rxjs/internal/Subscriber", "rxjs/internal/observable/empty"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var empty_1 = $__require("rxjs/internal/observable/empty");
    function repeat(count) {
        if (count === void 0) {
            count = -1;
        }
        return function (source) {
            if (count === 0) {
                return empty_1.empty();
            } else if (count < 0) {
                return source.lift(new RepeatOperator(-1, source));
            } else {
                return source.lift(new RepeatOperator(count - 1, source));
            }
        };
    }
    exports.repeat = repeat;
    var RepeatOperator = function () {
        function RepeatOperator(count, source) {
            this.count = count;
            this.source = source;
        }
        RepeatOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
        };
        return RepeatOperator;
    }();
    var RepeatSubscriber = function (_super) {
        __extends(RepeatSubscriber, _super);
        function RepeatSubscriber(destination, count, source) {
            var _this = _super.call(this, destination) || this;
            _this.count = count;
            _this.source = source;
            return _this;
        }
        RepeatSubscriber.prototype.complete = function () {
            if (!this.isStopped) {
                var _a = this,
                    source = _a.source,
                    count = _a.count;
                if (count === 0) {
                    return _super.prototype.complete.call(this);
                } else if (count > -1) {
                    this.count = count - 1;
                }
                source.subscribe(this._unsubscribeAndRecycle());
            }
        };
        return RepeatSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/repeatWhen", ["rxjs/internal/Subject", "rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function repeatWhen(notifier) {
        return function (source) {
            return source.lift(new RepeatWhenOperator(notifier));
        };
    }
    exports.repeatWhen = repeatWhen;
    var RepeatWhenOperator = function () {
        function RepeatWhenOperator(notifier) {
            this.notifier = notifier;
        }
        RepeatWhenOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
        };
        return RepeatWhenOperator;
    }();
    var RepeatWhenSubscriber = function (_super) {
        __extends(RepeatWhenSubscriber, _super);
        function RepeatWhenSubscriber(destination, notifier, source) {
            var _this = _super.call(this, destination) || this;
            _this.notifier = notifier;
            _this.source = source;
            _this.sourceIsBeingSubscribedTo = true;
            return _this;
        }
        RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.sourceIsBeingSubscribedTo = true;
            this.source.subscribe(this);
        };
        RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
            if (this.sourceIsBeingSubscribedTo === false) {
                return _super.prototype.complete.call(this);
            }
        };
        RepeatWhenSubscriber.prototype.complete = function () {
            this.sourceIsBeingSubscribedTo = false;
            if (!this.isStopped) {
                if (!this.retries) {
                    this.subscribeToRetries();
                }
                if (!this.retriesSubscription || this.retriesSubscription.closed) {
                    return _super.prototype.complete.call(this);
                }
                this._unsubscribeAndRecycle();
                this.notifications.next();
            }
        };
        RepeatWhenSubscriber.prototype._unsubscribe = function () {
            var _a = this,
                notifications = _a.notifications,
                retriesSubscription = _a.retriesSubscription;
            if (notifications) {
                notifications.unsubscribe();
                this.notifications = null;
            }
            if (retriesSubscription) {
                retriesSubscription.unsubscribe();
                this.retriesSubscription = null;
            }
            this.retries = null;
        };
        RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
            var _unsubscribe = this._unsubscribe;
            this._unsubscribe = null;
            _super.prototype._unsubscribeAndRecycle.call(this);
            this._unsubscribe = _unsubscribe;
            return this;
        };
        RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
            this.notifications = new Subject_1.Subject();
            var retries = tryCatch_1.tryCatch(this.notifier)(this.notifications);
            if (retries === errorObject_1.errorObject) {
                return _super.prototype.complete.call(this);
            }
            this.retries = retries;
            this.retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
        };
        return RepeatWhenSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/retry", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function retry(count) {
        if (count === void 0) {
            count = -1;
        }
        return function (source) {
            return source.lift(new RetryOperator(count, source));
        };
    }
    exports.retry = retry;
    var RetryOperator = function () {
        function RetryOperator(count, source) {
            this.count = count;
            this.source = source;
        }
        RetryOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
        };
        return RetryOperator;
    }();
    var RetrySubscriber = function (_super) {
        __extends(RetrySubscriber, _super);
        function RetrySubscriber(destination, count, source) {
            var _this = _super.call(this, destination) || this;
            _this.count = count;
            _this.source = source;
            return _this;
        }
        RetrySubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _a = this,
                    source = _a.source,
                    count = _a.count;
                if (count === 0) {
                    return _super.prototype.error.call(this, err);
                } else if (count > -1) {
                    this.count = count - 1;
                }
                source.subscribe(this._unsubscribeAndRecycle());
            }
        };
        return RetrySubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/retryWhen", ["rxjs/internal/Subject", "rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function retryWhen(notifier) {
        return function (source) {
            return source.lift(new RetryWhenOperator(notifier, source));
        };
    }
    exports.retryWhen = retryWhen;
    var RetryWhenOperator = function () {
        function RetryWhenOperator(notifier, source) {
            this.notifier = notifier;
            this.source = source;
        }
        RetryWhenOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
        };
        return RetryWhenOperator;
    }();
    var RetryWhenSubscriber = function (_super) {
        __extends(RetryWhenSubscriber, _super);
        function RetryWhenSubscriber(destination, notifier, source) {
            var _this = _super.call(this, destination) || this;
            _this.notifier = notifier;
            _this.source = source;
            return _this;
        }
        RetryWhenSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var errors = this.errors;
                var retries = this.retries;
                var retriesSubscription = this.retriesSubscription;
                if (!retries) {
                    errors = new Subject_1.Subject();
                    retries = tryCatch_1.tryCatch(this.notifier)(errors);
                    if (retries === errorObject_1.errorObject) {
                        return _super.prototype.error.call(this, errorObject_1.errorObject.e);
                    }
                    retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
                } else {
                    this.errors = null;
                    this.retriesSubscription = null;
                }
                this._unsubscribeAndRecycle();
                this.errors = errors;
                this.retries = retries;
                this.retriesSubscription = retriesSubscription;
                errors.next(err);
            }
        };
        RetryWhenSubscriber.prototype._unsubscribe = function () {
            var _a = this,
                errors = _a.errors,
                retriesSubscription = _a.retriesSubscription;
            if (errors) {
                errors.unsubscribe();
                this.errors = null;
            }
            if (retriesSubscription) {
                retriesSubscription.unsubscribe();
                this.retriesSubscription = null;
            }
            this.retries = null;
        };
        RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var _unsubscribe = this._unsubscribe;
            this._unsubscribe = null;
            this._unsubscribeAndRecycle();
            this._unsubscribe = _unsubscribe;
            this.source.subscribe(this);
        };
        return RetryWhenSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/sample", ["rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function sample(notifier) {
        return function (source) {
            return source.lift(new SampleOperator(notifier));
        };
    }
    exports.sample = sample;
    var SampleOperator = function () {
        function SampleOperator(notifier) {
            this.notifier = notifier;
        }
        SampleOperator.prototype.call = function (subscriber, source) {
            var sampleSubscriber = new SampleSubscriber(subscriber);
            var subscription = source.subscribe(sampleSubscriber);
            subscription.add(subscribeToResult_1.subscribeToResult(sampleSubscriber, this.notifier));
            return subscription;
        };
        return SampleOperator;
    }();
    var SampleSubscriber = function (_super) {
        __extends(SampleSubscriber, _super);
        function SampleSubscriber() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hasValue = false;
            return _this;
        }
        SampleSubscriber.prototype._next = function (value) {
            this.value = value;
            this.hasValue = true;
        };
        SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.emitValue();
        };
        SampleSubscriber.prototype.notifyComplete = function () {
            this.emitValue();
        };
        SampleSubscriber.prototype.emitValue = function () {
            if (this.hasValue) {
                this.hasValue = false;
                this.destination.next(this.value);
            }
        };
        return SampleSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/sampleTime", ["rxjs/internal/Subscriber", "rxjs/internal/scheduler/async"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var async_1 = $__require("rxjs/internal/scheduler/async");
    function sampleTime(period, scheduler) {
        if (scheduler === void 0) {
            scheduler = async_1.async;
        }
        return function (source) {
            return source.lift(new SampleTimeOperator(period, scheduler));
        };
    }
    exports.sampleTime = sampleTime;
    var SampleTimeOperator = function () {
        function SampleTimeOperator(period, scheduler) {
            this.period = period;
            this.scheduler = scheduler;
        }
        SampleTimeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
        };
        return SampleTimeOperator;
    }();
    var SampleTimeSubscriber = function (_super) {
        __extends(SampleTimeSubscriber, _super);
        function SampleTimeSubscriber(destination, period, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.period = period;
            _this.scheduler = scheduler;
            _this.hasValue = false;
            _this.add(scheduler.schedule(dispatchNotification, period, { subscriber: _this, period: period }));
            return _this;
        }
        SampleTimeSubscriber.prototype._next = function (value) {
            this.lastValue = value;
            this.hasValue = true;
        };
        SampleTimeSubscriber.prototype.notifyNext = function () {
            if (this.hasValue) {
                this.hasValue = false;
                this.destination.next(this.lastValue);
            }
        };
        return SampleTimeSubscriber;
    }(Subscriber_1.Subscriber);
    function dispatchNotification(state) {
        var subscriber = state.subscriber,
            period = state.period;
        subscriber.notifyNext();
        this.schedule(state, period);
    }

});
System.registerDynamic("rxjs/internal/operators/sequenceEqual", ["rxjs/internal/Subscriber", "rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    function sequenceEqual(compareTo, comparor) {
        return function (source) {
            return source.lift(new SequenceEqualOperator(compareTo, comparor));
        };
    }
    exports.sequenceEqual = sequenceEqual;
    var SequenceEqualOperator = function () {
        function SequenceEqualOperator(compareTo, comparor) {
            this.compareTo = compareTo;
            this.comparor = comparor;
        }
        SequenceEqualOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparor));
        };
        return SequenceEqualOperator;
    }();
    exports.SequenceEqualOperator = SequenceEqualOperator;
    var SequenceEqualSubscriber = function (_super) {
        __extends(SequenceEqualSubscriber, _super);
        function SequenceEqualSubscriber(destination, compareTo, comparor) {
            var _this = _super.call(this, destination) || this;
            _this.compareTo = compareTo;
            _this.comparor = comparor;
            _this._a = [];
            _this._b = [];
            _this._oneComplete = false;
            _this.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));
            return _this;
        }
        SequenceEqualSubscriber.prototype._next = function (value) {
            if (this._oneComplete && this._b.length === 0) {
                this.emit(false);
            } else {
                this._a.push(value);
                this.checkValues();
            }
        };
        SequenceEqualSubscriber.prototype._complete = function () {
            if (this._oneComplete) {
                this.emit(this._a.length === 0 && this._b.length === 0);
            } else {
                this._oneComplete = true;
            }
        };
        SequenceEqualSubscriber.prototype.checkValues = function () {
            var _c = this,
                _a = _c._a,
                _b = _c._b,
                comparor = _c.comparor;
            while (_a.length > 0 && _b.length > 0) {
                var a = _a.shift();
                var b = _b.shift();
                var areEqual = false;
                if (comparor) {
                    areEqual = tryCatch_1.tryCatch(comparor)(a, b);
                    if (areEqual === errorObject_1.errorObject) {
                        this.destination.error(errorObject_1.errorObject.e);
                    }
                } else {
                    areEqual = a === b;
                }
                if (!areEqual) {
                    this.emit(false);
                }
            }
        };
        SequenceEqualSubscriber.prototype.emit = function (value) {
            var destination = this.destination;
            destination.next(value);
            destination.complete();
        };
        SequenceEqualSubscriber.prototype.nextB = function (value) {
            if (this._oneComplete && this._a.length === 0) {
                this.emit(false);
            } else {
                this._b.push(value);
                this.checkValues();
            }
        };
        return SequenceEqualSubscriber;
    }(Subscriber_1.Subscriber);
    exports.SequenceEqualSubscriber = SequenceEqualSubscriber;
    var SequenceEqualCompareToSubscriber = function (_super) {
        __extends(SequenceEqualCompareToSubscriber, _super);
        function SequenceEqualCompareToSubscriber(destination, parent) {
            var _this = _super.call(this, destination) || this;
            _this.parent = parent;
            return _this;
        }
        SequenceEqualCompareToSubscriber.prototype._next = function (value) {
            this.parent.nextB(value);
        };
        SequenceEqualCompareToSubscriber.prototype._error = function (err) {
            this.parent.error(err);
        };
        SequenceEqualCompareToSubscriber.prototype._complete = function () {
            this.parent._complete();
        };
        return SequenceEqualCompareToSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/observable/ConnectableObservable", ["rxjs/internal/Subject", "rxjs/internal/Observable", "rxjs/internal/Subscriber", "rxjs/internal/Subscription", "rxjs/internal/operators/refCount"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var Observable_1 = $__require("rxjs/internal/Observable");
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var refCount_1 = $__require("rxjs/internal/operators/refCount");
    var ConnectableObservable = function (_super) {
        __extends(ConnectableObservable, _super);
        function ConnectableObservable(source, subjectFactory) {
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.subjectFactory = subjectFactory;
            _this._refCount = 0;
            _this._isComplete = false;
            return _this;
        }
        ConnectableObservable.prototype._subscribe = function (subscriber) {
            return this.getSubject().subscribe(subscriber);
        };
        ConnectableObservable.prototype.getSubject = function () {
            var subject = this._subject;
            if (!subject || subject.isStopped) {
                this._subject = this.subjectFactory();
            }
            return this._subject;
        };
        ConnectableObservable.prototype.connect = function () {
            var connection = this._connection;
            if (!connection) {
                this._isComplete = false;
                connection = this._connection = new Subscription_1.Subscription();
                connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));
                if (connection.closed) {
                    this._connection = null;
                    connection = Subscription_1.Subscription.EMPTY;
                } else {
                    this._connection = connection;
                }
            }
            return connection;
        };
        ConnectableObservable.prototype.refCount = function () {
            return refCount_1.refCount()(this);
        };
        return ConnectableObservable;
    }(Observable_1.Observable);
    exports.ConnectableObservable = ConnectableObservable;
    var connectableProto = ConnectableObservable.prototype;
    exports.connectableObservableDescriptor = {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
    };
    var ConnectableSubscriber = function (_super) {
        __extends(ConnectableSubscriber, _super);
        function ConnectableSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        ConnectableSubscriber.prototype._error = function (err) {
            this._unsubscribe();
            _super.prototype._error.call(this, err);
        };
        ConnectableSubscriber.prototype._complete = function () {
            this.connectable._isComplete = true;
            this._unsubscribe();
            _super.prototype._complete.call(this);
        };
        ConnectableSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (connectable) {
                this.connectable = null;
                var connection = connectable._connection;
                connectable._refCount = 0;
                connectable._subject = null;
                connectable._connection = null;
                if (connection) {
                    connection.unsubscribe();
                }
            }
        };
        return ConnectableSubscriber;
    }(Subject_1.SubjectSubscriber);
    var RefCountOperator = function () {
        function RefCountOperator(connectable) {
            this.connectable = connectable;
        }
        RefCountOperator.prototype.call = function (subscriber, source) {
            var connectable = this.connectable;
            connectable._refCount++;
            var refCounter = new RefCountSubscriber(subscriber, connectable);
            var subscription = source.subscribe(refCounter);
            if (!refCounter.closed) {
                refCounter.connection = connectable.connect();
            }
            return subscription;
        };
        return RefCountOperator;
    }();
    var RefCountSubscriber = function (_super) {
        __extends(RefCountSubscriber, _super);
        function RefCountSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        RefCountSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (!connectable) {
                this.connection = null;
                return;
            }
            this.connectable = null;
            var refCount = connectable._refCount;
            if (refCount <= 0) {
                this.connection = null;
                return;
            }
            connectable._refCount = refCount - 1;
            if (refCount > 1) {
                this.connection = null;
                return;
            }
            var connection = this.connection;
            var sharedConnection = connectable._connection;
            this.connection = null;
            if (sharedConnection && (!connection || sharedConnection === connection)) {
                sharedConnection.unsubscribe();
            }
        };
        return RefCountSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/multicast", ["rxjs/internal/observable/ConnectableObservable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConnectableObservable_1 = $__require("rxjs/internal/observable/ConnectableObservable");
    function multicast(subjectOrSubjectFactory, selector) {
        return function multicastOperatorFunction(source) {
            var subjectFactory;
            if (typeof subjectOrSubjectFactory === 'function') {
                subjectFactory = subjectOrSubjectFactory;
            } else {
                subjectFactory = function subjectFactory() {
                    return subjectOrSubjectFactory;
                };
            }
            if (typeof selector === 'function') {
                return source.lift(new MulticastOperator(subjectFactory, selector));
            }
            var connectable = Object.create(source, ConnectableObservable_1.connectableObservableDescriptor);
            connectable.source = source;
            connectable.subjectFactory = subjectFactory;
            return connectable;
        };
    }
    exports.multicast = multicast;
    var MulticastOperator = function () {
        function MulticastOperator(subjectFactory, selector) {
            this.subjectFactory = subjectFactory;
            this.selector = selector;
        }
        MulticastOperator.prototype.call = function (subscriber, source) {
            var selector = this.selector;
            var subject = this.subjectFactory();
            var subscription = selector(subject).subscribe(subscriber);
            subscription.add(source.subscribe(subject));
            return subscription;
        };
        return MulticastOperator;
    }();
    exports.MulticastOperator = MulticastOperator;

});
System.registerDynamic("rxjs/internal/operators/refCount", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function refCount() {
        return function refCountOperatorFunction(source) {
            return source.lift(new RefCountOperator(source));
        };
    }
    exports.refCount = refCount;
    var RefCountOperator = function () {
        function RefCountOperator(connectable) {
            this.connectable = connectable;
        }
        RefCountOperator.prototype.call = function (subscriber, source) {
            var connectable = this.connectable;
            connectable._refCount++;
            var refCounter = new RefCountSubscriber(subscriber, connectable);
            var subscription = source.subscribe(refCounter);
            if (!refCounter.closed) {
                refCounter.connection = connectable.connect();
            }
            return subscription;
        };
        return RefCountOperator;
    }();
    var RefCountSubscriber = function (_super) {
        __extends(RefCountSubscriber, _super);
        function RefCountSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        RefCountSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (!connectable) {
                this.connection = null;
                return;
            }
            this.connectable = null;
            var refCount = connectable._refCount;
            if (refCount <= 0) {
                this.connection = null;
                return;
            }
            connectable._refCount = refCount - 1;
            if (refCount > 1) {
                this.connection = null;
                return;
            }
            var connection = this.connection;
            var sharedConnection = connectable._connection;
            this.connection = null;
            if (sharedConnection && (!connection || sharedConnection === connection)) {
                sharedConnection.unsubscribe();
            }
        };
        return RefCountSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/share", ["rxjs/internal/operators/multicast", "rxjs/internal/operators/refCount", "rxjs/internal/Subject"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var multicast_1 = $__require("rxjs/internal/operators/multicast");
    var refCount_1 = $__require("rxjs/internal/operators/refCount");
    var Subject_1 = $__require("rxjs/internal/Subject");
    function shareSubjectFactory() {
        return new Subject_1.Subject();
    }
    function share() {
        return function (source) {
            return refCount_1.refCount()(multicast_1.multicast(shareSubjectFactory)(source));
        };
    }
    exports.share = share;

});
System.registerDynamic("rxjs/internal/scheduler/QueueAction", ["rxjs/internal/scheduler/AsyncAction"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var AsyncAction_1 = $__require("rxjs/internal/scheduler/AsyncAction");
    var QueueAction = function (_super) {
        __extends(QueueAction, _super);
        function QueueAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            return _this;
        }
        QueueAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay > 0) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.delay = delay;
            this.state = state;
            this.scheduler.flush(this);
            return this;
        };
        QueueAction.prototype.execute = function (state, delay) {
            return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
        };
        QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
                return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
            }
            return scheduler.flush(this);
        };
        return QueueAction;
    }(AsyncAction_1.AsyncAction);
    exports.QueueAction = QueueAction;

});
System.registerDynamic("rxjs/internal/scheduler/QueueScheduler", ["rxjs/internal/scheduler/AsyncScheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var AsyncScheduler_1 = $__require("rxjs/internal/scheduler/AsyncScheduler");
    var QueueScheduler = function (_super) {
        __extends(QueueScheduler, _super);
        function QueueScheduler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueueScheduler;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.QueueScheduler = QueueScheduler;

});
System.registerDynamic("rxjs/internal/scheduler/queue", ["rxjs/internal/scheduler/QueueAction", "rxjs/internal/scheduler/QueueScheduler"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var QueueAction_1 = $__require("rxjs/internal/scheduler/QueueAction");
  var QueueScheduler_1 = $__require("rxjs/internal/scheduler/QueueScheduler");
  exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);

});
System.registerDynamic("rxjs/internal/Notification", ["rxjs/internal/observable/empty", "rxjs/internal/observable/of", "rxjs/internal/observable/throwError"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var empty_1 = $__require("rxjs/internal/observable/empty");
    var of_1 = $__require("rxjs/internal/observable/of");
    var throwError_1 = $__require("rxjs/internal/observable/throwError");
    var Notification = function () {
        function Notification(kind, value, error) {
            this.kind = kind;
            this.value = value;
            this.error = error;
            this.hasValue = kind === 'N';
        }
        Notification.prototype.observe = function (observer) {
            switch (this.kind) {
                case 'N':
                    return observer.next && observer.next(this.value);
                case 'E':
                    return observer.error && observer.error(this.error);
                case 'C':
                    return observer.complete && observer.complete();
            }
        };
        Notification.prototype.do = function (next, error, complete) {
            var kind = this.kind;
            switch (kind) {
                case 'N':
                    return next && next(this.value);
                case 'E':
                    return error && error(this.error);
                case 'C':
                    return complete && complete();
            }
        };
        Notification.prototype.accept = function (nextOrObserver, error, complete) {
            if (nextOrObserver && typeof nextOrObserver.next === 'function') {
                return this.observe(nextOrObserver);
            } else {
                return this.do(nextOrObserver, error, complete);
            }
        };
        Notification.prototype.toObservable = function () {
            var kind = this.kind;
            switch (kind) {
                case 'N':
                    return of_1.of(this.value);
                case 'E':
                    return throwError_1.throwError(this.error);
                case 'C':
                    return empty_1.empty();
            }
            throw new Error('unexpected notification kind value');
        };
        Notification.createNext = function (value) {
            if (typeof value !== 'undefined') {
                return new Notification('N', value);
            }
            return Notification.undefinedValueNotification;
        };
        Notification.createError = function (err) {
            return new Notification('E', undefined, err);
        };
        Notification.createComplete = function () {
            return Notification.completeNotification;
        };
        Notification.completeNotification = new Notification('C');
        Notification.undefinedValueNotification = new Notification('N', undefined);
        return Notification;
    }();
    exports.Notification = Notification;

});
System.registerDynamic("rxjs/internal/operators/observeOn", ["rxjs/internal/Subscriber", "rxjs/internal/Notification"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var Notification_1 = $__require("rxjs/internal/Notification");
    function observeOn(scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return function observeOnOperatorFunction(source) {
            return source.lift(new ObserveOnOperator(scheduler, delay));
        };
    }
    exports.observeOn = observeOn;
    var ObserveOnOperator = function () {
        function ObserveOnOperator(scheduler, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            this.scheduler = scheduler;
            this.delay = delay;
        }
        ObserveOnOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
        };
        return ObserveOnOperator;
    }();
    exports.ObserveOnOperator = ObserveOnOperator;
    var ObserveOnSubscriber = function (_super) {
        __extends(ObserveOnSubscriber, _super);
        function ObserveOnSubscriber(destination, scheduler, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            var _this = _super.call(this, destination) || this;
            _this.scheduler = scheduler;
            _this.delay = delay;
            return _this;
        }
        ObserveOnSubscriber.dispatch = function (arg) {
            var notification = arg.notification,
                destination = arg.destination;
            notification.observe(destination);
            this.unsubscribe();
        };
        ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
            this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
        };
        ObserveOnSubscriber.prototype._next = function (value) {
            this.scheduleMessage(Notification_1.Notification.createNext(value));
        };
        ObserveOnSubscriber.prototype._error = function (err) {
            this.scheduleMessage(Notification_1.Notification.createError(err));
        };
        ObserveOnSubscriber.prototype._complete = function () {
            this.scheduleMessage(Notification_1.Notification.createComplete());
        };
        return ObserveOnSubscriber;
    }(Subscriber_1.Subscriber);
    exports.ObserveOnSubscriber = ObserveOnSubscriber;
    var ObserveOnMessage = function () {
        function ObserveOnMessage(notification, destination) {
            this.notification = notification;
            this.destination = destination;
        }
        return ObserveOnMessage;
    }();
    exports.ObserveOnMessage = ObserveOnMessage;

});
System.registerDynamic("rxjs/internal/ReplaySubject", ["rxjs/internal/Subject", "rxjs/internal/scheduler/queue", "rxjs/internal/Subscription", "rxjs/internal/operators/observeOn", "rxjs/internal/util/ObjectUnsubscribedError", "rxjs/internal/SubjectSubscription"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var queue_1 = $__require("rxjs/internal/scheduler/queue");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var observeOn_1 = $__require("rxjs/internal/operators/observeOn");
    var ObjectUnsubscribedError_1 = $__require("rxjs/internal/util/ObjectUnsubscribedError");
    var SubjectSubscription_1 = $__require("rxjs/internal/SubjectSubscription");
    var ReplaySubject = function (_super) {
        __extends(ReplaySubject, _super);
        function ReplaySubject(bufferSize, windowTime, scheduler) {
            if (bufferSize === void 0) {
                bufferSize = Number.POSITIVE_INFINITY;
            }
            if (windowTime === void 0) {
                windowTime = Number.POSITIVE_INFINITY;
            }
            var _this = _super.call(this) || this;
            _this.scheduler = scheduler;
            _this._events = [];
            _this._infiniteTimeWindow = false;
            _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
            _this._windowTime = windowTime < 1 ? 1 : windowTime;
            if (windowTime === Number.POSITIVE_INFINITY) {
                _this._infiniteTimeWindow = true;
                _this.next = _this.nextInfiniteTimeWindow;
            } else {
                _this.next = _this.nextTimeWindow;
            }
            return _this;
        }
        ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
            var _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) {
                _events.shift();
            }
            _super.prototype.next.call(this, value);
        };
        ReplaySubject.prototype.nextTimeWindow = function (value) {
            this._events.push(new ReplayEvent(this._getNow(), value));
            this._trimBufferThenGetEvents();
            _super.prototype.next.call(this, value);
        };
        ReplaySubject.prototype._subscribe = function (subscriber) {
            var _infiniteTimeWindow = this._infiniteTimeWindow;
            var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
            var scheduler = this.scheduler;
            var len = _events.length;
            var subscription;
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            } else if (this.isStopped || this.hasError) {
                subscription = Subscription_1.Subscription.EMPTY;
            } else {
                this.observers.push(subscriber);
                subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
            }
            if (scheduler) {
                subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
            }
            if (_infiniteTimeWindow) {
                for (var i = 0; i < len && !subscriber.closed; i++) {
                    subscriber.next(_events[i]);
                }
            } else {
                for (var i = 0; i < len && !subscriber.closed; i++) {
                    subscriber.next(_events[i].value);
                }
            }
            if (this.hasError) {
                subscriber.error(this.thrownError);
            } else if (this.isStopped) {
                subscriber.complete();
            }
            return subscription;
        };
        ReplaySubject.prototype._getNow = function () {
            return (this.scheduler || queue_1.queue).now();
        };
        ReplaySubject.prototype._trimBufferThenGetEvents = function () {
            var now = this._getNow();
            var _bufferSize = this._bufferSize;
            var _windowTime = this._windowTime;
            var _events = this._events;
            var eventsCount = _events.length;
            var spliceCount = 0;
            while (spliceCount < eventsCount) {
                if (now - _events[spliceCount].time < _windowTime) {
                    break;
                }
                spliceCount++;
            }
            if (eventsCount > _bufferSize) {
                spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
            }
            if (spliceCount > 0) {
                _events.splice(0, spliceCount);
            }
            return _events;
        };
        return ReplaySubject;
    }(Subject_1.Subject);
    exports.ReplaySubject = ReplaySubject;
    var ReplayEvent = function () {
        function ReplayEvent(time, value) {
            this.time = time;
            this.value = value;
        }
        return ReplayEvent;
    }();

});
System.registerDynamic("rxjs/internal/operators/shareReplay", ["rxjs/internal/ReplaySubject"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReplaySubject_1 = $__require("rxjs/internal/ReplaySubject");
    function shareReplay(bufferSize, windowTime, scheduler) {
        return function (source) {
            return source.lift(shareReplayOperator(bufferSize, windowTime, scheduler));
        };
    }
    exports.shareReplay = shareReplay;
    function shareReplayOperator(bufferSize, windowTime, scheduler) {
        var subject;
        var refCount = 0;
        var subscription;
        var hasError = false;
        var isComplete = false;
        return function shareReplayOperation(source) {
            refCount++;
            if (!subject || hasError) {
                hasError = false;
                subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
                subscription = source.subscribe({
                    next: function (value) {
                        subject.next(value);
                    },
                    error: function (err) {
                        hasError = true;
                        subject.error(err);
                    },
                    complete: function () {
                        isComplete = true;
                        subject.complete();
                    }
                });
            }
            var innerSub = subject.subscribe(this);
            return function () {
                refCount--;
                innerSub.unsubscribe();
                if (subscription && refCount === 0 && isComplete) {
                    subscription.unsubscribe();
                }
            };
        };
    }

});
System.registerDynamic("rxjs/internal/operators/single", ["rxjs/internal/Subscriber", "rxjs/internal/util/EmptyError"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var EmptyError_1 = $__require("rxjs/internal/util/EmptyError");
    function single(predicate) {
        return function (source) {
            return source.lift(new SingleOperator(predicate, source));
        };
    }
    exports.single = single;
    var SingleOperator = function () {
        function SingleOperator(predicate, source) {
            this.predicate = predicate;
            this.source = source;
        }
        SingleOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
        };
        return SingleOperator;
    }();
    var SingleSubscriber = function (_super) {
        __extends(SingleSubscriber, _super);
        function SingleSubscriber(destination, predicate, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.source = source;
            _this.seenValue = false;
            _this.index = 0;
            return _this;
        }
        SingleSubscriber.prototype.applySingleValue = function (value) {
            if (this.seenValue) {
                this.destination.error('Sequence contains more than one element');
            } else {
                this.seenValue = true;
                this.singleValue = value;
            }
        };
        SingleSubscriber.prototype._next = function (value) {
            var index = this.index++;
            if (this.predicate) {
                this.tryNext(value, index);
            } else {
                this.applySingleValue(value);
            }
        };
        SingleSubscriber.prototype.tryNext = function (value, index) {
            try {
                if (this.predicate(value, index, this.source)) {
                    this.applySingleValue(value);
                }
            } catch (err) {
                this.destination.error(err);
            }
        };
        SingleSubscriber.prototype._complete = function () {
            var destination = this.destination;
            if (this.index > 0) {
                destination.next(this.seenValue ? this.singleValue : undefined);
                destination.complete();
            } else {
                destination.error(new EmptyError_1.EmptyError());
            }
        };
        return SingleSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/skip", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function skip(count) {
        return function (source) {
            return source.lift(new SkipOperator(count));
        };
    }
    exports.skip = skip;
    var SkipOperator = function () {
        function SkipOperator(total) {
            this.total = total;
        }
        SkipOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SkipSubscriber(subscriber, this.total));
        };
        return SkipOperator;
    }();
    var SkipSubscriber = function (_super) {
        __extends(SkipSubscriber, _super);
        function SkipSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.count = 0;
            return _this;
        }
        SkipSubscriber.prototype._next = function (x) {
            if (++this.count > this.total) {
                this.destination.next(x);
            }
        };
        return SkipSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/skipLast", ["rxjs/internal/Subscriber", "rxjs/internal/util/ArgumentOutOfRangeError"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var ArgumentOutOfRangeError_1 = $__require("rxjs/internal/util/ArgumentOutOfRangeError");
    function skipLast(count) {
        return function (source) {
            return source.lift(new SkipLastOperator(count));
        };
    }
    exports.skipLast = skipLast;
    var SkipLastOperator = function () {
        function SkipLastOperator(_skipCount) {
            this._skipCount = _skipCount;
            if (this._skipCount < 0) {
                throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
            }
        }
        SkipLastOperator.prototype.call = function (subscriber, source) {
            if (this._skipCount === 0) {
                return source.subscribe(new Subscriber_1.Subscriber(subscriber));
            } else {
                return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
            }
        };
        return SkipLastOperator;
    }();
    var SkipLastSubscriber = function (_super) {
        __extends(SkipLastSubscriber, _super);
        function SkipLastSubscriber(destination, _skipCount) {
            var _this = _super.call(this, destination) || this;
            _this._skipCount = _skipCount;
            _this._count = 0;
            _this._ring = new Array(_skipCount);
            return _this;
        }
        SkipLastSubscriber.prototype._next = function (value) {
            var skipCount = this._skipCount;
            var count = this._count++;
            if (count < skipCount) {
                this._ring[count] = value;
            } else {
                var currentIndex = count % skipCount;
                var ring = this._ring;
                var oldValue = ring[currentIndex];
                ring[currentIndex] = value;
                this.destination.next(oldValue);
            }
        };
        return SkipLastSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/skipUntil", ["rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function skipUntil(notifier) {
        return function (source) {
            return source.lift(new SkipUntilOperator(notifier));
        };
    }
    exports.skipUntil = skipUntil;
    var SkipUntilOperator = function () {
        function SkipUntilOperator(notifier) {
            this.notifier = notifier;
        }
        SkipUntilOperator.prototype.call = function (destination, source) {
            return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
        };
        return SkipUntilOperator;
    }();
    var SkipUntilSubscriber = function (_super) {
        __extends(SkipUntilSubscriber, _super);
        function SkipUntilSubscriber(destination, notifier) {
            var _this = _super.call(this, destination) || this;
            _this.hasValue = false;
            _this.add(_this.innerSubscription = subscribeToResult_1.subscribeToResult(_this, notifier));
            return _this;
        }
        SkipUntilSubscriber.prototype._next = function (value) {
            if (this.hasValue) {
                _super.prototype._next.call(this, value);
            }
        };
        SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.hasValue = true;
            if (this.innerSubscription) {
                this.innerSubscription.unsubscribe();
            }
        };
        SkipUntilSubscriber.prototype.notifyComplete = function () {};
        return SkipUntilSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/skipWhile", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function skipWhile(predicate) {
        return function (source) {
            return source.lift(new SkipWhileOperator(predicate));
        };
    }
    exports.skipWhile = skipWhile;
    var SkipWhileOperator = function () {
        function SkipWhileOperator(predicate) {
            this.predicate = predicate;
        }
        SkipWhileOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
        };
        return SkipWhileOperator;
    }();
    var SkipWhileSubscriber = function (_super) {
        __extends(SkipWhileSubscriber, _super);
        function SkipWhileSubscriber(destination, predicate) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.skipping = true;
            _this.index = 0;
            return _this;
        }
        SkipWhileSubscriber.prototype._next = function (value) {
            var destination = this.destination;
            if (this.skipping) {
                this.tryCallPredicate(value);
            }
            if (!this.skipping) {
                destination.next(value);
            }
        };
        SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
            try {
                var result = this.predicate(value, this.index++);
                this.skipping = Boolean(result);
            } catch (err) {
                this.destination.error(err);
            }
        };
        return SkipWhileSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/observable/scalar", ["rxjs/internal/Observable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    function scalar(value) {
        var result = new Observable_1.Observable(function (subscriber) {
            subscriber.next(value);
            subscriber.complete();
        });
        result._isScalar = true;
        result.value = value;
        return result;
    }
    exports.scalar = scalar;

});
System.registerDynamic("rxjs/internal/observable/of", ["rxjs/internal/util/isScheduler", "rxjs/internal/observable/fromArray", "rxjs/internal/observable/empty", "rxjs/internal/observable/scalar"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
    var fromArray_1 = $__require("rxjs/internal/observable/fromArray");
    var empty_1 = $__require("rxjs/internal/observable/empty");
    var scalar_1 = $__require("rxjs/internal/observable/scalar");
    function of() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var scheduler = args[args.length - 1];
        if (isScheduler_1.isScheduler(scheduler)) {
            args.pop();
        } else {
            scheduler = undefined;
        }
        switch (args.length) {
            case 0:
                return empty_1.empty(scheduler);
            case 1:
                return scheduler ? fromArray_1.fromArray(args, scheduler) : scalar_1.scalar(args[0]);
            default:
                return fromArray_1.fromArray(args, scheduler);
        }
    }
    exports.of = of;

});
System.registerDynamic("rxjs/internal/operators/mergeMap", ["rxjs/internal/util/subscribeToResult", "rxjs/internal/OuterSubscriber", "rxjs/internal/operators/map", "rxjs/internal/observable/from"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var map_1 = $__require("rxjs/internal/operators/map");
    var from_1 = $__require("rxjs/internal/observable/from");
    function mergeMap(project, resultSelector, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        if (typeof resultSelector === 'function') {
            return function (source) {
                return source.pipe(mergeMap(function (a, i) {
                    return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) {
                        return resultSelector(a, b, i, ii);
                    }));
                }, concurrent));
            };
        } else if (typeof resultSelector === 'number') {
            concurrent = resultSelector;
        }
        return function (source) {
            return source.lift(new MergeMapOperator(project, concurrent));
        };
    }
    exports.mergeMap = mergeMap;
    var MergeMapOperator = function () {
        function MergeMapOperator(project, concurrent) {
            if (concurrent === void 0) {
                concurrent = Number.POSITIVE_INFINITY;
            }
            this.project = project;
            this.concurrent = concurrent;
        }
        MergeMapOperator.prototype.call = function (observer, source) {
            return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
        };
        return MergeMapOperator;
    }();
    exports.MergeMapOperator = MergeMapOperator;
    var MergeMapSubscriber = function (_super) {
        __extends(MergeMapSubscriber, _super);
        function MergeMapSubscriber(destination, project, concurrent) {
            if (concurrent === void 0) {
                concurrent = Number.POSITIVE_INFINITY;
            }
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.concurrent = concurrent;
            _this.hasCompleted = false;
            _this.buffer = [];
            _this.active = 0;
            _this.index = 0;
            return _this;
        }
        MergeMapSubscriber.prototype._next = function (value) {
            if (this.active < this.concurrent) {
                this._tryNext(value);
            } else {
                this.buffer.push(value);
            }
        };
        MergeMapSubscriber.prototype._tryNext = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.active++;
            this._innerSub(result, value, index);
        };
        MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
            this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
        };
        MergeMapSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.active === 0 && this.buffer.length === 0) {
                this.destination.complete();
            }
        };
        MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            this.remove(innerSub);
            this.active--;
            if (buffer.length > 0) {
                this._next(buffer.shift());
            } else if (this.active === 0 && this.hasCompleted) {
                this.destination.complete();
            }
        };
        return MergeMapSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
    exports.MergeMapSubscriber = MergeMapSubscriber;

});
System.registerDynamic("rxjs/internal/operators/mergeAll", ["rxjs/internal/operators/mergeMap", "rxjs/internal/util/identity"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var mergeMap_1 = $__require("rxjs/internal/operators/mergeMap");
    var identity_1 = $__require("rxjs/internal/util/identity");
    function mergeAll(concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        return mergeMap_1.mergeMap(identity_1.identity, concurrent);
    }
    exports.mergeAll = mergeAll;

});
System.registerDynamic("rxjs/internal/operators/concatAll", ["rxjs/internal/operators/mergeAll"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var mergeAll_1 = $__require("rxjs/internal/operators/mergeAll");
    function concatAll() {
        return mergeAll_1.mergeAll(1);
    }
    exports.concatAll = concatAll;

});
System.registerDynamic("rxjs/internal/observable/concat", ["rxjs/internal/util/isScheduler", "rxjs/internal/observable/of", "rxjs/internal/observable/from", "rxjs/internal/operators/concatAll"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
    var of_1 = $__require("rxjs/internal/observable/of");
    var from_1 = $__require("rxjs/internal/observable/from");
    var concatAll_1 = $__require("rxjs/internal/operators/concatAll");
    function concat() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        if (observables.length === 1 || observables.length === 2 && isScheduler_1.isScheduler(observables[1])) {
            return from_1.from(observables[0]);
        }
        return concatAll_1.concatAll()(of_1.of.apply(void 0, observables));
    }
    exports.concat = concat;

});
System.registerDynamic("rxjs/internal/operators/startWith", ["rxjs/internal/observable/fromArray", "rxjs/internal/observable/scalar", "rxjs/internal/observable/empty", "rxjs/internal/observable/concat", "rxjs/internal/util/isScheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var fromArray_1 = $__require("rxjs/internal/observable/fromArray");
    var scalar_1 = $__require("rxjs/internal/observable/scalar");
    var empty_1 = $__require("rxjs/internal/observable/empty");
    var concat_1 = $__require("rxjs/internal/observable/concat");
    var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
    function startWith() {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        return function (source) {
            var scheduler = array[array.length - 1];
            if (isScheduler_1.isScheduler(scheduler)) {
                array.pop();
            } else {
                scheduler = null;
            }
            var len = array.length;
            if (len === 1 && !scheduler) {
                return concat_1.concat(scalar_1.scalar(array[0]), source);
            } else if (len > 0) {
                return concat_1.concat(fromArray_1.fromArray(array, scheduler), source);
            } else {
                return concat_1.concat(empty_1.empty(scheduler), source);
            }
        };
    }
    exports.startWith = startWith;

});
System.registerDynamic("rxjs/internal/util/Immediate", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var nextHandle = 1;
    var tasksByHandle = {};
    function runIfPresent(handle) {
        var cb = tasksByHandle[handle];
        if (cb) {
            cb();
        }
    }
    exports.Immediate = {
        setImmediate: function (cb) {
            var handle = nextHandle++;
            tasksByHandle[handle] = cb;
            Promise.resolve().then(function () {
                return runIfPresent(handle);
            });
            return handle;
        },
        clearImmediate: function (handle) {
            delete tasksByHandle[handle];
        }
    };

});
System.registerDynamic("rxjs/internal/scheduler/AsapAction", ["rxjs/internal/util/Immediate", "rxjs/internal/scheduler/AsyncAction"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Immediate_1 = $__require("rxjs/internal/util/Immediate");
    var AsyncAction_1 = $__require("rxjs/internal/scheduler/AsyncAction");
    var AsapAction = function (_super) {
        __extends(AsapAction, _super);
        function AsapAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            return _this;
        }
        AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay !== null && delay > 0) {
                return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
            }
            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
        };
        AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
                return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
            }
            if (scheduler.actions.length === 0) {
                Immediate_1.Immediate.clearImmediate(id);
                scheduler.scheduled = undefined;
            }
            return undefined;
        };
        return AsapAction;
    }(AsyncAction_1.AsyncAction);
    exports.AsapAction = AsapAction;

});
System.registerDynamic("rxjs/internal/scheduler/AsapScheduler", ["rxjs/internal/scheduler/AsyncScheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var AsyncScheduler_1 = $__require("rxjs/internal/scheduler/AsyncScheduler");
    var AsapScheduler = function (_super) {
        __extends(AsapScheduler, _super);
        function AsapScheduler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AsapScheduler.prototype.flush = function (action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (++index < count && (action = actions.shift()));
            this.active = false;
            if (error) {
                while (++index < count && (action = actions.shift())) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AsapScheduler;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.AsapScheduler = AsapScheduler;

});
System.registerDynamic("rxjs/internal/scheduler/asap", ["rxjs/internal/scheduler/AsapAction", "rxjs/internal/scheduler/AsapScheduler"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var AsapAction_1 = $__require("rxjs/internal/scheduler/AsapAction");
  var AsapScheduler_1 = $__require("rxjs/internal/scheduler/AsapScheduler");
  exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);

});
System.registerDynamic("rxjs/internal/observable/SubscribeOnObservable", ["rxjs/internal/Observable", "rxjs/internal/scheduler/asap", "rxjs/internal/util/isNumeric"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var asap_1 = $__require("rxjs/internal/scheduler/asap");
    var isNumeric_1 = $__require("rxjs/internal/util/isNumeric");
    var SubscribeOnObservable = function (_super) {
        __extends(SubscribeOnObservable, _super);
        function SubscribeOnObservable(source, delayTime, scheduler) {
            if (delayTime === void 0) {
                delayTime = 0;
            }
            if (scheduler === void 0) {
                scheduler = asap_1.asap;
            }
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.delayTime = delayTime;
            _this.scheduler = scheduler;
            if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
                _this.delayTime = 0;
            }
            if (!scheduler || typeof scheduler.schedule !== 'function') {
                _this.scheduler = asap_1.asap;
            }
            return _this;
        }
        SubscribeOnObservable.create = function (source, delay, scheduler) {
            if (delay === void 0) {
                delay = 0;
            }
            if (scheduler === void 0) {
                scheduler = asap_1.asap;
            }
            return new SubscribeOnObservable(source, delay, scheduler);
        };
        SubscribeOnObservable.dispatch = function (arg) {
            var source = arg.source,
                subscriber = arg.subscriber;
            return this.add(source.subscribe(subscriber));
        };
        SubscribeOnObservable.prototype._subscribe = function (subscriber) {
            var delay = this.delayTime;
            var source = this.source;
            var scheduler = this.scheduler;
            return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
                source: source, subscriber: subscriber
            });
        };
        return SubscribeOnObservable;
    }(Observable_1.Observable);
    exports.SubscribeOnObservable = SubscribeOnObservable;

});
System.registerDynamic("rxjs/internal/operators/subscribeOn", ["rxjs/internal/observable/SubscribeOnObservable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var SubscribeOnObservable_1 = $__require("rxjs/internal/observable/SubscribeOnObservable");
    function subscribeOn(scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return function subscribeOnOperatorFunction(source) {
            return source.lift(new SubscribeOnOperator(scheduler, delay));
        };
    }
    exports.subscribeOn = subscribeOn;
    var SubscribeOnOperator = function () {
        function SubscribeOnOperator(scheduler, delay) {
            this.scheduler = scheduler;
            this.delay = delay;
        }
        SubscribeOnOperator.prototype.call = function (subscriber, source) {
            return new SubscribeOnObservable_1.SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
        };
        return SubscribeOnOperator;
    }();

});
System.registerDynamic("rxjs/internal/util/identity", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    function identity(x) {
        return x;
    }
    exports.identity = identity;

});
System.registerDynamic("rxjs/internal/operators/switchAll", ["rxjs/internal/operators/switchMap", "rxjs/internal/util/identity"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var switchMap_1 = $__require("rxjs/internal/operators/switchMap");
    var identity_1 = $__require("rxjs/internal/util/identity");
    function switchAll() {
        return switchMap_1.switchMap(identity_1.identity);
    }
    exports.switchAll = switchAll;

});
System.registerDynamic("rxjs/internal/operators/switchMap", ["rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult", "rxjs/internal/operators/map", "rxjs/internal/observable/from"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    var map_1 = $__require("rxjs/internal/operators/map");
    var from_1 = $__require("rxjs/internal/observable/from");
    function switchMap(project, resultSelector) {
        if (typeof resultSelector === 'function') {
            return function (source) {
                return source.pipe(switchMap(function (a, i) {
                    return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) {
                        return resultSelector(a, b, i, ii);
                    }));
                }));
            };
        }
        return function (source) {
            return source.lift(new SwitchMapOperator(project));
        };
    }
    exports.switchMap = switchMap;
    var SwitchMapOperator = function () {
        function SwitchMapOperator(project) {
            this.project = project;
        }
        SwitchMapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
        };
        return SwitchMapOperator;
    }();
    var SwitchMapSubscriber = function (_super) {
        __extends(SwitchMapSubscriber, _super);
        function SwitchMapSubscriber(destination, project) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.index = 0;
            return _this;
        }
        SwitchMapSubscriber.prototype._next = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            } catch (error) {
                this.destination.error(error);
                return;
            }
            this._innerSub(result, value, index);
        };
        SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
            var innerSubscription = this.innerSubscription;
            if (innerSubscription) {
                innerSubscription.unsubscribe();
            }
            this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
        };
        SwitchMapSubscriber.prototype._complete = function () {
            var innerSubscription = this.innerSubscription;
            if (!innerSubscription || innerSubscription.closed) {
                _super.prototype._complete.call(this);
            }
        };
        SwitchMapSubscriber.prototype._unsubscribe = function () {
            this.innerSubscription = null;
        };
        SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
            this.remove(innerSub);
            this.innerSubscription = null;
            if (this.isStopped) {
                _super.prototype._complete.call(this);
            }
        };
        SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        return SwitchMapSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/switchMapTo", ["rxjs/internal/operators/switchMap"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var switchMap_1 = $__require("rxjs/internal/operators/switchMap");
    function switchMapTo(innerObservable, resultSelector) {
        return resultSelector ? switchMap_1.switchMap(function () {
            return innerObservable;
        }, resultSelector) : switchMap_1.switchMap(function () {
            return innerObservable;
        });
    }
    exports.switchMapTo = switchMapTo;

});
System.registerDynamic("rxjs/internal/operators/take", ["rxjs/internal/Subscriber", "rxjs/internal/util/ArgumentOutOfRangeError", "rxjs/internal/observable/empty"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var ArgumentOutOfRangeError_1 = $__require("rxjs/internal/util/ArgumentOutOfRangeError");
    var empty_1 = $__require("rxjs/internal/observable/empty");
    function take(count) {
        return function (source) {
            if (count === 0) {
                return empty_1.empty();
            } else {
                return source.lift(new TakeOperator(count));
            }
        };
    }
    exports.take = take;
    var TakeOperator = function () {
        function TakeOperator(total) {
            this.total = total;
            if (this.total < 0) {
                throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
            }
        }
        TakeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TakeSubscriber(subscriber, this.total));
        };
        return TakeOperator;
    }();
    var TakeSubscriber = function (_super) {
        __extends(TakeSubscriber, _super);
        function TakeSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.count = 0;
            return _this;
        }
        TakeSubscriber.prototype._next = function (value) {
            var total = this.total;
            var count = ++this.count;
            if (count <= total) {
                this.destination.next(value);
                if (count === total) {
                    this.destination.complete();
                    this.unsubscribe();
                }
            }
        };
        return TakeSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/takeUntil", ["rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function takeUntil(notifier) {
        return function (source) {
            return source.lift(new TakeUntilOperator(notifier));
        };
    }
    exports.takeUntil = takeUntil;
    var TakeUntilOperator = function () {
        function TakeUntilOperator(notifier) {
            this.notifier = notifier;
        }
        TakeUntilOperator.prototype.call = function (subscriber, source) {
            var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
            var notifierSubscription = subscribeToResult_1.subscribeToResult(takeUntilSubscriber, this.notifier);
            if (notifierSubscription && !notifierSubscription.closed) {
                takeUntilSubscriber.add(notifierSubscription);
                return source.subscribe(takeUntilSubscriber);
            }
            return takeUntilSubscriber;
        };
        return TakeUntilOperator;
    }();
    var TakeUntilSubscriber = function (_super) {
        __extends(TakeUntilSubscriber, _super);
        function TakeUntilSubscriber(destination) {
            return _super.call(this, destination) || this;
        }
        TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.complete();
        };
        TakeUntilSubscriber.prototype.notifyComplete = function () {};
        return TakeUntilSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/takeWhile", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function takeWhile(predicate) {
        return function (source) {
            return source.lift(new TakeWhileOperator(predicate));
        };
    }
    exports.takeWhile = takeWhile;
    var TakeWhileOperator = function () {
        function TakeWhileOperator(predicate) {
            this.predicate = predicate;
        }
        TakeWhileOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
        };
        return TakeWhileOperator;
    }();
    var TakeWhileSubscriber = function (_super) {
        __extends(TakeWhileSubscriber, _super);
        function TakeWhileSubscriber(destination, predicate) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.index = 0;
            return _this;
        }
        TakeWhileSubscriber.prototype._next = function (value) {
            var destination = this.destination;
            var result;
            try {
                result = this.predicate(value, this.index++);
            } catch (err) {
                destination.error(err);
                return;
            }
            this.nextOrComplete(value, result);
        };
        TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
            var destination = this.destination;
            if (Boolean(predicateResult)) {
                destination.next(value);
            } else {
                destination.complete();
            }
        };
        return TakeWhileSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/throttle", ["rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    exports.defaultThrottleConfig = {
        leading: true,
        trailing: false
    };
    function throttle(durationSelector, config) {
        if (config === void 0) {
            config = exports.defaultThrottleConfig;
        }
        return function (source) {
            return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing));
        };
    }
    exports.throttle = throttle;
    var ThrottleOperator = function () {
        function ThrottleOperator(durationSelector, leading, trailing) {
            this.durationSelector = durationSelector;
            this.leading = leading;
            this.trailing = trailing;
        }
        ThrottleOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
        };
        return ThrottleOperator;
    }();
    var ThrottleSubscriber = function (_super) {
        __extends(ThrottleSubscriber, _super);
        function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.durationSelector = durationSelector;
            _this._leading = _leading;
            _this._trailing = _trailing;
            _this._hasValue = false;
            return _this;
        }
        ThrottleSubscriber.prototype._next = function (value) {
            this._hasValue = true;
            this._sendValue = value;
            if (!this._throttled) {
                if (this._leading) {
                    this.send();
                } else {
                    this.throttle(value);
                }
            }
        };
        ThrottleSubscriber.prototype.send = function () {
            var _a = this,
                _hasValue = _a._hasValue,
                _sendValue = _a._sendValue;
            if (_hasValue) {
                this.destination.next(_sendValue);
                this.throttle(_sendValue);
            }
            this._hasValue = false;
            this._sendValue = null;
        };
        ThrottleSubscriber.prototype.throttle = function (value) {
            var duration = this.tryDurationSelector(value);
            if (duration) {
                this.add(this._throttled = subscribeToResult_1.subscribeToResult(this, duration));
            }
        };
        ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
            try {
                return this.durationSelector(value);
            } catch (err) {
                this.destination.error(err);
                return null;
            }
        };
        ThrottleSubscriber.prototype.throttlingDone = function () {
            var _a = this,
                _throttled = _a._throttled,
                _trailing = _a._trailing;
            if (_throttled) {
                _throttled.unsubscribe();
            }
            this._throttled = null;
            if (_trailing) {
                this.send();
            }
        };
        ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.throttlingDone();
        };
        ThrottleSubscriber.prototype.notifyComplete = function () {
            this.throttlingDone();
        };
        return ThrottleSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/throttleTime", ["rxjs/internal/Subscriber", "rxjs/internal/scheduler/async", "rxjs/internal/operators/throttle"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var async_1 = $__require("rxjs/internal/scheduler/async");
    var throttle_1 = $__require("rxjs/internal/operators/throttle");
    function throttleTime(duration, scheduler, config) {
        if (scheduler === void 0) {
            scheduler = async_1.async;
        }
        if (config === void 0) {
            config = throttle_1.defaultThrottleConfig;
        }
        return function (source) {
            return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
        };
    }
    exports.throttleTime = throttleTime;
    var ThrottleTimeOperator = function () {
        function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
            this.duration = duration;
            this.scheduler = scheduler;
            this.leading = leading;
            this.trailing = trailing;
        }
        ThrottleTimeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
        };
        return ThrottleTimeOperator;
    }();
    var ThrottleTimeSubscriber = function (_super) {
        __extends(ThrottleTimeSubscriber, _super);
        function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
            var _this = _super.call(this, destination) || this;
            _this.duration = duration;
            _this.scheduler = scheduler;
            _this.leading = leading;
            _this.trailing = trailing;
            _this._hasTrailingValue = false;
            _this._trailingValue = null;
            return _this;
        }
        ThrottleTimeSubscriber.prototype._next = function (value) {
            if (this.throttled) {
                if (this.trailing) {
                    this._trailingValue = value;
                    this._hasTrailingValue = true;
                }
            } else {
                this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
                if (this.leading) {
                    this.destination.next(value);
                }
            }
        };
        ThrottleTimeSubscriber.prototype._complete = function () {
            if (this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this.destination.complete();
            } else {
                this.destination.complete();
            }
        };
        ThrottleTimeSubscriber.prototype.clearThrottle = function () {
            var throttled = this.throttled;
            if (throttled) {
                if (this.trailing && this._hasTrailingValue) {
                    this.destination.next(this._trailingValue);
                    this._trailingValue = null;
                    this._hasTrailingValue = false;
                }
                throttled.unsubscribe();
                this.remove(throttled);
                this.throttled = null;
            }
        };
        return ThrottleTimeSubscriber;
    }(Subscriber_1.Subscriber);
    function dispatchNext(arg) {
        var subscriber = arg.subscriber;
        subscriber.clearThrottle();
    }

});
System.registerDynamic("rxjs/internal/operators/tap", ["rxjs/internal/Subscriber", "rxjs/internal/util/noop", "rxjs/internal/util/isFunction"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var noop_1 = $__require("rxjs/internal/util/noop");
    var isFunction_1 = $__require("rxjs/internal/util/isFunction");
    function tap(nextOrObserver, error, complete) {
        return function tapOperatorFunction(source) {
            return source.lift(new DoOperator(nextOrObserver, error, complete));
        };
    }
    exports.tap = tap;
    var DoOperator = function () {
        function DoOperator(nextOrObserver, error, complete) {
            this.nextOrObserver = nextOrObserver;
            this.error = error;
            this.complete = complete;
        }
        DoOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
        };
        return DoOperator;
    }();
    var TapSubscriber = function (_super) {
        __extends(TapSubscriber, _super);
        function TapSubscriber(destination, observerOrNext, error, complete) {
            var _this = _super.call(this, destination) || this;
            _this._tapNext = noop_1.noop;
            _this._tapError = noop_1.noop;
            _this._tapComplete = noop_1.noop;
            _this._tapError = error || noop_1.noop;
            _this._tapComplete = complete || noop_1.noop;
            if (isFunction_1.isFunction(observerOrNext)) {
                _this._context = _this;
                _this._tapNext = observerOrNext;
            } else if (observerOrNext) {
                _this._context = observerOrNext;
                _this._tapNext = observerOrNext.next || noop_1.noop;
                _this._tapError = observerOrNext.error || noop_1.noop;
                _this._tapComplete = observerOrNext.complete || noop_1.noop;
            }
            return _this;
        }
        TapSubscriber.prototype._next = function (value) {
            try {
                this._tapNext.call(this._context, value);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(value);
        };
        TapSubscriber.prototype._error = function (err) {
            try {
                this._tapError.call(this._context, err);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.error(err);
        };
        TapSubscriber.prototype._complete = function () {
            try {
                this._tapComplete.call(this._context);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            return this.destination.complete();
        };
        return TapSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/util/EmptyError", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmptyError = function (_super) {
        __extends(EmptyError, _super);
        function EmptyError() {
            var _this = _super.call(this, 'no elements in sequence') || this;
            _this.name = 'EmptyError';
            Object.setPrototypeOf(_this, EmptyError.prototype);
            return _this;
        }
        return EmptyError;
    }(Error);
    exports.EmptyError = EmptyError;

});
System.registerDynamic("rxjs/internal/operators/throwIfEmpty", ["rxjs/internal/operators/tap", "rxjs/internal/util/EmptyError"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var tap_1 = $__require("rxjs/internal/operators/tap");
    var EmptyError_1 = $__require("rxjs/internal/util/EmptyError");
    exports.throwIfEmpty = function (errorFactory) {
        if (errorFactory === void 0) {
            errorFactory = defaultErrorFactory;
        }
        return tap_1.tap({
            hasValue: false,
            next: function () {
                this.hasValue = true;
            },
            complete: function () {
                if (!this.hasValue) {
                    throw errorFactory();
                }
            }
        });
    };
    function defaultErrorFactory() {
        return new EmptyError_1.EmptyError();
    }

});
System.registerDynamic("rxjs/internal/util/isInteropObservable", ["rxjs/internal/symbol/observable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var observable_1 = $__require("rxjs/internal/symbol/observable");
    function isInteropObservable(input) {
        return input && typeof input[observable_1.observable] === 'function';
    }
    exports.isInteropObservable = isInteropObservable;

});
System.registerDynamic("rxjs/internal/util/isIterable", ["rxjs/internal/symbol/iterator"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var iterator_1 = $__require("rxjs/internal/symbol/iterator");
    function isIterable(input) {
        return input && typeof input[iterator_1.iterator] === 'function';
    }
    exports.isIterable = isIterable;

});
System.registerDynamic("rxjs/internal/observable/fromPromise", ["rxjs/internal/Observable", "rxjs/internal/Subscription", "rxjs/internal/util/subscribeToPromise"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var subscribeToPromise_1 = $__require("rxjs/internal/util/subscribeToPromise");
    function fromPromise(input, scheduler) {
        if (!scheduler) {
            return new Observable_1.Observable(subscribeToPromise_1.subscribeToPromise(input));
        } else {
            return new Observable_1.Observable(function (subscriber) {
                var sub = new Subscription_1.Subscription();
                sub.add(scheduler.schedule(function () {
                    return input.then(function (value) {
                        sub.add(scheduler.schedule(function () {
                            subscriber.next(value);
                            sub.add(scheduler.schedule(function () {
                                return subscriber.complete();
                            }));
                        }));
                    }, function (err) {
                        sub.add(scheduler.schedule(function () {
                            return subscriber.error(err);
                        }));
                    });
                }));
                return sub;
            });
        }
    }
    exports.fromPromise = fromPromise;

});
System.registerDynamic("rxjs/internal/observable/fromIterable", ["rxjs/internal/Observable", "rxjs/internal/Subscription", "rxjs/internal/symbol/iterator", "rxjs/internal/util/subscribeToIterable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var iterator_1 = $__require("rxjs/internal/symbol/iterator");
    var subscribeToIterable_1 = $__require("rxjs/internal/util/subscribeToIterable");
    function fromIterable(input, scheduler) {
        if (!input) {
            throw new Error('Iterable cannot be null');
        }
        if (!scheduler) {
            return new Observable_1.Observable(subscribeToIterable_1.subscribeToIterable(input));
        } else {
            return new Observable_1.Observable(function (subscriber) {
                var sub = new Subscription_1.Subscription();
                var iterator;
                sub.add(function () {
                    if (iterator && typeof iterator.return === 'function') {
                        iterator.return();
                    }
                });
                sub.add(scheduler.schedule(function () {
                    iterator = input[iterator_1.iterator]();
                    sub.add(scheduler.schedule(function () {
                        if (subscriber.closed) {
                            return;
                        }
                        var value;
                        var done;
                        try {
                            var result = iterator.next();
                            value = result.value;
                            done = result.done;
                        } catch (err) {
                            subscriber.error(err);
                            return;
                        }
                        if (done) {
                            subscriber.complete();
                        } else {
                            subscriber.next(value);
                            this.schedule();
                        }
                    }));
                }));
                return sub;
            });
        }
    }
    exports.fromIterable = fromIterable;

});
System.registerDynamic("rxjs/internal/observable/fromObservable", ["rxjs/internal/Observable", "rxjs/internal/Subscription", "rxjs/internal/symbol/observable", "rxjs/internal/util/subscribeToObservable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var observable_1 = $__require("rxjs/internal/symbol/observable");
    var subscribeToObservable_1 = $__require("rxjs/internal/util/subscribeToObservable");
    function fromObservable(input, scheduler) {
        if (!scheduler) {
            return new Observable_1.Observable(subscribeToObservable_1.subscribeToObservable(input));
        } else {
            return new Observable_1.Observable(function (subscriber) {
                var sub = new Subscription_1.Subscription();
                sub.add(scheduler.schedule(function () {
                    var observable = input[observable_1.observable]();
                    sub.add(observable.subscribe({
                        next: function (value) {
                            sub.add(scheduler.schedule(function () {
                                return subscriber.next(value);
                            }));
                        },
                        error: function (err) {
                            sub.add(scheduler.schedule(function () {
                                return subscriber.error(err);
                            }));
                        },
                        complete: function () {
                            sub.add(scheduler.schedule(function () {
                                return subscriber.complete();
                            }));
                        }
                    }));
                }));
                return sub;
            });
        }
    }
    exports.fromObservable = fromObservable;

});
System.registerDynamic("rxjs/internal/observable/from", ["rxjs/internal/Observable", "rxjs/internal/util/isPromise", "rxjs/internal/util/isArrayLike", "rxjs/internal/util/isInteropObservable", "rxjs/internal/util/isIterable", "rxjs/internal/observable/fromArray", "rxjs/internal/observable/fromPromise", "rxjs/internal/observable/fromIterable", "rxjs/internal/observable/fromObservable", "rxjs/internal/util/subscribeTo"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var isPromise_1 = $__require("rxjs/internal/util/isPromise");
    var isArrayLike_1 = $__require("rxjs/internal/util/isArrayLike");
    var isInteropObservable_1 = $__require("rxjs/internal/util/isInteropObservable");
    var isIterable_1 = $__require("rxjs/internal/util/isIterable");
    var fromArray_1 = $__require("rxjs/internal/observable/fromArray");
    var fromPromise_1 = $__require("rxjs/internal/observable/fromPromise");
    var fromIterable_1 = $__require("rxjs/internal/observable/fromIterable");
    var fromObservable_1 = $__require("rxjs/internal/observable/fromObservable");
    var subscribeTo_1 = $__require("rxjs/internal/util/subscribeTo");
    function from(input, scheduler) {
        if (!scheduler) {
            if (input instanceof Observable_1.Observable) {
                return input;
            }
            return new Observable_1.Observable(subscribeTo_1.subscribeTo(input));
        }
        if (input != null) {
            if (isInteropObservable_1.isInteropObservable(input)) {
                return fromObservable_1.fromObservable(input, scheduler);
            } else if (isPromise_1.isPromise(input)) {
                return fromPromise_1.fromPromise(input, scheduler);
            } else if (isArrayLike_1.isArrayLike(input)) {
                return fromArray_1.fromArray(input, scheduler);
            } else if (isIterable_1.isIterable(input) || typeof input === 'string') {
                return fromIterable_1.fromIterable(input, scheduler);
            }
        }
        throw new TypeError((input !== null && typeof input || input) + ' is not observable');
    }
    exports.from = from;

});
System.registerDynamic("rxjs/internal/observable/defer", ["rxjs/internal/Observable", "rxjs/internal/observable/from", "rxjs/internal/observable/empty"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var from_1 = $__require("rxjs/internal/observable/from");
    var empty_1 = $__require("rxjs/internal/observable/empty");
    function defer(observableFactory) {
        return new Observable_1.Observable(function (subscriber) {
            var input;
            try {
                input = observableFactory();
            } catch (err) {
                subscriber.error(err);
                return undefined;
            }
            var source = input ? from_1.from(input) : empty_1.empty();
            return source.subscribe(subscriber);
        });
    }
    exports.defer = defer;

});
System.registerDynamic("rxjs/internal/operators/timeInterval", ["rxjs/internal/scheduler/async", "rxjs/internal/operators/scan", "rxjs/internal/observable/defer", "rxjs/internal/operators/map"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = $__require("rxjs/internal/scheduler/async");
    var scan_1 = $__require("rxjs/internal/operators/scan");
    var defer_1 = $__require("rxjs/internal/observable/defer");
    var map_1 = $__require("rxjs/internal/operators/map");
    function timeInterval(scheduler) {
        if (scheduler === void 0) {
            scheduler = async_1.async;
        }
        return function (source) {
            return defer_1.defer(function () {
                return source.pipe(scan_1.scan(function (_a, value) {
                    var current = _a.current;
                    return { value: value, current: scheduler.now(), last: current };
                }, { current: scheduler.now(), value: undefined, last: undefined }), map_1.map(function (_a) {
                    var current = _a.current,
                        last = _a.last,
                        value = _a.value;
                    return new TimeInterval(value, current - last);
                }));
            });
        };
    }
    exports.timeInterval = timeInterval;
    var TimeInterval = function () {
        function TimeInterval(value, interval) {
            this.value = value;
            this.interval = interval;
        }
        return TimeInterval;
    }();
    exports.TimeInterval = TimeInterval;

});
System.registerDynamic("rxjs/internal/util/TimeoutError", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimeoutError = function (_super) {
        __extends(TimeoutError, _super);
        function TimeoutError() {
            var _this = _super.call(this, 'Timeout has occurred') || this;
            _this.name = 'TimeoutError';
            Object.setPrototypeOf(_this, TimeoutError.prototype);
            return _this;
        }
        return TimeoutError;
    }(Error);
    exports.TimeoutError = TimeoutError;

});
System.registerDynamic("rxjs/internal/observable/throwError", ["rxjs/internal/Observable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    function throwError(error, scheduler) {
        if (!scheduler) {
            return new Observable_1.Observable(function (subscriber) {
                return subscriber.error(error);
            });
        } else {
            return new Observable_1.Observable(function (subscriber) {
                return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber });
            });
        }
    }
    exports.throwError = throwError;
    function dispatch(_a) {
        var error = _a.error,
            subscriber = _a.subscriber;
        subscriber.error(error);
    }

});
System.registerDynamic("rxjs/internal/operators/timeout", ["rxjs/internal/scheduler/async", "rxjs/internal/util/TimeoutError", "rxjs/internal/operators/timeoutWith", "rxjs/internal/observable/throwError"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = $__require("rxjs/internal/scheduler/async");
    var TimeoutError_1 = $__require("rxjs/internal/util/TimeoutError");
    var timeoutWith_1 = $__require("rxjs/internal/operators/timeoutWith");
    var throwError_1 = $__require("rxjs/internal/observable/throwError");
    function timeout(due, scheduler) {
        if (scheduler === void 0) {
            scheduler = async_1.async;
        }
        return timeoutWith_1.timeoutWith(due, throwError_1.throwError(new TimeoutError_1.TimeoutError()), scheduler);
    }
    exports.timeout = timeout;

});
System.registerDynamic("rxjs/internal/util/isDate", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    function isDate(value) {
        return value instanceof Date && !isNaN(+value);
    }
    exports.isDate = isDate;

});
System.registerDynamic("rxjs/internal/operators/timeoutWith", ["rxjs/internal/scheduler/async", "rxjs/internal/util/isDate", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = $__require("rxjs/internal/scheduler/async");
    var isDate_1 = $__require("rxjs/internal/util/isDate");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function timeoutWith(due, withObservable, scheduler) {
        if (scheduler === void 0) {
            scheduler = async_1.async;
        }
        return function (source) {
            var absoluteTimeout = isDate_1.isDate(due);
            var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
            return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
        };
    }
    exports.timeoutWith = timeoutWith;
    var TimeoutWithOperator = function () {
        function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
            this.waitFor = waitFor;
            this.absoluteTimeout = absoluteTimeout;
            this.withObservable = withObservable;
            this.scheduler = scheduler;
        }
        TimeoutWithOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
        };
        return TimeoutWithOperator;
    }();
    var TimeoutWithSubscriber = function (_super) {
        __extends(TimeoutWithSubscriber, _super);
        function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.absoluteTimeout = absoluteTimeout;
            _this.waitFor = waitFor;
            _this.withObservable = withObservable;
            _this.scheduler = scheduler;
            _this.action = null;
            _this.scheduleTimeout();
            return _this;
        }
        TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
            var withObservable = subscriber.withObservable;
            subscriber._unsubscribeAndRecycle();
            subscriber.add(subscribeToResult_1.subscribeToResult(subscriber, withObservable));
        };
        TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
            var action = this.action;
            if (action) {
                this.action = action.schedule(this, this.waitFor);
            } else {
                this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
            }
        };
        TimeoutWithSubscriber.prototype._next = function (value) {
            if (!this.absoluteTimeout) {
                this.scheduleTimeout();
            }
            _super.prototype._next.call(this, value);
        };
        TimeoutWithSubscriber.prototype._unsubscribe = function () {
            this.action = null;
            this.scheduler = null;
            this.withObservable = null;
        };
        return TimeoutWithSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/map", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function map(project, thisArg) {
        return function mapOperation(source) {
            if (typeof project !== 'function') {
                throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
            }
            return source.lift(new MapOperator(project, thisArg));
        };
    }
    exports.map = map;
    var MapOperator = function () {
        function MapOperator(project, thisArg) {
            this.project = project;
            this.thisArg = thisArg;
        }
        MapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        };
        return MapOperator;
    }();
    exports.MapOperator = MapOperator;
    var MapSubscriber = function (_super) {
        __extends(MapSubscriber, _super);
        function MapSubscriber(destination, project, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.count = 0;
            _this.thisArg = thisArg || _this;
            return _this;
        }
        MapSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.project.call(this.thisArg, value, this.count++);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return MapSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/timestamp", ["rxjs/internal/scheduler/async", "rxjs/internal/operators/map"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = $__require("rxjs/internal/scheduler/async");
    var map_1 = $__require("rxjs/internal/operators/map");
    function timestamp(scheduler) {
        if (scheduler === void 0) {
            scheduler = async_1.async;
        }
        return map_1.map(function (value) {
            return new Timestamp(value, scheduler.now());
        });
    }
    exports.timestamp = timestamp;
    var Timestamp = function () {
        function Timestamp(value, timestamp) {
            this.value = value;
            this.timestamp = timestamp;
        }
        return Timestamp;
    }();
    exports.Timestamp = Timestamp;

});
System.registerDynamic("rxjs/internal/operators/scan", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function scan(accumulator, seed) {
        var hasSeed = false;
        if (arguments.length >= 2) {
            hasSeed = true;
        }
        return function scanOperatorFunction(source) {
            return source.lift(new ScanOperator(accumulator, seed, hasSeed));
        };
    }
    exports.scan = scan;
    var ScanOperator = function () {
        function ScanOperator(accumulator, seed, hasSeed) {
            if (hasSeed === void 0) {
                hasSeed = false;
            }
            this.accumulator = accumulator;
            this.seed = seed;
            this.hasSeed = hasSeed;
        }
        ScanOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
        };
        return ScanOperator;
    }();
    var ScanSubscriber = function (_super) {
        __extends(ScanSubscriber, _super);
        function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
            var _this = _super.call(this, destination) || this;
            _this.accumulator = accumulator;
            _this._seed = _seed;
            _this.hasSeed = hasSeed;
            _this.index = 0;
            return _this;
        }
        Object.defineProperty(ScanSubscriber.prototype, "seed", {
            get: function () {
                return this._seed;
            },
            set: function (value) {
                this.hasSeed = true;
                this._seed = value;
            },
            enumerable: true,
            configurable: true
        });
        ScanSubscriber.prototype._next = function (value) {
            if (!this.hasSeed) {
                this.seed = value;
                this.destination.next(value);
            } else {
                return this._tryNext(value);
            }
        };
        ScanSubscriber.prototype._tryNext = function (value) {
            var index = this.index++;
            var result;
            try {
                result = this.accumulator(this.seed, value, index);
            } catch (err) {
                this.destination.error(err);
            }
            this.seed = result;
            this.destination.next(result);
        };
        return ScanSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/util/ArgumentOutOfRangeError", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArgumentOutOfRangeError = function (_super) {
        __extends(ArgumentOutOfRangeError, _super);
        function ArgumentOutOfRangeError() {
            var _this = _super.call(this, 'argument out of range') || this;
            _this.name = 'ArgumentOutOfRangeError';
            Object.setPrototypeOf(_this, ArgumentOutOfRangeError.prototype);
            return _this;
        }
        return ArgumentOutOfRangeError;
    }(Error);
    exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;

});
System.registerDynamic("rxjs/internal/observable/empty", ["rxjs/internal/Observable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    exports.EMPTY = new Observable_1.Observable(function (subscriber) {
        return subscriber.complete();
    });
    function empty(scheduler) {
        return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
    }
    exports.empty = empty;
    function emptyScheduled(scheduler) {
        return new Observable_1.Observable(function (subscriber) {
            return scheduler.schedule(function () {
                return subscriber.complete();
            });
        });
    }
    exports.emptyScheduled = emptyScheduled;

});
System.registerDynamic("rxjs/internal/operators/takeLast", ["rxjs/internal/Subscriber", "rxjs/internal/util/ArgumentOutOfRangeError", "rxjs/internal/observable/empty"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var ArgumentOutOfRangeError_1 = $__require("rxjs/internal/util/ArgumentOutOfRangeError");
    var empty_1 = $__require("rxjs/internal/observable/empty");
    function takeLast(count) {
        return function takeLastOperatorFunction(source) {
            if (count === 0) {
                return empty_1.empty();
            } else {
                return source.lift(new TakeLastOperator(count));
            }
        };
    }
    exports.takeLast = takeLast;
    var TakeLastOperator = function () {
        function TakeLastOperator(total) {
            this.total = total;
            if (this.total < 0) {
                throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
            }
        }
        TakeLastOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
        };
        return TakeLastOperator;
    }();
    var TakeLastSubscriber = function (_super) {
        __extends(TakeLastSubscriber, _super);
        function TakeLastSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.ring = new Array();
            _this.count = 0;
            return _this;
        }
        TakeLastSubscriber.prototype._next = function (value) {
            var ring = this.ring;
            var total = this.total;
            var count = this.count++;
            if (ring.length < total) {
                ring.push(value);
            } else {
                var index = count % total;
                ring[index] = value;
            }
        };
        TakeLastSubscriber.prototype._complete = function () {
            var destination = this.destination;
            var count = this.count;
            if (count > 0) {
                var total = this.count >= this.total ? this.total : this.count;
                var ring = this.ring;
                for (var i = 0; i < total; i++) {
                    var idx = count++ % total;
                    destination.next(ring[idx]);
                }
            }
            destination.complete();
        };
        return TakeLastSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/defaultIfEmpty", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    function defaultIfEmpty(defaultValue) {
        if (defaultValue === void 0) {
            defaultValue = null;
        }
        return function (source) {
            return source.lift(new DefaultIfEmptyOperator(defaultValue));
        };
    }
    exports.defaultIfEmpty = defaultIfEmpty;
    var DefaultIfEmptyOperator = function () {
        function DefaultIfEmptyOperator(defaultValue) {
            this.defaultValue = defaultValue;
        }
        DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
        };
        return DefaultIfEmptyOperator;
    }();
    var DefaultIfEmptySubscriber = function (_super) {
        __extends(DefaultIfEmptySubscriber, _super);
        function DefaultIfEmptySubscriber(destination, defaultValue) {
            var _this = _super.call(this, destination) || this;
            _this.defaultValue = defaultValue;
            _this.isEmpty = true;
            return _this;
        }
        DefaultIfEmptySubscriber.prototype._next = function (value) {
            this.isEmpty = false;
            this.destination.next(value);
        };
        DefaultIfEmptySubscriber.prototype._complete = function () {
            if (this.isEmpty) {
                this.destination.next(this.defaultValue);
            }
            this.destination.complete();
        };
        return DefaultIfEmptySubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/operators/reduce", ["rxjs/internal/operators/scan", "rxjs/internal/operators/takeLast", "rxjs/internal/operators/defaultIfEmpty", "rxjs/internal/util/pipe"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var scan_1 = $__require("rxjs/internal/operators/scan");
    var takeLast_1 = $__require("rxjs/internal/operators/takeLast");
    var defaultIfEmpty_1 = $__require("rxjs/internal/operators/defaultIfEmpty");
    var pipe_1 = $__require("rxjs/internal/util/pipe");
    function reduce(accumulator, seed) {
        if (arguments.length >= 2) {
            return function reduceOperatorFunctionWithSeed(source) {
                return pipe_1.pipe(scan_1.scan(accumulator, seed), takeLast_1.takeLast(1), defaultIfEmpty_1.defaultIfEmpty(seed))(source);
            };
        }
        return function reduceOperatorFunction(source) {
            return pipe_1.pipe(scan_1.scan(function (acc, value, index) {
                return accumulator(acc, value, index + 1);
            }), takeLast_1.takeLast(1))(source);
        };
    }
    exports.reduce = reduce;

});
System.registerDynamic("rxjs/internal/operators/toArray", ["rxjs/internal/operators/reduce"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var reduce_1 = $__require("rxjs/internal/operators/reduce");
    function toArrayReducer(arr, item, index) {
        if (index === 0) {
            return [item];
        }
        arr.push(item);
        return arr;
    }
    function toArray() {
        return reduce_1.reduce(toArrayReducer, []);
    }
    exports.toArray = toArray;

});
System.registerDynamic("rxjs/internal/operators/window", ["rxjs/internal/Subject", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function window(windowBoundaries) {
        return function windowOperatorFunction(source) {
            return source.lift(new WindowOperator(windowBoundaries));
        };
    }
    exports.window = window;
    var WindowOperator = function () {
        function WindowOperator(windowBoundaries) {
            this.windowBoundaries = windowBoundaries;
        }
        WindowOperator.prototype.call = function (subscriber, source) {
            var windowSubscriber = new WindowSubscriber(subscriber);
            var sourceSubscription = source.subscribe(windowSubscriber);
            if (!sourceSubscription.closed) {
                windowSubscriber.add(subscribeToResult_1.subscribeToResult(windowSubscriber, this.windowBoundaries));
            }
            return sourceSubscription;
        };
        return WindowOperator;
    }();
    var WindowSubscriber = function (_super) {
        __extends(WindowSubscriber, _super);
        function WindowSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.window = new Subject_1.Subject();
            destination.next(_this.window);
            return _this;
        }
        WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.openWindow();
        };
        WindowSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        WindowSubscriber.prototype.notifyComplete = function (innerSub) {
            this._complete();
        };
        WindowSubscriber.prototype._next = function (value) {
            this.window.next(value);
        };
        WindowSubscriber.prototype._error = function (err) {
            this.window.error(err);
            this.destination.error(err);
        };
        WindowSubscriber.prototype._complete = function () {
            this.window.complete();
            this.destination.complete();
        };
        WindowSubscriber.prototype._unsubscribe = function () {
            this.window = null;
        };
        WindowSubscriber.prototype.openWindow = function () {
            var prevWindow = this.window;
            if (prevWindow) {
                prevWindow.complete();
            }
            var destination = this.destination;
            var newWindow = this.window = new Subject_1.Subject();
            destination.next(newWindow);
        };
        return WindowSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/windowCount", ["rxjs/internal/Subscriber", "rxjs/internal/Subject"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var Subject_1 = $__require("rxjs/internal/Subject");
    function windowCount(windowSize, startWindowEvery) {
        if (startWindowEvery === void 0) {
            startWindowEvery = 0;
        }
        return function windowCountOperatorFunction(source) {
            return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
        };
    }
    exports.windowCount = windowCount;
    var WindowCountOperator = function () {
        function WindowCountOperator(windowSize, startWindowEvery) {
            this.windowSize = windowSize;
            this.startWindowEvery = startWindowEvery;
        }
        WindowCountOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
        };
        return WindowCountOperator;
    }();
    var WindowCountSubscriber = function (_super) {
        __extends(WindowCountSubscriber, _super);
        function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.windowSize = windowSize;
            _this.startWindowEvery = startWindowEvery;
            _this.windows = [new Subject_1.Subject()];
            _this.count = 0;
            destination.next(_this.windows[0]);
            return _this;
        }
        WindowCountSubscriber.prototype._next = function (value) {
            var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
            var destination = this.destination;
            var windowSize = this.windowSize;
            var windows = this.windows;
            var len = windows.length;
            for (var i = 0; i < len && !this.closed; i++) {
                windows[i].next(value);
            }
            var c = this.count - windowSize + 1;
            if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
                windows.shift().complete();
            }
            if (++this.count % startWindowEvery === 0 && !this.closed) {
                var window_1 = new Subject_1.Subject();
                windows.push(window_1);
                destination.next(window_1);
            }
        };
        WindowCountSubscriber.prototype._error = function (err) {
            var windows = this.windows;
            if (windows) {
                while (windows.length > 0 && !this.closed) {
                    windows.shift().error(err);
                }
            }
            this.destination.error(err);
        };
        WindowCountSubscriber.prototype._complete = function () {
            var windows = this.windows;
            if (windows) {
                while (windows.length > 0 && !this.closed) {
                    windows.shift().complete();
                }
            }
            this.destination.complete();
        };
        WindowCountSubscriber.prototype._unsubscribe = function () {
            this.count = 0;
            this.windows = null;
        };
        return WindowCountSubscriber;
    }(Subscriber_1.Subscriber);

});
System.registerDynamic("rxjs/internal/scheduler/Action", ["rxjs/internal/Subscription"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var Action = function (_super) {
        __extends(Action, _super);
        function Action(scheduler, work) {
            return _super.call(this) || this;
        }
        Action.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            return this;
        };
        return Action;
    }(Subscription_1.Subscription);
    exports.Action = Action;

});
System.registerDynamic("rxjs/internal/scheduler/AsyncAction", ["rxjs/internal/scheduler/Action"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Action_1 = $__require("rxjs/internal/scheduler/Action");
    var AsyncAction = function (_super) {
        __extends(AsyncAction, _super);
        function AsyncAction(scheduler, work) {
            var _this = _super.call(this, scheduler, work) || this;
            _this.scheduler = scheduler;
            _this.work = work;
            _this.pending = false;
            return _this;
        }
        AsyncAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (this.closed) {
                return this;
            }
            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, delay);
            }
            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
        };
        AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
        };
        AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (delay !== null && this.delay === delay && this.pending === false) {
                return id;
            }
            return clearInterval(id) && undefined || undefined;
        };
        AsyncAction.prototype.execute = function (state, delay) {
            if (this.closed) {
                return new Error('executing a cancelled action');
            }
            this.pending = false;
            var error = this._execute(state, delay);
            if (error) {
                return error;
            } else if (this.pending === false && this.id != null) {
                this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
        };
        AsyncAction.prototype._execute = function (state, delay) {
            var errored = false;
            var errorValue = undefined;
            try {
                this.work(state);
            } catch (e) {
                errored = true;
                errorValue = !!e && e || new Error(e);
            }
            if (errored) {
                this.unsubscribe();
                return errorValue;
            }
        };
        AsyncAction.prototype._unsubscribe = function () {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;
            if (index !== -1) {
                actions.splice(index, 1);
            }
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
        };
        return AsyncAction;
    }(Action_1.Action);
    exports.AsyncAction = AsyncAction;

});
System.registerDynamic("rxjs/internal/Scheduler", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Scheduler = function () {
        function Scheduler(SchedulerAction, now) {
            if (now === void 0) {
                now = Scheduler.now;
            }
            this.SchedulerAction = SchedulerAction;
            this.now = now;
        }
        Scheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) {
                delay = 0;
            }
            return new this.SchedulerAction(this, work).schedule(state, delay);
        };
        Scheduler.now = function () {
            return Date.now();
        };
        return Scheduler;
    }();
    exports.Scheduler = Scheduler;

});
System.registerDynamic("rxjs/internal/scheduler/AsyncScheduler", ["rxjs/internal/Scheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Scheduler_1 = $__require("rxjs/internal/Scheduler");
    var AsyncScheduler = function (_super) {
        __extends(AsyncScheduler, _super);
        function AsyncScheduler(SchedulerAction, now) {
            if (now === void 0) {
                now = Scheduler_1.Scheduler.now;
            }
            var _this = _super.call(this, SchedulerAction, function () {
                if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                    return AsyncScheduler.delegate.now();
                } else {
                    return now();
                }
            }) || this;
            _this.actions = [];
            _this.active = false;
            _this.scheduled = undefined;
            return _this;
        }
        AsyncScheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) {
                delay = 0;
            }
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.schedule(work, delay, state);
            } else {
                return _super.prototype.schedule.call(this, work, delay, state);
            }
        };
        AsyncScheduler.prototype.flush = function (action) {
            var actions = this.actions;
            if (this.active) {
                actions.push(action);
                return;
            }
            var error;
            this.active = true;
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (action = actions.shift());
            this.active = false;
            if (error) {
                while (action = actions.shift()) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AsyncScheduler;
    }(Scheduler_1.Scheduler);
    exports.AsyncScheduler = AsyncScheduler;

});
System.registerDynamic("rxjs/internal/scheduler/async", ["rxjs/internal/scheduler/AsyncAction", "rxjs/internal/scheduler/AsyncScheduler"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var AsyncAction_1 = $__require("rxjs/internal/scheduler/AsyncAction");
  var AsyncScheduler_1 = $__require("rxjs/internal/scheduler/AsyncScheduler");
  exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);

});
System.registerDynamic("rxjs/internal/util/isNumeric", ["rxjs/internal/util/isArray"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    function isNumeric(val) {
        return !isArray_1.isArray(val) && val - parseFloat(val) + 1 >= 0;
    }
    exports.isNumeric = isNumeric;

});
System.registerDynamic("rxjs/internal/util/isScheduler", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    function isScheduler(value) {
        return value && typeof value.schedule === 'function';
    }
    exports.isScheduler = isScheduler;

});
System.registerDynamic("rxjs/internal/operators/windowTime", ["rxjs/internal/Subject", "rxjs/internal/scheduler/async", "rxjs/internal/Subscriber", "rxjs/internal/util/isNumeric", "rxjs/internal/util/isScheduler"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var async_1 = $__require("rxjs/internal/scheduler/async");
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var isNumeric_1 = $__require("rxjs/internal/util/isNumeric");
    var isScheduler_1 = $__require("rxjs/internal/util/isScheduler");
    function windowTime(windowTimeSpan) {
        var scheduler = async_1.async;
        var windowCreationInterval = null;
        var maxWindowSize = Number.POSITIVE_INFINITY;
        if (isScheduler_1.isScheduler(arguments[3])) {
            scheduler = arguments[3];
        }
        if (isScheduler_1.isScheduler(arguments[2])) {
            scheduler = arguments[2];
        } else if (isNumeric_1.isNumeric(arguments[2])) {
            maxWindowSize = arguments[2];
        }
        if (isScheduler_1.isScheduler(arguments[1])) {
            scheduler = arguments[1];
        } else if (isNumeric_1.isNumeric(arguments[1])) {
            windowCreationInterval = arguments[1];
        }
        return function windowTimeOperatorFunction(source) {
            return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
        };
    }
    exports.windowTime = windowTime;
    var WindowTimeOperator = function () {
        function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
            this.windowTimeSpan = windowTimeSpan;
            this.windowCreationInterval = windowCreationInterval;
            this.maxWindowSize = maxWindowSize;
            this.scheduler = scheduler;
        }
        WindowTimeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
        };
        return WindowTimeOperator;
    }();
    var CountedSubject = function (_super) {
        __extends(CountedSubject, _super);
        function CountedSubject() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._numberOfNextedValues = 0;
            return _this;
        }
        CountedSubject.prototype.next = function (value) {
            this._numberOfNextedValues++;
            _super.prototype.next.call(this, value);
        };
        Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
            get: function () {
                return this._numberOfNextedValues;
            },
            enumerable: true,
            configurable: true
        });
        return CountedSubject;
    }(Subject_1.Subject);
    var WindowTimeSubscriber = function (_super) {
        __extends(WindowTimeSubscriber, _super);
        function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.windowTimeSpan = windowTimeSpan;
            _this.windowCreationInterval = windowCreationInterval;
            _this.maxWindowSize = maxWindowSize;
            _this.scheduler = scheduler;
            _this.windows = [];
            var window = _this.openWindow();
            if (windowCreationInterval !== null && windowCreationInterval >= 0) {
                var closeState = { subscriber: _this, window: window, context: null };
                var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: _this, scheduler: scheduler };
                _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
                _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
            } else {
                var timeSpanOnlyState = { subscriber: _this, window: window, windowTimeSpan: windowTimeSpan };
                _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
            }
            return _this;
        }
        WindowTimeSubscriber.prototype._next = function (value) {
            var windows = this.windows;
            var len = windows.length;
            for (var i = 0; i < len; i++) {
                var window_1 = windows[i];
                if (!window_1.closed) {
                    window_1.next(value);
                    if (window_1.numberOfNextedValues >= this.maxWindowSize) {
                        this.closeWindow(window_1);
                    }
                }
            }
        };
        WindowTimeSubscriber.prototype._error = function (err) {
            var windows = this.windows;
            while (windows.length > 0) {
                windows.shift().error(err);
            }
            this.destination.error(err);
        };
        WindowTimeSubscriber.prototype._complete = function () {
            var windows = this.windows;
            while (windows.length > 0) {
                var window_2 = windows.shift();
                if (!window_2.closed) {
                    window_2.complete();
                }
            }
            this.destination.complete();
        };
        WindowTimeSubscriber.prototype.openWindow = function () {
            var window = new CountedSubject();
            this.windows.push(window);
            var destination = this.destination;
            destination.next(window);
            return window;
        };
        WindowTimeSubscriber.prototype.closeWindow = function (window) {
            window.complete();
            var windows = this.windows;
            windows.splice(windows.indexOf(window), 1);
        };
        return WindowTimeSubscriber;
    }(Subscriber_1.Subscriber);
    function dispatchWindowTimeSpanOnly(state) {
        var subscriber = state.subscriber,
            windowTimeSpan = state.windowTimeSpan,
            window = state.window;
        if (window) {
            subscriber.closeWindow(window);
        }
        state.window = subscriber.openWindow();
        this.schedule(state, windowTimeSpan);
    }
    function dispatchWindowCreation(state) {
        var windowTimeSpan = state.windowTimeSpan,
            subscriber = state.subscriber,
            scheduler = state.scheduler,
            windowCreationInterval = state.windowCreationInterval;
        var window = subscriber.openWindow();
        var action = this;
        var context = { action: action, subscription: null };
        var timeSpanState = { subscriber: subscriber, window: window, context: context };
        context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
        action.add(context.subscription);
        action.schedule(state, windowCreationInterval);
    }
    function dispatchWindowClose(state) {
        var subscriber = state.subscriber,
            window = state.window,
            context = state.context;
        if (context && context.action && context.subscription) {
            context.action.remove(context.subscription);
        }
        subscriber.closeWindow(window);
    }

});
System.registerDynamic("rxjs/internal/operators/windowToggle", ["rxjs/internal/Subject", "rxjs/internal/Subscription", "rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function windowToggle(openings, closingSelector) {
        return function (source) {
            return source.lift(new WindowToggleOperator(openings, closingSelector));
        };
    }
    exports.windowToggle = windowToggle;
    var WindowToggleOperator = function () {
        function WindowToggleOperator(openings, closingSelector) {
            this.openings = openings;
            this.closingSelector = closingSelector;
        }
        WindowToggleOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
        };
        return WindowToggleOperator;
    }();
    var WindowToggleSubscriber = function (_super) {
        __extends(WindowToggleSubscriber, _super);
        function WindowToggleSubscriber(destination, openings, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.openings = openings;
            _this.closingSelector = closingSelector;
            _this.contexts = [];
            _this.add(_this.openSubscription = subscribeToResult_1.subscribeToResult(_this, openings, openings));
            return _this;
        }
        WindowToggleSubscriber.prototype._next = function (value) {
            var contexts = this.contexts;
            if (contexts) {
                var len = contexts.length;
                for (var i = 0; i < len; i++) {
                    contexts[i].window.next(value);
                }
            }
        };
        WindowToggleSubscriber.prototype._error = function (err) {
            var contexts = this.contexts;
            this.contexts = null;
            if (contexts) {
                var len = contexts.length;
                var index = -1;
                while (++index < len) {
                    var context_1 = contexts[index];
                    context_1.window.error(err);
                    context_1.subscription.unsubscribe();
                }
            }
            _super.prototype._error.call(this, err);
        };
        WindowToggleSubscriber.prototype._complete = function () {
            var contexts = this.contexts;
            this.contexts = null;
            if (contexts) {
                var len = contexts.length;
                var index = -1;
                while (++index < len) {
                    var context_2 = contexts[index];
                    context_2.window.complete();
                    context_2.subscription.unsubscribe();
                }
            }
            _super.prototype._complete.call(this);
        };
        WindowToggleSubscriber.prototype._unsubscribe = function () {
            var contexts = this.contexts;
            this.contexts = null;
            if (contexts) {
                var len = contexts.length;
                var index = -1;
                while (++index < len) {
                    var context_3 = contexts[index];
                    context_3.window.unsubscribe();
                    context_3.subscription.unsubscribe();
                }
            }
        };
        WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            if (outerValue === this.openings) {
                var closingSelector = this.closingSelector;
                var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
                if (closingNotifier === errorObject_1.errorObject) {
                    return this.error(errorObject_1.errorObject.e);
                } else {
                    var window_1 = new Subject_1.Subject();
                    var subscription = new Subscription_1.Subscription();
                    var context_4 = { window: window_1, subscription: subscription };
                    this.contexts.push(context_4);
                    var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context_4);
                    if (innerSubscription.closed) {
                        this.closeWindow(this.contexts.length - 1);
                    } else {
                        innerSubscription.context = context_4;
                        subscription.add(innerSubscription);
                    }
                    this.destination.next(window_1);
                }
            } else {
                this.closeWindow(this.contexts.indexOf(outerValue));
            }
        };
        WindowToggleSubscriber.prototype.notifyError = function (err) {
            this.error(err);
        };
        WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
            if (inner !== this.openSubscription) {
                this.closeWindow(this.contexts.indexOf(inner.context));
            }
        };
        WindowToggleSubscriber.prototype.closeWindow = function (index) {
            if (index === -1) {
                return;
            }
            var contexts = this.contexts;
            var context = contexts[index];
            var window = context.window,
                subscription = context.subscription;
            contexts.splice(index, 1);
            window.complete();
            subscription.unsubscribe();
        };
        return WindowToggleSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/util/ObjectUnsubscribedError", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var ObjectUnsubscribedError = function (_super) {
        __extends(ObjectUnsubscribedError, _super);
        function ObjectUnsubscribedError() {
            var _this = _super.call(this, 'object unsubscribed') || this;
            _this.name = 'ObjectUnsubscribedError';
            Object.setPrototypeOf(_this, ObjectUnsubscribedError.prototype);
            return _this;
        }
        return ObjectUnsubscribedError;
    }(Error);
    exports.ObjectUnsubscribedError = ObjectUnsubscribedError;

});
System.registerDynamic("rxjs/internal/SubjectSubscription", ["rxjs/internal/Subscription"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var SubjectSubscription = function (_super) {
        __extends(SubjectSubscription, _super);
        function SubjectSubscription(subject, subscriber) {
            var _this = _super.call(this) || this;
            _this.subject = subject;
            _this.subscriber = subscriber;
            _this.closed = false;
            return _this;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.closed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;
            if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.subscriber);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    }(Subscription_1.Subscription);
    exports.SubjectSubscription = SubjectSubscription;

});
System.registerDynamic("rxjs/internal/Subject", ["rxjs/internal/Observable", "rxjs/internal/Subscriber", "rxjs/internal/Subscription", "rxjs/internal/util/ObjectUnsubscribedError", "rxjs/internal/SubjectSubscription", "rxjs/internal/symbol/rxSubscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var ObjectUnsubscribedError_1 = $__require("rxjs/internal/util/ObjectUnsubscribedError");
    var SubjectSubscription_1 = $__require("rxjs/internal/SubjectSubscription");
    var rxSubscriber_1 = $__require("rxjs/internal/symbol/rxSubscriber");
    var SubjectSubscriber = function (_super) {
        __extends(SubjectSubscriber, _super);
        function SubjectSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            return _this;
        }
        return SubjectSubscriber;
    }(Subscriber_1.Subscriber);
    exports.SubjectSubscriber = SubjectSubscriber;
    var Subject = function (_super) {
        __extends(Subject, _super);
        function Subject() {
            var _this = _super.call(this) || this;
            _this.observers = [];
            _this.closed = false;
            _this.isStopped = false;
            _this.hasError = false;
            _this.thrownError = null;
            return _this;
        }
        Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
            return new SubjectSubscriber(this);
        };
        Subject.prototype.lift = function (operator) {
            var subject = new AnonymousSubject(this, this);
            subject.operator = operator;
            return subject;
        };
        Subject.prototype.next = function (value) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            }
            if (!this.isStopped) {
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();
                for (var i = 0; i < len; i++) {
                    copy[i].next(value);
                }
            }
        };
        Subject.prototype.error = function (err) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            }
            this.hasError = true;
            this.thrownError = err;
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].error(err);
            }
            this.observers.length = 0;
        };
        Subject.prototype.complete = function () {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            }
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].complete();
            }
            this.observers.length = 0;
        };
        Subject.prototype.unsubscribe = function () {
            this.isStopped = true;
            this.closed = true;
            this.observers = null;
        };
        Subject.prototype._trySubscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            } else {
                return _super.prototype._trySubscribe.call(this, subscriber);
            }
        };
        Subject.prototype._subscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
            } else if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription_1.Subscription.EMPTY;
            } else if (this.isStopped) {
                subscriber.complete();
                return Subscription_1.Subscription.EMPTY;
            } else {
                this.observers.push(subscriber);
                return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
            }
        };
        Subject.prototype.asObservable = function () {
            var observable = new Observable_1.Observable();
            observable.source = this;
            return observable;
        };
        Subject.create = function (destination, source) {
            return new AnonymousSubject(destination, source);
        };
        return Subject;
    }(Observable_1.Observable);
    exports.Subject = Subject;
    var AnonymousSubject = function (_super) {
        __extends(AnonymousSubject, _super);
        function AnonymousSubject(destination, source) {
            var _this = _super.call(this) || this;
            _this.destination = destination;
            _this.source = source;
            return _this;
        }
        AnonymousSubject.prototype.next = function (value) {
            var destination = this.destination;
            if (destination && destination.next) {
                destination.next(value);
            }
        };
        AnonymousSubject.prototype.error = function (err) {
            var destination = this.destination;
            if (destination && destination.error) {
                this.destination.error(err);
            }
        };
        AnonymousSubject.prototype.complete = function () {
            var destination = this.destination;
            if (destination && destination.complete) {
                this.destination.complete();
            }
        };
        AnonymousSubject.prototype._subscribe = function (subscriber) {
            var source = this.source;
            if (source) {
                return this.source.subscribe(subscriber);
            } else {
                return Subscription_1.Subscription.EMPTY;
            }
        };
        return AnonymousSubject;
    }(Subject);
    exports.AnonymousSubject = AnonymousSubject;

});
System.registerDynamic("rxjs/internal/operators/windowWhen", ["rxjs/internal/Subject", "rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject_1 = $__require("rxjs/internal/Subject");
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function windowWhen(closingSelector) {
        return function windowWhenOperatorFunction(source) {
            return source.lift(new WindowOperator(closingSelector));
        };
    }
    exports.windowWhen = windowWhen;
    var WindowOperator = function () {
        function WindowOperator(closingSelector) {
            this.closingSelector = closingSelector;
        }
        WindowOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
        };
        return WindowOperator;
    }();
    var WindowSubscriber = function (_super) {
        __extends(WindowSubscriber, _super);
        function WindowSubscriber(destination, closingSelector) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            _this.closingSelector = closingSelector;
            _this.openWindow();
            return _this;
        }
        WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.openWindow(innerSub);
        };
        WindowSubscriber.prototype.notifyError = function (error, innerSub) {
            this._error(error);
        };
        WindowSubscriber.prototype.notifyComplete = function (innerSub) {
            this.openWindow(innerSub);
        };
        WindowSubscriber.prototype._next = function (value) {
            this.window.next(value);
        };
        WindowSubscriber.prototype._error = function (err) {
            this.window.error(err);
            this.destination.error(err);
            this.unsubscribeClosingNotification();
        };
        WindowSubscriber.prototype._complete = function () {
            this.window.complete();
            this.destination.complete();
            this.unsubscribeClosingNotification();
        };
        WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
            if (this.closingNotification) {
                this.closingNotification.unsubscribe();
            }
        };
        WindowSubscriber.prototype.openWindow = function (innerSub) {
            if (innerSub === void 0) {
                innerSub = null;
            }
            if (innerSub) {
                this.remove(innerSub);
                innerSub.unsubscribe();
            }
            var prevWindow = this.window;
            if (prevWindow) {
                prevWindow.complete();
            }
            var window = this.window = new Subject_1.Subject();
            this.destination.next(window);
            var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
            if (closingNotifier === errorObject_1.errorObject) {
                var err = errorObject_1.errorObject.e;
                this.destination.error(err);
                this.window.error(err);
            } else {
                this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
            }
        };
        return WindowSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/withLatestFrom", ["rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    function withLatestFrom() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return function (source) {
            var project;
            if (typeof args[args.length - 1] === 'function') {
                project = args.pop();
            }
            var observables = args;
            return source.lift(new WithLatestFromOperator(observables, project));
        };
    }
    exports.withLatestFrom = withLatestFrom;
    var WithLatestFromOperator = function () {
        function WithLatestFromOperator(observables, project) {
            this.observables = observables;
            this.project = project;
        }
        WithLatestFromOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
        };
        return WithLatestFromOperator;
    }();
    var WithLatestFromSubscriber = function (_super) {
        __extends(WithLatestFromSubscriber, _super);
        function WithLatestFromSubscriber(destination, observables, project) {
            var _this = _super.call(this, destination) || this;
            _this.observables = observables;
            _this.project = project;
            _this.toRespond = [];
            var len = observables.length;
            _this.values = new Array(len);
            for (var i = 0; i < len; i++) {
                _this.toRespond.push(i);
            }
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                _this.add(subscribeToResult_1.subscribeToResult(_this, observable, observable, i));
            }
            return _this;
        }
        WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.values[outerIndex] = innerValue;
            var toRespond = this.toRespond;
            if (toRespond.length > 0) {
                var found = toRespond.indexOf(outerIndex);
                if (found !== -1) {
                    toRespond.splice(found, 1);
                }
            }
        };
        WithLatestFromSubscriber.prototype.notifyComplete = function () {};
        WithLatestFromSubscriber.prototype._next = function (value) {
            if (this.toRespond.length === 0) {
                var args = [value].concat(this.values);
                if (this.project) {
                    this._tryProject(args);
                } else {
                    this.destination.next(args);
                }
            }
        };
        WithLatestFromSubscriber.prototype._tryProject = function (args) {
            var result;
            try {
                result = this.project.apply(this, args);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return WithLatestFromSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/zip", ["rxjs/internal/observable/zip"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var zip_1 = $__require("rxjs/internal/observable/zip");
    function zip() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return function zipOperatorFunction(source) {
            return source.lift.call(zip_1.zip.apply(void 0, [source].concat(observables)));
        };
    }
    exports.zip = zip;

});
System.registerDynamic("rxjs/internal/observable/fromArray", ["rxjs/internal/Observable", "rxjs/internal/Subscription", "rxjs/internal/util/subscribeToArray"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var subscribeToArray_1 = $__require("rxjs/internal/util/subscribeToArray");
    function fromArray(input, scheduler) {
        if (!scheduler) {
            return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
        } else {
            return new Observable_1.Observable(function (subscriber) {
                var sub = new Subscription_1.Subscription();
                var i = 0;
                sub.add(scheduler.schedule(function () {
                    if (i === input.length) {
                        subscriber.complete();
                        return;
                    }
                    subscriber.next(input[i++]);
                    if (!subscriber.closed) {
                        sub.add(this.schedule());
                    }
                }));
                return sub;
            });
        }
    }
    exports.fromArray = fromArray;

});
System.registerDynamic("rxjs/internal/OuterSubscriber", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var OuterSubscriber = function (_super) {
        __extends(OuterSubscriber, _super);
        function OuterSubscriber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        OuterSubscriber.prototype.notifyError = function (error, innerSub) {
            this.destination.error(error);
        };
        OuterSubscriber.prototype.notifyComplete = function (innerSub) {
            this.destination.complete();
        };
        return OuterSubscriber;
    }(Subscriber_1.Subscriber);
    exports.OuterSubscriber = OuterSubscriber;

});
System.registerDynamic("rxjs/internal/InnerSubscriber", ["rxjs/internal/Subscriber"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var InnerSubscriber = function (_super) {
        __extends(InnerSubscriber, _super);
        function InnerSubscriber(parent, outerValue, outerIndex) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            _this.outerValue = outerValue;
            _this.outerIndex = outerIndex;
            _this.index = 0;
            return _this;
        }
        InnerSubscriber.prototype._next = function (value) {
            this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
        };
        InnerSubscriber.prototype._error = function (error) {
            this.parent.notifyError(error, this);
            this.unsubscribe();
        };
        InnerSubscriber.prototype._complete = function () {
            this.parent.notifyComplete(this);
            this.unsubscribe();
        };
        return InnerSubscriber;
    }(Subscriber_1.Subscriber);
    exports.InnerSubscriber = InnerSubscriber;

});
System.registerDynamic("rxjs/internal/util/isArray", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isArray = Array.isArray || function (x) {
    return x && typeof x.length === 'number';
  };

});
System.registerDynamic("rxjs/internal/util/isFunction", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    function isFunction(x) {
        return typeof x === 'function';
    }
    exports.isFunction = isFunction;

});
System.registerDynamic("rxjs/internal/util/tryCatch", ["rxjs/internal/util/errorObject"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        } catch (e) {
            errorObject_1.errorObject.e = e;
            return errorObject_1.errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }
    exports.tryCatch = tryCatch;

});
System.registerDynamic("rxjs/internal/util/errorObject", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.errorObject = { e: {} };

});
System.registerDynamic("rxjs/internal/util/UnsubscriptionError", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var UnsubscriptionError = function (_super) {
        __extends(UnsubscriptionError, _super);
        function UnsubscriptionError(errors) {
            var _this = _super.call(this, errors ? errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) {
                return i + 1 + ") " + err.toString();
            }).join('\n  ') : '') || this;
            _this.errors = errors;
            _this.name = 'UnsubscriptionError';
            Object.setPrototypeOf(_this, UnsubscriptionError.prototype);
            return _this;
        }
        return UnsubscriptionError;
    }(Error);
    exports.UnsubscriptionError = UnsubscriptionError;

});
System.registerDynamic("rxjs/internal/Subscription", ["rxjs/internal/util/isArray", "rxjs/internal/util/isObject", "rxjs/internal/util/isFunction", "rxjs/internal/util/tryCatch", "rxjs/internal/util/errorObject", "rxjs/internal/util/UnsubscriptionError"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    var isObject_1 = $__require("rxjs/internal/util/isObject");
    var isFunction_1 = $__require("rxjs/internal/util/isFunction");
    var tryCatch_1 = $__require("rxjs/internal/util/tryCatch");
    var errorObject_1 = $__require("rxjs/internal/util/errorObject");
    var UnsubscriptionError_1 = $__require("rxjs/internal/util/UnsubscriptionError");
    var Subscription = function () {
        function Subscription(unsubscribe) {
            this.closed = false;
            this._parent = null;
            this._parents = null;
            this._subscriptions = null;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        Subscription.prototype.unsubscribe = function () {
            var hasErrors = false;
            var errors;
            if (this.closed) {
                return;
            }
            var _a = this,
                _parent = _a._parent,
                _parents = _a._parents,
                _unsubscribe = _a._unsubscribe,
                _subscriptions = _a._subscriptions;
            this.closed = true;
            this._parent = null;
            this._parents = null;
            this._subscriptions = null;
            var index = -1;
            var len = _parents ? _parents.length : 0;
            while (_parent) {
                _parent.remove(this);
                _parent = ++index < len && _parents[index] || null;
            }
            if (isFunction_1.isFunction(_unsubscribe)) {
                var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
                if (trial === errorObject_1.errorObject) {
                    hasErrors = true;
                    errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
                }
            }
            if (isArray_1.isArray(_subscriptions)) {
                index = -1;
                len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject_1.isObject(sub)) {
                        var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                        if (trial === errorObject_1.errorObject) {
                            hasErrors = true;
                            errors = errors || [];
                            var err = errorObject_1.errorObject.e;
                            if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                                errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                            } else {
                                errors.push(err);
                            }
                        }
                    }
                }
            }
            if (hasErrors) {
                throw new UnsubscriptionError_1.UnsubscriptionError(errors);
            }
        };
        Subscription.prototype.add = function (teardown) {
            if (!teardown || teardown === Subscription.EMPTY) {
                return Subscription.EMPTY;
            }
            if (teardown === this) {
                return this;
            }
            var subscription = teardown;
            switch (typeof teardown) {
                case 'function':
                    subscription = new Subscription(teardown);
                case 'object':
                    if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                        return subscription;
                    } else if (this.closed) {
                        subscription.unsubscribe();
                        return subscription;
                    } else if (typeof subscription._addParent !== 'function') {
                        var tmp = subscription;
                        subscription = new Subscription();
                        subscription._subscriptions = [tmp];
                    }
                    break;
                default:
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
            var subscriptions = this._subscriptions || (this._subscriptions = []);
            subscriptions.push(subscription);
            subscription._addParent(this);
            return subscription;
        };
        Subscription.prototype.remove = function (subscription) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.prototype._addParent = function (parent) {
            var _a = this,
                _parent = _a._parent,
                _parents = _a._parents;
            if (!_parent || _parent === parent) {
                this._parent = parent;
            } else if (!_parents) {
                this._parents = [parent];
            } else if (_parents.indexOf(parent) === -1) {
                _parents.push(parent);
            }
        };
        Subscription.EMPTY = function (empty) {
            empty.closed = true;
            return empty;
        }(new Subscription());
        return Subscription;
    }();
    exports.Subscription = Subscription;
    function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) {
            return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
        }, []);
    }

});
System.registerDynamic("rxjs/internal/Subscriber", ["rxjs/internal/util/isFunction", "rxjs/internal/Observer", "rxjs/internal/Subscription", "rxjs/internal/symbol/rxSubscriber", "rxjs/internal/config", "rxjs/internal/util/hostReportError"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var isFunction_1 = $__require("rxjs/internal/util/isFunction");
    var Observer_1 = $__require("rxjs/internal/Observer");
    var Subscription_1 = $__require("rxjs/internal/Subscription");
    var rxSubscriber_1 = $__require("rxjs/internal/symbol/rxSubscriber");
    var config_1 = $__require("rxjs/internal/config");
    var hostReportError_1 = $__require("rxjs/internal/util/hostReportError");
    var Subscriber = function (_super) {
        __extends(Subscriber, _super);
        function Subscriber(destinationOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this.syncErrorValue = null;
            _this.syncErrorThrown = false;
            _this.syncErrorThrowable = false;
            _this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    _this.destination = Observer_1.empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        _this.destination = Observer_1.empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        if (isTrustedSubscriber(destinationOrNext)) {
                            var trustedSubscriber = destinationOrNext[rxSubscriber_1.rxSubscriber]();
                            _this.syncErrorThrowable = trustedSubscriber.syncErrorThrowable;
                            _this.destination = trustedSubscriber;
                            trustedSubscriber.add(_this);
                        } else {
                            _this.syncErrorThrowable = true;
                            _this.destination = new SafeSubscriber(_this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    _this.syncErrorThrowable = true;
                    _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                    break;
            }
            return _this;
        }
        Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
            return this;
        };
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        Subscriber.prototype._unsubscribeAndRecycle = function () {
            var _a = this,
                _parent = _a._parent,
                _parents = _a._parents;
            this._parent = null;
            this._parents = null;
            this.unsubscribe();
            this.closed = false;
            this.isStopped = false;
            this._parent = _parent;
            this._parents = _parents;
            return this;
        };
        return Subscriber;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    var SafeSubscriber = function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this._parentSubscriber = _parentSubscriber;
            var next;
            var context = _this;
            if (isFunction_1.isFunction(observerOrNext)) {
                next = observerOrNext;
            } else if (observerOrNext) {
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (observerOrNext !== Observer_1.empty) {
                    context = Object.create(observerOrNext);
                    if (isFunction_1.isFunction(context.unsubscribe)) {
                        _this.add(context.unsubscribe.bind(context));
                    }
                    context.unsubscribe = _this.unsubscribe.bind(_this);
                }
            }
            _this._context = context;
            _this._next = next;
            _this._error = error;
            _this._complete = complete;
            return _this;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parentSubscriber = this._parentSubscriber;
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
                if (this._error) {
                    if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    } else {
                        this.__tryOrSetError(_parentSubscriber, this._error, err);
                        this.unsubscribe();
                    }
                } else if (!_parentSubscriber.syncErrorThrowable) {
                    this.unsubscribe();
                    if (useDeprecatedSynchronousErrorHandling) {
                        throw err;
                    }
                    hostReportError_1.hostReportError(err);
                } else {
                    if (useDeprecatedSynchronousErrorHandling) {
                        _parentSubscriber.syncErrorValue = err;
                        _parentSubscriber.syncErrorThrown = true;
                    } else {
                        hostReportError_1.hostReportError(err);
                    }
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            var _this = this;
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                if (this._complete) {
                    var wrappedComplete = function () {
                        return _this._complete.call(_this._context);
                    };
                    if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(wrappedComplete);
                        this.unsubscribe();
                    } else {
                        this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                        this.unsubscribe();
                    }
                } else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            } catch (err) {
                this.unsubscribe();
                if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                    throw err;
                } else {
                    hostReportError_1.hostReportError(err);
                }
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw new Error('bad call');
            }
            try {
                fn.call(this._context, value);
            } catch (err) {
                if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                    parent.syncErrorValue = err;
                    parent.syncErrorThrown = true;
                    return true;
                } else {
                    hostReportError_1.hostReportError(err);
                    return true;
                }
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parentSubscriber = this._parentSubscriber;
            this._context = null;
            this._parentSubscriber = null;
            _parentSubscriber.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber);
    function isTrustedSubscriber(obj) {
        return obj instanceof Subscriber || 'syncErrorThrowable' in obj && obj[rxSubscriber_1.rxSubscriber];
    }

});
System.registerDynamic("rxjs/internal/symbol/rxSubscriber", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rxSubscriber = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('rxSubscriber') : '@@rxSubscriber';
    exports.$$rxSubscriber = exports.rxSubscriber;

});
System.registerDynamic("rxjs/internal/Observer", ["rxjs/internal/config", "rxjs/internal/util/hostReportError"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var config_1 = $__require("rxjs/internal/config");
    var hostReportError_1 = $__require("rxjs/internal/util/hostReportError");
    exports.empty = {
        closed: true,
        next: function (value) {},
        error: function (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            } else {
                hostReportError_1.hostReportError(err);
            }
        },
        complete: function () {}
    };

});
System.registerDynamic("rxjs/internal/util/toSubscriber", ["rxjs/internal/Subscriber", "rxjs/internal/symbol/rxSubscriber", "rxjs/internal/Observer"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var rxSubscriber_1 = $__require("rxjs/internal/symbol/rxSubscriber");
    var Observer_1 = $__require("rxjs/internal/Observer");
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber_1.Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
                return nextOrObserver[rxSubscriber_1.rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber_1.Subscriber(Observer_1.empty);
        }
        return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }
    exports.toSubscriber = toSubscriber;

});
System.registerDynamic("rxjs/internal/util/noop", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  function noop() {}
  exports.noop = noop;

});
System.registerDynamic("rxjs/internal/util/pipe", ["rxjs/internal/util/noop"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var noop_1 = $__require("rxjs/internal/util/noop");
    function pipe() {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fns[_i] = arguments[_i];
        }
        return pipeFromArray(fns);
    }
    exports.pipe = pipe;
    function pipeFromArray(fns) {
        if (!fns) {
            return noop_1.noop;
        }
        if (fns.length === 1) {
            return fns[0];
        }
        return function piped(input) {
            return fns.reduce(function (prev, fn) {
                return fn(prev);
            }, input);
        };
    }
    exports.pipeFromArray = pipeFromArray;

});
System.registerDynamic("rxjs/internal/config", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
        Promise: undefined,
        set useDeprecatedSynchronousErrorHandling(value) {
            if (value) {
                var error = new Error();
                console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
            } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
                console.log('RxJS: Back to a better error behavior. Thank you. <3');
            }
            _enable_super_gross_mode_that_will_cause_bad_things = value;
        },
        get useDeprecatedSynchronousErrorHandling() {
            return _enable_super_gross_mode_that_will_cause_bad_things;
        }
    };

});
System.registerDynamic("rxjs/internal/Observable", ["rxjs/internal/util/toSubscriber", "rxjs/internal/symbol/observable", "rxjs/internal/util/pipe", "rxjs/internal/config"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var toSubscriber_1 = $__require("rxjs/internal/util/toSubscriber");
    var observable_1 = $__require("rxjs/internal/symbol/observable");
    var pipe_1 = $__require("rxjs/internal/util/pipe");
    var config_1 = $__require("rxjs/internal/config");
    var Observable = function () {
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        Observable.prototype.lift = function (operator) {
            var observable = new Observable();
            observable.source = this;
            observable.operator = operator;
            return observable;
        };
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
            if (operator) {
                operator.call(sink, this.source);
            } else {
                sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
            }
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                if (sink.syncErrorThrowable) {
                    sink.syncErrorThrowable = false;
                    if (sink.syncErrorThrown) {
                        throw sink.syncErrorValue;
                    }
                }
            }
            return sink;
        };
        Observable.prototype._trySubscribe = function (sink) {
            try {
                return this._subscribe(sink);
            } catch (err) {
                if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                    sink.syncErrorThrown = true;
                    sink.syncErrorValue = err;
                }
                sink.error(err);
            }
        };
        Observable.prototype.forEach = function (next, promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var subscription;
                subscription = _this.subscribe(function (value) {
                    try {
                        next(value);
                    } catch (err) {
                        reject(err);
                        if (subscription) {
                            subscription.unsubscribe();
                        }
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            var source = this.source;
            return source && source.subscribe(subscriber);
        };
        Observable.prototype[observable_1.observable] = function () {
            return this;
        };
        Observable.prototype.pipe = function () {
            var operations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                operations[_i] = arguments[_i];
            }
            if (operations.length === 0) {
                return this;
            }
            return pipe_1.pipeFromArray(operations)(this);
        };
        Observable.prototype.toPromise = function (promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var value;
                _this.subscribe(function (x) {
                    return value = x;
                }, function (err) {
                    return reject(err);
                }, function () {
                    return resolve(value);
                });
            });
        };
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }();
    exports.Observable = Observable;
    function getPromiseCtor(promiseCtor) {
        if (!promiseCtor) {
            promiseCtor = config_1.config.Promise || Promise;
        }
        if (!promiseCtor) {
            throw new Error('no Promise impl found');
        }
        return promiseCtor;
    }

});
System.registerDynamic("rxjs/internal/util/subscribeToArray", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.subscribeToArray = function (array) {
        return function (subscriber) {
            for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
                subscriber.next(array[i]);
            }
            if (!subscriber.closed) {
                subscriber.complete();
            }
        };
    };

});
System.registerDynamic("rxjs/internal/util/hostReportError", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    function hostReportError(err) {
        setTimeout(function () {
            throw err;
        });
    }
    exports.hostReportError = hostReportError;

});
System.registerDynamic("rxjs/internal/util/subscribeToPromise", ["rxjs/internal/util/hostReportError"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var hostReportError_1 = $__require("rxjs/internal/util/hostReportError");
    exports.subscribeToPromise = function (promise) {
        return function (subscriber) {
            promise.then(function (value) {
                if (!subscriber.closed) {
                    subscriber.next(value);
                    subscriber.complete();
                }
            }, function (err) {
                return subscriber.error(err);
            }).then(null, hostReportError_1.hostReportError);
            return subscriber;
        };
    };

});
System.registerDynamic("rxjs/internal/util/subscribeToIterable", ["rxjs/internal/symbol/iterator"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var iterator_1 = $__require("rxjs/internal/symbol/iterator");
    exports.subscribeToIterable = function (iterable) {
        return function (subscriber) {
            var iterator = iterable[iterator_1.iterator]();
            do {
                var item = iterator.next();
                if (item.done) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(item.value);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
            if (typeof iterator.return === 'function') {
                subscriber.add(function () {
                    if (iterator.return) {
                        iterator.return();
                    }
                });
            }
            return subscriber;
        };
    };

});
System.registerDynamic("rxjs/internal/util/subscribeToObservable", ["rxjs/internal/symbol/observable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var observable_1 = $__require("rxjs/internal/symbol/observable");
    exports.subscribeToObservable = function (obj) {
        return function (subscriber) {
            var obs = obj[observable_1.observable]();
            if (typeof obs.subscribe !== 'function') {
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
            } else {
                return obs.subscribe(subscriber);
            }
        };
    };

});
System.registerDynamic("rxjs/internal/util/isArrayLike", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isArrayLike = function (x) {
    return x && typeof x.length === 'number' && typeof x !== 'function';
  };

});
System.registerDynamic("rxjs/internal/util/isPromise", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    function isPromise(value) {
        return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }
    exports.isPromise = isPromise;

});
System.registerDynamic("rxjs/internal/util/isObject", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    function isObject(x) {
        return x != null && typeof x === 'object';
    }
    exports.isObject = isObject;

});
System.registerDynamic("rxjs/internal/symbol/observable", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';

});
System.registerDynamic("rxjs/internal/util/subscribeTo", ["rxjs/internal/Observable", "rxjs/internal/util/subscribeToArray", "rxjs/internal/util/subscribeToPromise", "rxjs/internal/util/subscribeToIterable", "rxjs/internal/util/subscribeToObservable", "rxjs/internal/util/isArrayLike", "rxjs/internal/util/isPromise", "rxjs/internal/util/isObject", "rxjs/internal/symbol/iterator", "rxjs/internal/symbol/observable"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = $__require("rxjs/internal/Observable");
    var subscribeToArray_1 = $__require("rxjs/internal/util/subscribeToArray");
    var subscribeToPromise_1 = $__require("rxjs/internal/util/subscribeToPromise");
    var subscribeToIterable_1 = $__require("rxjs/internal/util/subscribeToIterable");
    var subscribeToObservable_1 = $__require("rxjs/internal/util/subscribeToObservable");
    var isArrayLike_1 = $__require("rxjs/internal/util/isArrayLike");
    var isPromise_1 = $__require("rxjs/internal/util/isPromise");
    var isObject_1 = $__require("rxjs/internal/util/isObject");
    var iterator_1 = $__require("rxjs/internal/symbol/iterator");
    var observable_1 = $__require("rxjs/internal/symbol/observable");
    exports.subscribeTo = function (result) {
        if (result instanceof Observable_1.Observable) {
            return function (subscriber) {
                if (result._isScalar) {
                    subscriber.next(result.value);
                    subscriber.complete();
                    return undefined;
                } else {
                    return result.subscribe(subscriber);
                }
            };
        } else if (result && typeof result[observable_1.observable] === 'function') {
            return subscribeToObservable_1.subscribeToObservable(result);
        } else if (isArrayLike_1.isArrayLike(result)) {
            return subscribeToArray_1.subscribeToArray(result);
        } else if (isPromise_1.isPromise(result)) {
            return subscribeToPromise_1.subscribeToPromise(result);
        } else if (result && typeof result[iterator_1.iterator] === 'function') {
            return subscribeToIterable_1.subscribeToIterable(result);
        } else {
            var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
            var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
            throw new TypeError(msg);
        }
    };

});
System.registerDynamic("rxjs/internal/util/subscribeToResult", ["rxjs/internal/InnerSubscriber", "rxjs/internal/util/subscribeTo"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var InnerSubscriber_1 = $__require("rxjs/internal/InnerSubscriber");
    var subscribeTo_1 = $__require("rxjs/internal/util/subscribeTo");
    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
        var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
        return subscribeTo_1.subscribeTo(result)(destination);
    }
    exports.subscribeToResult = subscribeToResult;

});
System.registerDynamic("rxjs/internal/symbol/iterator", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    function getSymbolIterator() {
        if (typeof Symbol !== 'function' || !Symbol.iterator) {
            return '@@iterator';
        }
        return Symbol.iterator;
    }
    exports.getSymbolIterator = getSymbolIterator;
    exports.iterator = getSymbolIterator();
    exports.$$iterator = exports.iterator;

});
System.registerDynamic("rxjs/internal/observable/zip", ["rxjs/internal/observable/fromArray", "rxjs/internal/util/isArray", "rxjs/internal/Subscriber", "rxjs/internal/OuterSubscriber", "rxjs/internal/util/subscribeToResult", "rxjs/internal/symbol/iterator"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var fromArray_1 = $__require("rxjs/internal/observable/fromArray");
    var isArray_1 = $__require("rxjs/internal/util/isArray");
    var Subscriber_1 = $__require("rxjs/internal/Subscriber");
    var OuterSubscriber_1 = $__require("rxjs/internal/OuterSubscriber");
    var subscribeToResult_1 = $__require("rxjs/internal/util/subscribeToResult");
    var iterator_1 = $__require("rxjs/internal/symbol/iterator");
    function zip() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        var resultSelector = observables[observables.length - 1];
        if (typeof resultSelector === 'function') {
            observables.pop();
        }
        return fromArray_1.fromArray(observables, undefined).lift(new ZipOperator(resultSelector));
    }
    exports.zip = zip;
    var ZipOperator = function () {
        function ZipOperator(resultSelector) {
            this.resultSelector = resultSelector;
        }
        ZipOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
        };
        return ZipOperator;
    }();
    exports.ZipOperator = ZipOperator;
    var ZipSubscriber = function (_super) {
        __extends(ZipSubscriber, _super);
        function ZipSubscriber(destination, resultSelector, values) {
            if (values === void 0) {
                values = Object.create(null);
            }
            var _this = _super.call(this, destination) || this;
            _this.iterators = [];
            _this.active = 0;
            _this.resultSelector = typeof resultSelector === 'function' ? resultSelector : null;
            _this.values = values;
            return _this;
        }
        ZipSubscriber.prototype._next = function (value) {
            var iterators = this.iterators;
            if (isArray_1.isArray(value)) {
                iterators.push(new StaticArrayIterator(value));
            } else if (typeof value[iterator_1.iterator] === 'function') {
                iterators.push(new StaticIterator(value[iterator_1.iterator]()));
            } else {
                iterators.push(new ZipBufferIterator(this.destination, this, value));
            }
        };
        ZipSubscriber.prototype._complete = function () {
            var iterators = this.iterators;
            var len = iterators.length;
            if (len === 0) {
                this.destination.complete();
                return;
            }
            this.active = len;
            for (var i = 0; i < len; i++) {
                var iterator = iterators[i];
                if (iterator.stillUnsubscribed) {
                    this.add(iterator.subscribe(iterator, i));
                } else {
                    this.active--;
                }
            }
        };
        ZipSubscriber.prototype.notifyInactive = function () {
            this.active--;
            if (this.active === 0) {
                this.destination.complete();
            }
        };
        ZipSubscriber.prototype.checkIterators = function () {
            var iterators = this.iterators;
            var len = iterators.length;
            var destination = this.destination;
            for (var i = 0; i < len; i++) {
                var iterator = iterators[i];
                if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                    return;
                }
            }
            var shouldComplete = false;
            var args = [];
            for (var i = 0; i < len; i++) {
                var iterator = iterators[i];
                var result = iterator.next();
                if (iterator.hasCompleted()) {
                    shouldComplete = true;
                }
                if (result.done) {
                    destination.complete();
                    return;
                }
                args.push(result.value);
            }
            if (this.resultSelector) {
                this._tryresultSelector(args);
            } else {
                destination.next(args);
            }
            if (shouldComplete) {
                destination.complete();
            }
        };
        ZipSubscriber.prototype._tryresultSelector = function (args) {
            var result;
            try {
                result = this.resultSelector.apply(this, args);
            } catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return ZipSubscriber;
    }(Subscriber_1.Subscriber);
    exports.ZipSubscriber = ZipSubscriber;
    var StaticIterator = function () {
        function StaticIterator(iterator) {
            this.iterator = iterator;
            this.nextResult = iterator.next();
        }
        StaticIterator.prototype.hasValue = function () {
            return true;
        };
        StaticIterator.prototype.next = function () {
            var result = this.nextResult;
            this.nextResult = this.iterator.next();
            return result;
        };
        StaticIterator.prototype.hasCompleted = function () {
            var nextResult = this.nextResult;
            return nextResult && nextResult.done;
        };
        return StaticIterator;
    }();
    var StaticArrayIterator = function () {
        function StaticArrayIterator(array) {
            this.array = array;
            this.index = 0;
            this.length = 0;
            this.length = array.length;
        }
        StaticArrayIterator.prototype[iterator_1.iterator] = function () {
            return this;
        };
        StaticArrayIterator.prototype.next = function (value) {
            var i = this.index++;
            var array = this.array;
            return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
        };
        StaticArrayIterator.prototype.hasValue = function () {
            return this.array.length > this.index;
        };
        StaticArrayIterator.prototype.hasCompleted = function () {
            return this.array.length === this.index;
        };
        return StaticArrayIterator;
    }();
    var ZipBufferIterator = function (_super) {
        __extends(ZipBufferIterator, _super);
        function ZipBufferIterator(destination, parent, observable) {
            var _this = _super.call(this, destination) || this;
            _this.parent = parent;
            _this.observable = observable;
            _this.stillUnsubscribed = true;
            _this.buffer = [];
            _this.isComplete = false;
            return _this;
        }
        ZipBufferIterator.prototype[iterator_1.iterator] = function () {
            return this;
        };
        ZipBufferIterator.prototype.next = function () {
            var buffer = this.buffer;
            if (buffer.length === 0 && this.isComplete) {
                return { value: null, done: true };
            } else {
                return { value: buffer.shift(), done: false };
            }
        };
        ZipBufferIterator.prototype.hasValue = function () {
            return this.buffer.length > 0;
        };
        ZipBufferIterator.prototype.hasCompleted = function () {
            return this.buffer.length === 0 && this.isComplete;
        };
        ZipBufferIterator.prototype.notifyComplete = function () {
            if (this.buffer.length > 0) {
                this.isComplete = true;
                this.parent.notifyInactive();
            } else {
                this.destination.complete();
            }
        };
        ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.buffer.push(innerValue);
            this.parent.checkIterators();
        };
        ZipBufferIterator.prototype.subscribe = function (value, index) {
            return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
        };
        return ZipBufferIterator;
    }(OuterSubscriber_1.OuterSubscriber);

});
System.registerDynamic("rxjs/internal/operators/zipAll", ["rxjs/internal/observable/zip"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var zip_1 = $__require("rxjs/internal/observable/zip");
    function zipAll(project) {
        return function (source) {
            return source.lift(new zip_1.ZipOperator(project));
        };
    }
    exports.zipAll = zipAll;

});
System.registerDynamic("rxjs/operators", ["rxjs/internal/operators/audit", "rxjs/internal/operators/auditTime", "rxjs/internal/operators/buffer", "rxjs/internal/operators/bufferCount", "rxjs/internal/operators/bufferTime", "rxjs/internal/operators/bufferToggle", "rxjs/internal/operators/bufferWhen", "rxjs/internal/operators/catchError", "rxjs/internal/operators/combineAll", "rxjs/internal/operators/combineLatest", "rxjs/internal/operators/concat", "rxjs/internal/operators/concatAll", "rxjs/internal/operators/concatMap", "rxjs/internal/operators/concatMapTo", "rxjs/internal/operators/count", "rxjs/internal/operators/debounce", "rxjs/internal/operators/debounceTime", "rxjs/internal/operators/defaultIfEmpty", "rxjs/internal/operators/delay", "rxjs/internal/operators/delayWhen", "rxjs/internal/operators/dematerialize", "rxjs/internal/operators/distinct", "rxjs/internal/operators/distinctUntilChanged", "rxjs/internal/operators/distinctUntilKeyChanged", "rxjs/internal/operators/elementAt", "rxjs/internal/operators/endWith", "rxjs/internal/operators/every", "rxjs/internal/operators/exhaust", "rxjs/internal/operators/exhaustMap", "rxjs/internal/operators/expand", "rxjs/internal/operators/filter", "rxjs/internal/operators/finalize", "rxjs/internal/operators/find", "rxjs/internal/operators/findIndex", "rxjs/internal/operators/first", "rxjs/internal/operators/groupBy", "rxjs/internal/operators/ignoreElements", "rxjs/internal/operators/isEmpty", "rxjs/internal/operators/last", "rxjs/internal/operators/map", "rxjs/internal/operators/mapTo", "rxjs/internal/operators/materialize", "rxjs/internal/operators/max", "rxjs/internal/operators/merge", "rxjs/internal/operators/mergeAll", "rxjs/internal/operators/mergeMap", "rxjs/internal/operators/mergeMapTo", "rxjs/internal/operators/mergeScan", "rxjs/internal/operators/min", "rxjs/internal/operators/multicast", "rxjs/internal/operators/observeOn", "rxjs/internal/operators/onErrorResumeNext", "rxjs/internal/operators/pairwise", "rxjs/internal/operators/partition", "rxjs/internal/operators/pluck", "rxjs/internal/operators/publish", "rxjs/internal/operators/publishBehavior", "rxjs/internal/operators/publishLast", "rxjs/internal/operators/publishReplay", "rxjs/internal/operators/race", "rxjs/internal/operators/reduce", "rxjs/internal/operators/repeat", "rxjs/internal/operators/repeatWhen", "rxjs/internal/operators/retry", "rxjs/internal/operators/retryWhen", "rxjs/internal/operators/refCount", "rxjs/internal/operators/sample", "rxjs/internal/operators/sampleTime", "rxjs/internal/operators/scan", "rxjs/internal/operators/sequenceEqual", "rxjs/internal/operators/share", "rxjs/internal/operators/shareReplay", "rxjs/internal/operators/single", "rxjs/internal/operators/skip", "rxjs/internal/operators/skipLast", "rxjs/internal/operators/skipUntil", "rxjs/internal/operators/skipWhile", "rxjs/internal/operators/startWith", "rxjs/internal/operators/subscribeOn", "rxjs/internal/operators/switchAll", "rxjs/internal/operators/switchMap", "rxjs/internal/operators/switchMapTo", "rxjs/internal/operators/take", "rxjs/internal/operators/takeLast", "rxjs/internal/operators/takeUntil", "rxjs/internal/operators/takeWhile", "rxjs/internal/operators/tap", "rxjs/internal/operators/throttle", "rxjs/internal/operators/throttleTime", "rxjs/internal/operators/throwIfEmpty", "rxjs/internal/operators/timeInterval", "rxjs/internal/operators/timeout", "rxjs/internal/operators/timeoutWith", "rxjs/internal/operators/timestamp", "rxjs/internal/operators/toArray", "rxjs/internal/operators/window", "rxjs/internal/operators/windowCount", "rxjs/internal/operators/windowTime", "rxjs/internal/operators/windowToggle", "rxjs/internal/operators/windowWhen", "rxjs/internal/operators/withLatestFrom", "rxjs/internal/operators/zip", "rxjs/internal/operators/zipAll"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var audit_1 = $__require("rxjs/internal/operators/audit");
  exports.audit = audit_1.audit;
  var auditTime_1 = $__require("rxjs/internal/operators/auditTime");
  exports.auditTime = auditTime_1.auditTime;
  var buffer_1 = $__require("rxjs/internal/operators/buffer");
  exports.buffer = buffer_1.buffer;
  var bufferCount_1 = $__require("rxjs/internal/operators/bufferCount");
  exports.bufferCount = bufferCount_1.bufferCount;
  var bufferTime_1 = $__require("rxjs/internal/operators/bufferTime");
  exports.bufferTime = bufferTime_1.bufferTime;
  var bufferToggle_1 = $__require("rxjs/internal/operators/bufferToggle");
  exports.bufferToggle = bufferToggle_1.bufferToggle;
  var bufferWhen_1 = $__require("rxjs/internal/operators/bufferWhen");
  exports.bufferWhen = bufferWhen_1.bufferWhen;
  var catchError_1 = $__require("rxjs/internal/operators/catchError");
  exports.catchError = catchError_1.catchError;
  var combineAll_1 = $__require("rxjs/internal/operators/combineAll");
  exports.combineAll = combineAll_1.combineAll;
  var combineLatest_1 = $__require("rxjs/internal/operators/combineLatest");
  exports.combineLatest = combineLatest_1.combineLatest;
  var concat_1 = $__require("rxjs/internal/operators/concat");
  exports.concat = concat_1.concat;
  var concatAll_1 = $__require("rxjs/internal/operators/concatAll");
  exports.concatAll = concatAll_1.concatAll;
  var concatMap_1 = $__require("rxjs/internal/operators/concatMap");
  exports.concatMap = concatMap_1.concatMap;
  var concatMapTo_1 = $__require("rxjs/internal/operators/concatMapTo");
  exports.concatMapTo = concatMapTo_1.concatMapTo;
  var count_1 = $__require("rxjs/internal/operators/count");
  exports.count = count_1.count;
  var debounce_1 = $__require("rxjs/internal/operators/debounce");
  exports.debounce = debounce_1.debounce;
  var debounceTime_1 = $__require("rxjs/internal/operators/debounceTime");
  exports.debounceTime = debounceTime_1.debounceTime;
  var defaultIfEmpty_1 = $__require("rxjs/internal/operators/defaultIfEmpty");
  exports.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
  var delay_1 = $__require("rxjs/internal/operators/delay");
  exports.delay = delay_1.delay;
  var delayWhen_1 = $__require("rxjs/internal/operators/delayWhen");
  exports.delayWhen = delayWhen_1.delayWhen;
  var dematerialize_1 = $__require("rxjs/internal/operators/dematerialize");
  exports.dematerialize = dematerialize_1.dematerialize;
  var distinct_1 = $__require("rxjs/internal/operators/distinct");
  exports.distinct = distinct_1.distinct;
  var distinctUntilChanged_1 = $__require("rxjs/internal/operators/distinctUntilChanged");
  exports.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
  var distinctUntilKeyChanged_1 = $__require("rxjs/internal/operators/distinctUntilKeyChanged");
  exports.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
  var elementAt_1 = $__require("rxjs/internal/operators/elementAt");
  exports.elementAt = elementAt_1.elementAt;
  var endWith_1 = $__require("rxjs/internal/operators/endWith");
  exports.endWith = endWith_1.endWith;
  var every_1 = $__require("rxjs/internal/operators/every");
  exports.every = every_1.every;
  var exhaust_1 = $__require("rxjs/internal/operators/exhaust");
  exports.exhaust = exhaust_1.exhaust;
  var exhaustMap_1 = $__require("rxjs/internal/operators/exhaustMap");
  exports.exhaustMap = exhaustMap_1.exhaustMap;
  var expand_1 = $__require("rxjs/internal/operators/expand");
  exports.expand = expand_1.expand;
  var filter_1 = $__require("rxjs/internal/operators/filter");
  exports.filter = filter_1.filter;
  var finalize_1 = $__require("rxjs/internal/operators/finalize");
  exports.finalize = finalize_1.finalize;
  var find_1 = $__require("rxjs/internal/operators/find");
  exports.find = find_1.find;
  var findIndex_1 = $__require("rxjs/internal/operators/findIndex");
  exports.findIndex = findIndex_1.findIndex;
  var first_1 = $__require("rxjs/internal/operators/first");
  exports.first = first_1.first;
  var groupBy_1 = $__require("rxjs/internal/operators/groupBy");
  exports.groupBy = groupBy_1.groupBy;
  var ignoreElements_1 = $__require("rxjs/internal/operators/ignoreElements");
  exports.ignoreElements = ignoreElements_1.ignoreElements;
  var isEmpty_1 = $__require("rxjs/internal/operators/isEmpty");
  exports.isEmpty = isEmpty_1.isEmpty;
  var last_1 = $__require("rxjs/internal/operators/last");
  exports.last = last_1.last;
  var map_1 = $__require("rxjs/internal/operators/map");
  exports.map = map_1.map;
  var mapTo_1 = $__require("rxjs/internal/operators/mapTo");
  exports.mapTo = mapTo_1.mapTo;
  var materialize_1 = $__require("rxjs/internal/operators/materialize");
  exports.materialize = materialize_1.materialize;
  var max_1 = $__require("rxjs/internal/operators/max");
  exports.max = max_1.max;
  var merge_1 = $__require("rxjs/internal/operators/merge");
  exports.merge = merge_1.merge;
  var mergeAll_1 = $__require("rxjs/internal/operators/mergeAll");
  exports.mergeAll = mergeAll_1.mergeAll;
  var mergeMap_1 = $__require("rxjs/internal/operators/mergeMap");
  exports.mergeMap = mergeMap_1.mergeMap;
  var mergeMap_2 = $__require("rxjs/internal/operators/mergeMap");
  exports.flatMap = mergeMap_2.mergeMap;
  var mergeMapTo_1 = $__require("rxjs/internal/operators/mergeMapTo");
  exports.mergeMapTo = mergeMapTo_1.mergeMapTo;
  var mergeScan_1 = $__require("rxjs/internal/operators/mergeScan");
  exports.mergeScan = mergeScan_1.mergeScan;
  var min_1 = $__require("rxjs/internal/operators/min");
  exports.min = min_1.min;
  var multicast_1 = $__require("rxjs/internal/operators/multicast");
  exports.multicast = multicast_1.multicast;
  var observeOn_1 = $__require("rxjs/internal/operators/observeOn");
  exports.observeOn = observeOn_1.observeOn;
  var onErrorResumeNext_1 = $__require("rxjs/internal/operators/onErrorResumeNext");
  exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
  var pairwise_1 = $__require("rxjs/internal/operators/pairwise");
  exports.pairwise = pairwise_1.pairwise;
  var partition_1 = $__require("rxjs/internal/operators/partition");
  exports.partition = partition_1.partition;
  var pluck_1 = $__require("rxjs/internal/operators/pluck");
  exports.pluck = pluck_1.pluck;
  var publish_1 = $__require("rxjs/internal/operators/publish");
  exports.publish = publish_1.publish;
  var publishBehavior_1 = $__require("rxjs/internal/operators/publishBehavior");
  exports.publishBehavior = publishBehavior_1.publishBehavior;
  var publishLast_1 = $__require("rxjs/internal/operators/publishLast");
  exports.publishLast = publishLast_1.publishLast;
  var publishReplay_1 = $__require("rxjs/internal/operators/publishReplay");
  exports.publishReplay = publishReplay_1.publishReplay;
  var race_1 = $__require("rxjs/internal/operators/race");
  exports.race = race_1.race;
  var reduce_1 = $__require("rxjs/internal/operators/reduce");
  exports.reduce = reduce_1.reduce;
  var repeat_1 = $__require("rxjs/internal/operators/repeat");
  exports.repeat = repeat_1.repeat;
  var repeatWhen_1 = $__require("rxjs/internal/operators/repeatWhen");
  exports.repeatWhen = repeatWhen_1.repeatWhen;
  var retry_1 = $__require("rxjs/internal/operators/retry");
  exports.retry = retry_1.retry;
  var retryWhen_1 = $__require("rxjs/internal/operators/retryWhen");
  exports.retryWhen = retryWhen_1.retryWhen;
  var refCount_1 = $__require("rxjs/internal/operators/refCount");
  exports.refCount = refCount_1.refCount;
  var sample_1 = $__require("rxjs/internal/operators/sample");
  exports.sample = sample_1.sample;
  var sampleTime_1 = $__require("rxjs/internal/operators/sampleTime");
  exports.sampleTime = sampleTime_1.sampleTime;
  var scan_1 = $__require("rxjs/internal/operators/scan");
  exports.scan = scan_1.scan;
  var sequenceEqual_1 = $__require("rxjs/internal/operators/sequenceEqual");
  exports.sequenceEqual = sequenceEqual_1.sequenceEqual;
  var share_1 = $__require("rxjs/internal/operators/share");
  exports.share = share_1.share;
  var shareReplay_1 = $__require("rxjs/internal/operators/shareReplay");
  exports.shareReplay = shareReplay_1.shareReplay;
  var single_1 = $__require("rxjs/internal/operators/single");
  exports.single = single_1.single;
  var skip_1 = $__require("rxjs/internal/operators/skip");
  exports.skip = skip_1.skip;
  var skipLast_1 = $__require("rxjs/internal/operators/skipLast");
  exports.skipLast = skipLast_1.skipLast;
  var skipUntil_1 = $__require("rxjs/internal/operators/skipUntil");
  exports.skipUntil = skipUntil_1.skipUntil;
  var skipWhile_1 = $__require("rxjs/internal/operators/skipWhile");
  exports.skipWhile = skipWhile_1.skipWhile;
  var startWith_1 = $__require("rxjs/internal/operators/startWith");
  exports.startWith = startWith_1.startWith;
  var subscribeOn_1 = $__require("rxjs/internal/operators/subscribeOn");
  exports.subscribeOn = subscribeOn_1.subscribeOn;
  var switchAll_1 = $__require("rxjs/internal/operators/switchAll");
  exports.switchAll = switchAll_1.switchAll;
  var switchMap_1 = $__require("rxjs/internal/operators/switchMap");
  exports.switchMap = switchMap_1.switchMap;
  var switchMapTo_1 = $__require("rxjs/internal/operators/switchMapTo");
  exports.switchMapTo = switchMapTo_1.switchMapTo;
  var take_1 = $__require("rxjs/internal/operators/take");
  exports.take = take_1.take;
  var takeLast_1 = $__require("rxjs/internal/operators/takeLast");
  exports.takeLast = takeLast_1.takeLast;
  var takeUntil_1 = $__require("rxjs/internal/operators/takeUntil");
  exports.takeUntil = takeUntil_1.takeUntil;
  var takeWhile_1 = $__require("rxjs/internal/operators/takeWhile");
  exports.takeWhile = takeWhile_1.takeWhile;
  var tap_1 = $__require("rxjs/internal/operators/tap");
  exports.tap = tap_1.tap;
  var throttle_1 = $__require("rxjs/internal/operators/throttle");
  exports.throttle = throttle_1.throttle;
  var throttleTime_1 = $__require("rxjs/internal/operators/throttleTime");
  exports.throttleTime = throttleTime_1.throttleTime;
  var throwIfEmpty_1 = $__require("rxjs/internal/operators/throwIfEmpty");
  exports.throwIfEmpty = throwIfEmpty_1.throwIfEmpty;
  var timeInterval_1 = $__require("rxjs/internal/operators/timeInterval");
  exports.timeInterval = timeInterval_1.timeInterval;
  var timeout_1 = $__require("rxjs/internal/operators/timeout");
  exports.timeout = timeout_1.timeout;
  var timeoutWith_1 = $__require("rxjs/internal/operators/timeoutWith");
  exports.timeoutWith = timeoutWith_1.timeoutWith;
  var timestamp_1 = $__require("rxjs/internal/operators/timestamp");
  exports.timestamp = timestamp_1.timestamp;
  var toArray_1 = $__require("rxjs/internal/operators/toArray");
  exports.toArray = toArray_1.toArray;
  var window_1 = $__require("rxjs/internal/operators/window");
  exports.window = window_1.window;
  var windowCount_1 = $__require("rxjs/internal/operators/windowCount");
  exports.windowCount = windowCount_1.windowCount;
  var windowTime_1 = $__require("rxjs/internal/operators/windowTime");
  exports.windowTime = windowTime_1.windowTime;
  var windowToggle_1 = $__require("rxjs/internal/operators/windowToggle");
  exports.windowToggle = windowToggle_1.windowToggle;
  var windowWhen_1 = $__require("rxjs/internal/operators/windowWhen");
  exports.windowWhen = windowWhen_1.windowWhen;
  var withLatestFrom_1 = $__require("rxjs/internal/operators/withLatestFrom");
  exports.withLatestFrom = withLatestFrom_1.withLatestFrom;
  var zip_1 = $__require("rxjs/internal/operators/zip");
  exports.zip = zip_1.zip;
  var zipAll_1 = $__require("rxjs/internal/operators/zipAll");
  exports.zipAll = zipAll_1.zipAll;

});
System.registerDynamic("rxjs-compat/Rx", ["rxjs", "rxjs/internal-compatibility", "rxjs/add/observable/bindCallback", "rxjs/add/observable/bindNodeCallback", "rxjs/add/observable/combineLatest", "rxjs/add/observable/concat", "rxjs/add/observable/defer", "rxjs/add/observable/empty", "rxjs/add/observable/forkJoin", "rxjs/add/observable/from", "rxjs/add/observable/fromEvent", "rxjs/add/observable/fromEventPattern", "rxjs/add/observable/fromPromise", "rxjs/add/observable/generate", "rxjs/add/observable/if", "rxjs/add/observable/interval", "rxjs/add/observable/merge", "rxjs/add/observable/race", "rxjs/add/observable/never", "rxjs/add/observable/of", "rxjs/add/observable/onErrorResumeNext", "rxjs/add/observable/pairs", "rxjs/add/observable/range", "rxjs/add/observable/using", "rxjs/add/observable/throw", "rxjs/add/observable/timer", "rxjs/add/observable/zip", "rxjs/add/observable/dom/ajax", "rxjs/add/observable/dom/webSocket", "rxjs/add/operator/buffer", "rxjs/add/operator/bufferCount", "rxjs/add/operator/bufferTime", "rxjs/add/operator/bufferToggle", "rxjs/add/operator/bufferWhen", "rxjs/add/operator/catch", "rxjs/add/operator/combineAll", "rxjs/add/operator/combineLatest", "rxjs/add/operator/concat", "rxjs/add/operator/concatAll", "rxjs/add/operator/concatMap", "rxjs/add/operator/concatMapTo", "rxjs/add/operator/count", "rxjs/add/operator/dematerialize", "rxjs/add/operator/debounce", "rxjs/add/operator/debounceTime", "rxjs/add/operator/defaultIfEmpty", "rxjs/add/operator/delay", "rxjs/add/operator/delayWhen", "rxjs/add/operator/distinct", "rxjs/add/operator/distinctUntilChanged", "rxjs/add/operator/distinctUntilKeyChanged", "rxjs/add/operator/do", "rxjs/add/operator/exhaust", "rxjs/add/operator/exhaustMap", "rxjs/add/operator/expand", "rxjs/add/operator/elementAt", "rxjs/add/operator/filter", "rxjs/add/operator/finally", "rxjs/add/operator/find", "rxjs/add/operator/findIndex", "rxjs/add/operator/first", "rxjs/add/operator/groupBy", "rxjs/add/operator/ignoreElements", "rxjs/add/operator/isEmpty", "rxjs/add/operator/audit", "rxjs/add/operator/auditTime", "rxjs/add/operator/last", "rxjs/add/operator/let", "rxjs/add/operator/every", "rxjs/add/operator/map", "rxjs/add/operator/mapTo", "rxjs/add/operator/materialize", "rxjs/add/operator/max", "rxjs/add/operator/merge", "rxjs/add/operator/mergeAll", "rxjs/add/operator/mergeMap", "rxjs/add/operator/mergeMapTo", "rxjs/add/operator/mergeScan", "rxjs/add/operator/min", "rxjs/add/operator/multicast", "rxjs/add/operator/observeOn", "rxjs/add/operator/onErrorResumeNext", "rxjs/add/operator/pairwise", "rxjs/add/operator/partition", "rxjs/add/operator/pluck", "rxjs/add/operator/publish", "rxjs/add/operator/publishBehavior", "rxjs/add/operator/publishReplay", "rxjs/add/operator/publishLast", "rxjs/add/operator/race", "rxjs/add/operator/reduce", "rxjs/add/operator/repeat", "rxjs/add/operator/repeatWhen", "rxjs/add/operator/retry", "rxjs/add/operator/retryWhen", "rxjs/add/operator/sample", "rxjs/add/operator/sampleTime", "rxjs/add/operator/scan", "rxjs/add/operator/sequenceEqual", "rxjs/add/operator/share", "rxjs/add/operator/shareReplay", "rxjs/add/operator/single", "rxjs/add/operator/skip", "rxjs/add/operator/skipLast", "rxjs/add/operator/skipUntil", "rxjs/add/operator/skipWhile", "rxjs/add/operator/startWith", "rxjs/add/operator/subscribeOn", "rxjs/add/operator/switch", "rxjs/add/operator/switchMap", "rxjs/add/operator/switchMapTo", "rxjs/add/operator/take", "rxjs/add/operator/takeLast", "rxjs/add/operator/takeUntil", "rxjs/add/operator/takeWhile", "rxjs/add/operator/throttle", "rxjs/add/operator/throttleTime", "rxjs/add/operator/timeInterval", "rxjs/add/operator/timeout", "rxjs/add/operator/timeoutWith", "rxjs/add/operator/timestamp", "rxjs/add/operator/toArray", "rxjs/add/operator/toPromise", "rxjs/add/operator/window", "rxjs/add/operator/windowCount", "rxjs/add/operator/windowTime", "rxjs/add/operator/windowToggle", "rxjs/add/operator/windowWhen", "rxjs/add/operator/withLatestFrom", "rxjs/add/operator/zip", "rxjs/add/operator/zipAll", "rxjs/testing", "rxjs/ajax", "rxjs/operators"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  /* tslint:disable:no-unused-variable */
  // Subject imported before Observable to bypass circular dependency issue since
  // Subject extends Observable and Observable references Subject in it's
  // definition
  var rxjs_1 = $__require("rxjs");
  exports.Observable = rxjs_1.Observable;
  exports.Subject = rxjs_1.Subject;
  var internal_compatibility_1 = $__require("rxjs/internal-compatibility");
  exports.AnonymousSubject = internal_compatibility_1.AnonymousSubject;
  /* tslint:enable:no-unused-variable */
  var internal_compatibility_2 = $__require("rxjs/internal-compatibility");
  exports.config = internal_compatibility_2.config;
  // statics
  /* tslint:disable:no-use-before-declare */
  $__require("rxjs/add/observable/bindCallback");
  $__require("rxjs/add/observable/bindNodeCallback");
  $__require("rxjs/add/observable/combineLatest");
  $__require("rxjs/add/observable/concat");
  $__require("rxjs/add/observable/defer");
  $__require("rxjs/add/observable/empty");
  $__require("rxjs/add/observable/forkJoin");
  $__require("rxjs/add/observable/from");
  $__require("rxjs/add/observable/fromEvent");
  $__require("rxjs/add/observable/fromEventPattern");
  $__require("rxjs/add/observable/fromPromise");
  $__require("rxjs/add/observable/generate");
  $__require("rxjs/add/observable/if");
  $__require("rxjs/add/observable/interval");
  $__require("rxjs/add/observable/merge");
  $__require("rxjs/add/observable/race");
  $__require("rxjs/add/observable/never");
  $__require("rxjs/add/observable/of");
  $__require("rxjs/add/observable/onErrorResumeNext");
  $__require("rxjs/add/observable/pairs");
  $__require("rxjs/add/observable/range");
  $__require("rxjs/add/observable/using");
  $__require("rxjs/add/observable/throw");
  $__require("rxjs/add/observable/timer");
  $__require("rxjs/add/observable/zip");
  //dom
  $__require("rxjs/add/observable/dom/ajax");
  $__require("rxjs/add/observable/dom/webSocket");
  //internal/operators
  $__require("rxjs/add/operator/buffer");
  $__require("rxjs/add/operator/bufferCount");
  $__require("rxjs/add/operator/bufferTime");
  $__require("rxjs/add/operator/bufferToggle");
  $__require("rxjs/add/operator/bufferWhen");
  $__require("rxjs/add/operator/catch");
  $__require("rxjs/add/operator/combineAll");
  $__require("rxjs/add/operator/combineLatest");
  $__require("rxjs/add/operator/concat");
  $__require("rxjs/add/operator/concatAll");
  $__require("rxjs/add/operator/concatMap");
  $__require("rxjs/add/operator/concatMapTo");
  $__require("rxjs/add/operator/count");
  $__require("rxjs/add/operator/dematerialize");
  $__require("rxjs/add/operator/debounce");
  $__require("rxjs/add/operator/debounceTime");
  $__require("rxjs/add/operator/defaultIfEmpty");
  $__require("rxjs/add/operator/delay");
  $__require("rxjs/add/operator/delayWhen");
  $__require("rxjs/add/operator/distinct");
  $__require("rxjs/add/operator/distinctUntilChanged");
  $__require("rxjs/add/operator/distinctUntilKeyChanged");
  $__require("rxjs/add/operator/do");
  $__require("rxjs/add/operator/exhaust");
  $__require("rxjs/add/operator/exhaustMap");
  $__require("rxjs/add/operator/expand");
  $__require("rxjs/add/operator/elementAt");
  $__require("rxjs/add/operator/filter");
  $__require("rxjs/add/operator/finally");
  $__require("rxjs/add/operator/find");
  $__require("rxjs/add/operator/findIndex");
  $__require("rxjs/add/operator/first");
  $__require("rxjs/add/operator/groupBy");
  $__require("rxjs/add/operator/ignoreElements");
  $__require("rxjs/add/operator/isEmpty");
  $__require("rxjs/add/operator/audit");
  $__require("rxjs/add/operator/auditTime");
  $__require("rxjs/add/operator/last");
  $__require("rxjs/add/operator/let");
  $__require("rxjs/add/operator/every");
  $__require("rxjs/add/operator/map");
  $__require("rxjs/add/operator/mapTo");
  $__require("rxjs/add/operator/materialize");
  $__require("rxjs/add/operator/max");
  $__require("rxjs/add/operator/merge");
  $__require("rxjs/add/operator/mergeAll");
  $__require("rxjs/add/operator/mergeMap");
  $__require("rxjs/add/operator/mergeMapTo");
  $__require("rxjs/add/operator/mergeScan");
  $__require("rxjs/add/operator/min");
  $__require("rxjs/add/operator/multicast");
  $__require("rxjs/add/operator/observeOn");
  $__require("rxjs/add/operator/onErrorResumeNext");
  $__require("rxjs/add/operator/pairwise");
  $__require("rxjs/add/operator/partition");
  $__require("rxjs/add/operator/pluck");
  $__require("rxjs/add/operator/publish");
  $__require("rxjs/add/operator/publishBehavior");
  $__require("rxjs/add/operator/publishReplay");
  $__require("rxjs/add/operator/publishLast");
  $__require("rxjs/add/operator/race");
  $__require("rxjs/add/operator/reduce");
  $__require("rxjs/add/operator/repeat");
  $__require("rxjs/add/operator/repeatWhen");
  $__require("rxjs/add/operator/retry");
  $__require("rxjs/add/operator/retryWhen");
  $__require("rxjs/add/operator/sample");
  $__require("rxjs/add/operator/sampleTime");
  $__require("rxjs/add/operator/scan");
  $__require("rxjs/add/operator/sequenceEqual");
  $__require("rxjs/add/operator/share");
  $__require("rxjs/add/operator/shareReplay");
  $__require("rxjs/add/operator/single");
  $__require("rxjs/add/operator/skip");
  $__require("rxjs/add/operator/skipLast");
  $__require("rxjs/add/operator/skipUntil");
  $__require("rxjs/add/operator/skipWhile");
  $__require("rxjs/add/operator/startWith");
  $__require("rxjs/add/operator/subscribeOn");
  $__require("rxjs/add/operator/switch");
  $__require("rxjs/add/operator/switchMap");
  $__require("rxjs/add/operator/switchMapTo");
  $__require("rxjs/add/operator/take");
  $__require("rxjs/add/operator/takeLast");
  $__require("rxjs/add/operator/takeUntil");
  $__require("rxjs/add/operator/takeWhile");
  $__require("rxjs/add/operator/throttle");
  $__require("rxjs/add/operator/throttleTime");
  $__require("rxjs/add/operator/timeInterval");
  $__require("rxjs/add/operator/timeout");
  $__require("rxjs/add/operator/timeoutWith");
  $__require("rxjs/add/operator/timestamp");
  $__require("rxjs/add/operator/toArray");
  $__require("rxjs/add/operator/toPromise");
  $__require("rxjs/add/operator/window");
  $__require("rxjs/add/operator/windowCount");
  $__require("rxjs/add/operator/windowTime");
  $__require("rxjs/add/operator/windowToggle");
  $__require("rxjs/add/operator/windowWhen");
  $__require("rxjs/add/operator/withLatestFrom");
  $__require("rxjs/add/operator/zip");
  $__require("rxjs/add/operator/zipAll");
  /* tslint:disable:no-unused-variable */
  var rxjs_2 = $__require("rxjs");
  exports.Subscription = rxjs_2.Subscription;
  exports.ReplaySubject = rxjs_2.ReplaySubject;
  exports.BehaviorSubject = rxjs_2.BehaviorSubject;
  exports.Notification = rxjs_2.Notification;
  exports.EmptyError = rxjs_2.EmptyError;
  exports.ArgumentOutOfRangeError = rxjs_2.ArgumentOutOfRangeError;
  exports.ObjectUnsubscribedError = rxjs_2.ObjectUnsubscribedError;
  exports.UnsubscriptionError = rxjs_2.UnsubscriptionError;
  exports.pipe = rxjs_2.pipe;
  var testing_1 = $__require("rxjs/testing");
  exports.TestScheduler = testing_1.TestScheduler;
  var rxjs_3 = $__require("rxjs");
  exports.Subscriber = rxjs_3.Subscriber;
  exports.AsyncSubject = rxjs_3.AsyncSubject;
  exports.ConnectableObservable = rxjs_3.ConnectableObservable;
  exports.TimeoutError = rxjs_3.TimeoutError;
  exports.VirtualTimeScheduler = rxjs_3.VirtualTimeScheduler;
  var ajax_1 = $__require("rxjs/ajax");
  exports.AjaxResponse = ajax_1.AjaxResponse;
  exports.AjaxError = ajax_1.AjaxError;
  exports.AjaxTimeoutError = ajax_1.AjaxTimeoutError;
  var rxjs_4 = $__require("rxjs");
  var internal_compatibility_3 = $__require("rxjs/internal-compatibility");
  var internal_compatibility_4 = $__require("rxjs/internal-compatibility");
  exports.TimeInterval = internal_compatibility_4.TimeInterval;
  exports.Timestamp = internal_compatibility_4.Timestamp;
  var _operators = $__require("rxjs/operators");
  exports.operators = _operators;
  /* tslint:enable:no-unused-variable */
  /**
   * @typedef {Object} Rx.Scheduler
   * @property {Scheduler} queue Schedules on a queue in the current event frame
   * (trampoline scheduler). Use this for iteration operations.
   * @property {Scheduler} asap Schedules on the micro task queue, which uses the
   * fastest transport mechanism available, either Node.js' `process.nextTick()`
   * or Web Worker MessageChannel or setTimeout or others. Use this for
   * asynchronous conversions.
   * @property {Scheduler} async Schedules work with `setInterval`. Use this for
   * time-based operations.
   * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
   * Use this for synchronizing with the platform's painting
   */
  var Scheduler = {
    asap: rxjs_4.asapScheduler,
    queue: rxjs_4.queueScheduler,
    animationFrame: rxjs_4.animationFrameScheduler,
    async: rxjs_4.asyncScheduler
  };
  exports.Scheduler = Scheduler;
  /**
   * @typedef {Object} Rx.Symbol
   * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
   * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
   * an object that has all of the traits of an Rx Subscriber, including the
   * ability to add and remove subscriptions to the subscription chain and
   * guarantees involving event triggering (can't "next" after unsubscription,
   * etc).
   * @property {Symbol|string} observable A symbol to use as a property name to
   * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
   * @property {Symbol|string} iterator The ES6 symbol to use as a property name
   * to retrieve an iterator from an object.
   */
  var Symbol = {
    rxSubscriber: internal_compatibility_3.rxSubscriber,
    observable: internal_compatibility_3.observable,
    iterator: internal_compatibility_3.iterator
  };
  exports.Symbol = Symbol;

});
System.registerDynamic("rxjs-compat/index", ["rxjs-compat/Rx"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export($__require("rxjs-compat/Rx"));

});
System.registerDynamic("rxjs/Rx", ["rxjs-compat/index"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export($__require("rxjs-compat/index"));

});