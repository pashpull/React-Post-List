(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function rv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Xf = { exports: {} },
  Li = {},
  Jf = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ro = Symbol.for('react.element'),
  ov = Symbol.for('react.portal'),
  iv = Symbol.for('react.fragment'),
  lv = Symbol.for('react.strict_mode'),
  uv = Symbol.for('react.profiler'),
  sv = Symbol.for('react.provider'),
  av = Symbol.for('react.context'),
  cv = Symbol.for('react.forward_ref'),
  fv = Symbol.for('react.suspense'),
  dv = Symbol.for('react.memo'),
  pv = Symbol.for('react.lazy'),
  tc = Symbol.iterator;
function hv(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (tc && e[tc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Yf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zf = Object.assign,
  bf = {};
function Zn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bf),
    (this.updater = n || Yf);
}
Zn.prototype.isReactComponent = {};
Zn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Zn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function ed() {}
ed.prototype = Zn.prototype;
function Os(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bf),
    (this.updater = n || Yf);
}
var Ns = (Os.prototype = new ed());
Ns.constructor = Os;
Zf(Ns, Zn.prototype);
Ns.isPureReactComponent = !0;
var nc = Array.isArray,
  td = Object.prototype.hasOwnProperty,
  _s = { current: null },
  nd = { key: !0, ref: !0, __self: !0, __source: !0 };
function rd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      td.call(t, r) && !nd.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return {
    $$typeof: ro,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: _s.current,
  };
}
function mv(e, t) {
  return {
    $$typeof: ro,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ts(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ro;
}
function vv(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var rc = /\/+/g;
function Ll(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? vv('' + e.key)
    : t.toString(36);
}
function $o(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ro:
          case ov:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + Ll(l, 0) : r),
      nc(o)
        ? ((n = ''),
          e != null && (n = e.replace(rc, '$&/') + '/'),
          $o(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (Ts(o) &&
            (o = mv(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(rc, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), nc(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Ll(i, u);
      l += $o(i, t, n, s, o);
    }
  else if (((s = hv(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Ll(i, u++)), (l += $o(i, t, n, s, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return l;
}
function yo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    $o(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function yv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Se = { current: null },
  Io = { transition: null },
  gv = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: Io,
    ReactCurrentOwner: _s,
  };
$.Children = {
  map: yo,
  forEach: function (e, t, n) {
    yo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ts(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
$.Component = Zn;
$.Fragment = iv;
$.Profiler = uv;
$.PureComponent = Os;
$.StrictMode = lv;
$.Suspense = fv;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gv;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Zf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = _s.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      td.call(t, s) &&
        !nd.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: ro, type: e.type, key: o, ref: i, props: r, _owner: l };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: av,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sv, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = rd;
$.createFactory = function (e) {
  var t = rd.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: cv, render: e };
};
$.isValidElement = Ts;
$.lazy = function (e) {
  return { $$typeof: pv, _payload: { _status: -1, _result: e }, _init: yv };
};
$.memo = function (e, t) {
  return { $$typeof: dv, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = Io.transition;
  Io.transition = {};
  try {
    e();
  } finally {
    Io.transition = t;
  }
};
$.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
$.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
$.useContext = function (e) {
  return Se.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
$.useId = function () {
  return Se.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return Se.current.useRef(e);
};
$.useState = function (e) {
  return Se.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return Se.current.useTransition();
};
$.version = '18.2.0';
Jf.exports = $;
var k = Jf.exports;
const od = rv(k);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wv = k,
  Sv = Symbol.for('react.element'),
  Ev = Symbol.for('react.fragment'),
  xv = Object.prototype.hasOwnProperty,
  Cv = wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kv = { key: !0, ref: !0, __self: !0, __source: !0 };
function id(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) xv.call(t, r) && !kv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Sv,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Cv.current,
  };
}
Li.Fragment = Ev;
Li.jsx = id;
Li.jsxs = id;
Xf.exports = Li;
var P = Xf.exports,
  gu = {},
  ld = { exports: {} },
  je = {},
  ud = { exports: {} },
  sd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, A) {
    var j = _.length;
    _.push(A);
    e: for (; 0 < j; ) {
      var J = (j - 1) >>> 1,
        oe = _[J];
      if (0 < o(oe, A)) (_[J] = A), (_[j] = oe), (j = J);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var A = _[0],
      j = _.pop();
    if (j !== A) {
      _[0] = j;
      e: for (var J = 0, oe = _.length, mo = oe >>> 1; J < mo; ) {
        var Yt = 2 * (J + 1) - 1,
          Tl = _[Yt],
          Zt = Yt + 1,
          vo = _[Zt];
        if (0 > o(Tl, j))
          Zt < oe && 0 > o(vo, Tl)
            ? ((_[J] = vo), (_[Zt] = j), (J = Zt))
            : ((_[J] = Tl), (_[Yt] = j), (J = Yt));
        else if (Zt < oe && 0 > o(vo, j)) (_[J] = vo), (_[Zt] = j), (J = Zt);
        else break e;
      }
    }
    return A;
  }
  function o(_, A) {
    var j = _.sortIndex - A.sortIndex;
    return j !== 0 ? j : _.id - A.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      u = l.now();
    e.unstable_now = function () {
      return l.now() - u;
    };
  }
  var s = [],
    a = [],
    c = 1,
    f = null,
    h = 3,
    g = !1,
    m = !1,
    y = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(_) {
    for (var A = n(a); A !== null; ) {
      if (A.callback === null) r(a);
      else if (A.startTime <= _)
        r(a), (A.sortIndex = A.expirationTime), t(s, A);
      else break;
      A = n(a);
    }
  }
  function w(_) {
    if (((y = !1), v(_), !m))
      if (n(s) !== null) (m = !0), Nl(C);
      else {
        var A = n(a);
        A !== null && _l(w, A.startTime - _);
      }
  }
  function C(_, A) {
    (m = !1), y && ((y = !1), p(T), (T = -1)), (g = !0);
    var j = h;
    try {
      for (
        v(A), f = n(s);
        f !== null && (!(f.expirationTime > A) || (_ && !ee()));

      ) {
        var J = f.callback;
        if (typeof J == 'function') {
          (f.callback = null), (h = f.priorityLevel);
          var oe = J(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof oe == 'function' ? (f.callback = oe) : f === n(s) && r(s),
            v(A);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var mo = !0;
      else {
        var Yt = n(a);
        Yt !== null && _l(w, Yt.startTime - A), (mo = !1);
      }
      return mo;
    } finally {
      (f = null), (h = j), (g = !1);
    }
  }
  var R = !1,
    O = null,
    T = -1,
    D = 5,
    L = -1;
  function ee() {
    return !(e.unstable_now() - L < D);
  }
  function ir() {
    if (O !== null) {
      var _ = e.unstable_now();
      L = _;
      var A = !0;
      try {
        A = O(!0, _);
      } finally {
        A ? lr() : ((R = !1), (O = null));
      }
    } else R = !1;
  }
  var lr;
  if (typeof d == 'function')
    lr = function () {
      d(ir);
    };
  else if (typeof MessageChannel < 'u') {
    var ec = new MessageChannel(),
      nv = ec.port2;
    (ec.port1.onmessage = ir),
      (lr = function () {
        nv.postMessage(null);
      });
  } else
    lr = function () {
      E(ir, 0);
    };
  function Nl(_) {
    (O = _), R || ((R = !0), lr());
  }
  function _l(_, A) {
    T = E(function () {
      _(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || g || ((m = !0), Nl(C));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (D = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = h;
      }
      var j = h;
      h = A;
      try {
        return _();
      } finally {
        h = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, A) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var j = h;
      h = _;
      try {
        return A();
      } finally {
        h = j;
      }
    }),
    (e.unstable_scheduleCallback = function (_, A, j) {
      var J = e.unstable_now();
      switch (
        (typeof j == 'object' && j !== null
          ? ((j = j.delay), (j = typeof j == 'number' && 0 < j ? J + j : J))
          : (j = J),
        _)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = j + oe),
        (_ = {
          id: c++,
          callback: A,
          priorityLevel: _,
          startTime: j,
          expirationTime: oe,
          sortIndex: -1,
        }),
        j > J
          ? ((_.sortIndex = j),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (y ? (p(T), (T = -1)) : (y = !0), _l(w, j - J)))
          : ((_.sortIndex = oe), t(s, _), m || g || ((m = !0), Nl(C))),
        _
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (_) {
      var A = h;
      return function () {
        var j = h;
        h = A;
        try {
          return _.apply(this, arguments);
        } finally {
          h = j;
        }
      };
    });
})(sd);
ud.exports = sd;
var Pv = ud.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad = k,
  Le = Pv;
function x(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var cd = new Set(),
  jr = {};
function vn(e, t) {
  Bn(e, t), Bn(e + 'Capture', t);
}
function Bn(e, t) {
  for (jr[e] = t, e = 0; e < t.length; e++) cd.add(t[e]);
}
var ht = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  wu = Object.prototype.hasOwnProperty,
  Rv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  oc = {},
  ic = {};
function Ov(e) {
  return wu.call(ic, e)
    ? !0
    : wu.call(oc, e)
    ? !1
    : Rv.test(e)
    ? (ic[e] = !0)
    : ((oc[e] = !0), !1);
}
function Nv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function _v(e, t, n, r) {
  if (t === null || typeof t > 'u' || Nv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ee(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var fe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    fe[e] = new Ee(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  fe[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  fe[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    fe[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  fe[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  fe[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  fe[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  fe[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ls = /[\-:]([a-z])/g;
function As(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ls, As);
    fe[t] = new Ee(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ls, As);
    fe[t] = new Ee(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ls, As);
  fe[t] = new Ee(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  fe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Ee(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  fe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function js(e, t, n, r) {
  var o = fe.hasOwnProperty(t) ? fe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (_v(t, n, o, r) && (n = null),
    r || o === null
      ? Ov(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  go = Symbol.for('react.element'),
  Sn = Symbol.for('react.portal'),
  En = Symbol.for('react.fragment'),
  $s = Symbol.for('react.strict_mode'),
  Su = Symbol.for('react.profiler'),
  fd = Symbol.for('react.provider'),
  dd = Symbol.for('react.context'),
  Is = Symbol.for('react.forward_ref'),
  Eu = Symbol.for('react.suspense'),
  xu = Symbol.for('react.suspense_list'),
  Ms = Symbol.for('react.memo'),
  xt = Symbol.for('react.lazy'),
  pd = Symbol.for('react.offscreen'),
  lc = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (lc && e[lc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var G = Object.assign,
  Al;
function vr(e) {
  if (Al === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Al = (t && t[1]) || '';
    }
  return (
    `
` +
    Al +
    e
  );
}
var jl = !1;
function $l(e, t) {
  if (!e || jl) return '';
  jl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          u = i.length - 1;
        1 <= l && 0 <= u && o[l] !== i[u];

      )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (o[l] !== i[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || o[l] !== i[u])) {
                var s =
                  `
` + o[l].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    (jl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? vr(e) : '';
}
function Tv(e) {
  switch (e.tag) {
    case 5:
      return vr(e.type);
    case 16:
      return vr('Lazy');
    case 13:
      return vr('Suspense');
    case 19:
      return vr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = $l(e.type, !1)), e;
    case 11:
      return (e = $l(e.type.render, !1)), e;
    case 1:
      return (e = $l(e.type, !0)), e;
    default:
      return '';
  }
}
function Cu(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case En:
      return 'Fragment';
    case Sn:
      return 'Portal';
    case Su:
      return 'Profiler';
    case $s:
      return 'StrictMode';
    case Eu:
      return 'Suspense';
    case xu:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case dd:
        return (e.displayName || 'Context') + '.Consumer';
      case fd:
        return (e._context.displayName || 'Context') + '.Provider';
      case Is:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Ms:
        return (
          (t = e.displayName || null), t !== null ? t : Cu(e.type) || 'Memo'
        );
      case xt:
        (t = e._payload), (e = e._init);
        try {
          return Cu(e(t));
        } catch {}
    }
  return null;
}
function Lv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Cu(t);
    case 8:
      return t === $s ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Wt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function hd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Av(e) {
  var t = hd(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = '' + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wo(e) {
  e._valueTracker || (e._valueTracker = Av(e));
}
function md(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = hd(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function bo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ku(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function uc(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function vd(e, t) {
  (t = t.checked), t != null && js(e, 'checked', t, !1);
}
function Pu(e, t) {
  vd(e, t);
  var n = Wt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Ru(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Ru(e, t.type, Wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function sc(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Ru(e, t, n) {
  (t !== 'number' || bo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var yr = Array.isArray;
function An(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Wt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ou(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function ac(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (yr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function yd(e, t) {
  var n = Wt(t.value),
    r = Wt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function cc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function gd(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Nu(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? gd(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var So,
  wd = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        So = So || document.createElement('div'),
          So.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = So.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function $r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jv = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(xr).forEach(function (e) {
  jv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xr[t] = xr[e]);
  });
});
function Sd(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (xr.hasOwnProperty(e) && xr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Ed(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Sd(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var $v = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function _u(e, t) {
  if (t) {
    if ($v[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(x(62));
  }
}
function Tu(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Lu = null;
function Ds(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Au = null,
  jn = null,
  $n = null;
function fc(e) {
  if ((e = lo(e))) {
    if (typeof Au != 'function') throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Mi(t)), Au(e.stateNode, e.type, t));
  }
}
function xd(e) {
  jn ? ($n ? $n.push(e) : ($n = [e])) : (jn = e);
}
function Cd() {
  if (jn) {
    var e = jn,
      t = $n;
    if ((($n = jn = null), fc(e), t)) for (e = 0; e < t.length; e++) fc(t[e]);
  }
}
function kd(e, t) {
  return e(t);
}
function Pd() {}
var Il = !1;
function Rd(e, t, n) {
  if (Il) return e(t, n);
  Il = !0;
  try {
    return kd(e, t, n);
  } finally {
    (Il = !1), (jn !== null || $n !== null) && (Pd(), Cd());
  }
}
function Ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Mi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(x(231, t, typeof n));
  return n;
}
var ju = !1;
if (ht)
  try {
    var sr = {};
    Object.defineProperty(sr, 'passive', {
      get: function () {
        ju = !0;
      },
    }),
      window.addEventListener('test', sr, sr),
      window.removeEventListener('test', sr, sr);
  } catch {
    ju = !1;
  }
function Iv(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Cr = !1,
  ei = null,
  ti = !1,
  $u = null,
  Mv = {
    onError: function (e) {
      (Cr = !0), (ei = e);
    },
  };
function Dv(e, t, n, r, o, i, l, u, s) {
  (Cr = !1), (ei = null), Iv.apply(Mv, arguments);
}
function zv(e, t, n, r, o, i, l, u, s) {
  if ((Dv.apply(this, arguments), Cr)) {
    if (Cr) {
      var a = ei;
      (Cr = !1), (ei = null);
    } else throw Error(x(198));
    ti || ((ti = !0), ($u = a));
  }
}
function yn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Od(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function dc(e) {
  if (yn(e) !== e) throw Error(x(188));
}
function Fv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yn(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return dc(o), e;
        if (i === r) return dc(o), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (u === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (u === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Nd(e) {
  return (e = Fv(e)), e !== null ? _d(e) : null;
}
function _d(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _d(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Td = Le.unstable_scheduleCallback,
  pc = Le.unstable_cancelCallback,
  Uv = Le.unstable_shouldYield,
  Bv = Le.unstable_requestPaint,
  Y = Le.unstable_now,
  Wv = Le.unstable_getCurrentPriorityLevel,
  zs = Le.unstable_ImmediatePriority,
  Ld = Le.unstable_UserBlockingPriority,
  ni = Le.unstable_NormalPriority,
  Hv = Le.unstable_LowPriority,
  Ad = Le.unstable_IdlePriority,
  Ai = null,
  rt = null;
function Vv(e) {
  if (rt && typeof rt.onCommitFiberRoot == 'function')
    try {
      rt.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : Qv,
  Kv = Math.log,
  qv = Math.LN2;
function Qv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kv(e) / qv) | 0)) | 0;
}
var Eo = 64,
  xo = 4194304;
function gr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ri(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? (r = gr(u)) : ((i &= l), i !== 0 && (r = gr(i)));
  } else (l = n & ~o), l !== 0 ? (r = gr(l)) : i !== 0 && (r = gr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Xe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Gv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Xv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Xe(i),
      u = 1 << l,
      s = o[l];
    s === -1
      ? (!(u & n) || u & r) && (o[l] = Gv(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Iu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function jd() {
  var e = Eo;
  return (Eo <<= 1), !(Eo & 4194240) && (Eo = 64), e;
}
function Ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function oo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = n);
}
function Jv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Xe(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Fs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var z = 0;
function $d(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Id,
  Us,
  Md,
  Dd,
  zd,
  Mu = !1,
  Co = [],
  Tt = null,
  Lt = null,
  At = null,
  Mr = new Map(),
  Dr = new Map(),
  kt = [],
  Yv =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function hc(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Tt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Lt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      At = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Mr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Dr.delete(t.pointerId);
  }
}
function ar(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = lo(t)), t !== null && Us(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Zv(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Tt = ar(Tt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Lt = ar(Lt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (At = ar(At, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Mr.set(i, ar(Mr.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Dr.set(i, ar(Dr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Fd(e) {
  var t = rn(e.target);
  if (t !== null) {
    var n = yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Od(n)), t !== null)) {
          (e.blockedOn = t),
            zd(e.priority, function () {
              Md(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Du(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Lu = r), n.target.dispatchEvent(r), (Lu = null);
    } else return (t = lo(n)), t !== null && Us(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function mc(e, t, n) {
  Mo(e) && n.delete(t);
}
function bv() {
  (Mu = !1),
    Tt !== null && Mo(Tt) && (Tt = null),
    Lt !== null && Mo(Lt) && (Lt = null),
    At !== null && Mo(At) && (At = null),
    Mr.forEach(mc),
    Dr.forEach(mc);
}
function cr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Mu ||
      ((Mu = !0),
      Le.unstable_scheduleCallback(Le.unstable_NormalPriority, bv)));
}
function zr(e) {
  function t(o) {
    return cr(o, e);
  }
  if (0 < Co.length) {
    cr(Co[0], e);
    for (var n = 1; n < Co.length; n++) {
      var r = Co[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Tt !== null && cr(Tt, e),
      Lt !== null && cr(Lt, e),
      At !== null && cr(At, e),
      Mr.forEach(t),
      Dr.forEach(t),
      n = 0;
    n < kt.length;
    n++
  )
    (r = kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && ((n = kt[0]), n.blockedOn === null); )
    Fd(n), n.blockedOn === null && kt.shift();
}
var In = wt.ReactCurrentBatchConfig,
  oi = !0;
function ey(e, t, n, r) {
  var o = z,
    i = In.transition;
  In.transition = null;
  try {
    (z = 1), Bs(e, t, n, r);
  } finally {
    (z = o), (In.transition = i);
  }
}
function ty(e, t, n, r) {
  var o = z,
    i = In.transition;
  In.transition = null;
  try {
    (z = 4), Bs(e, t, n, r);
  } finally {
    (z = o), (In.transition = i);
  }
}
function Bs(e, t, n, r) {
  if (oi) {
    var o = Du(e, t, n, r);
    if (o === null) ql(e, t, r, ii, n), hc(e, r);
    else if (Zv(o, e, t, n, r)) r.stopPropagation();
    else if ((hc(e, r), t & 4 && -1 < Yv.indexOf(e))) {
      for (; o !== null; ) {
        var i = lo(o);
        if (
          (i !== null && Id(i),
          (i = Du(e, t, n, r)),
          i === null && ql(e, t, r, ii, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ql(e, t, r, null, n);
  }
}
var ii = null;
function Du(e, t, n, r) {
  if (((ii = null), (e = Ds(r)), (e = rn(e)), e !== null))
    if (((t = yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Od(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ii = e), null;
}
function Ud(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Wv()) {
        case zs:
          return 1;
        case Ld:
          return 4;
        case ni:
        case Hv:
          return 16;
        case Ad:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ot = null,
  Ws = null,
  Do = null;
function Bd() {
  if (Do) return Do;
  var e,
    t = Ws,
    n = t.length,
    r,
    o = 'value' in Ot ? Ot.value : Ot.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Do = o.slice(e, 1 < r ? 1 - r : void 0));
}
function zo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ko() {
  return !0;
}
function vc() {
  return !1;
}
function $e(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ko
        : vc),
      (this.isPropagationStopped = vc),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ko));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ko));
      },
      persist: function () {},
      isPersistent: ko,
    }),
    t
  );
}
var bn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Hs = $e(bn),
  io = G({}, bn, { view: 0, detail: 0 }),
  ny = $e(io),
  Dl,
  zl,
  fr,
  ji = G({}, io, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Vs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== fr &&
            (fr && e.type === 'mousemove'
              ? ((Dl = e.screenX - fr.screenX), (zl = e.screenY - fr.screenY))
              : (zl = Dl = 0),
            (fr = e)),
          Dl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : zl;
    },
  }),
  yc = $e(ji),
  ry = G({}, ji, { dataTransfer: 0 }),
  oy = $e(ry),
  iy = G({}, io, { relatedTarget: 0 }),
  Fl = $e(iy),
  ly = G({}, bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uy = $e(ly),
  sy = G({}, bn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ay = $e(sy),
  cy = G({}, bn, { data: 0 }),
  gc = $e(cy),
  fy = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  dy = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  py = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function hy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = py[e]) ? !!t[e] : !1;
}
function Vs() {
  return hy;
}
var my = G({}, io, {
    key: function (e) {
      if (e.key) {
        var t = fy[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = zo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? dy[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vs,
    charCode: function (e) {
      return e.type === 'keypress' ? zo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? zo(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  vy = $e(my),
  yy = G({}, ji, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  wc = $e(yy),
  gy = G({}, io, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vs,
  }),
  wy = $e(gy),
  Sy = G({}, bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ey = $e(Sy),
  xy = G({}, ji, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Cy = $e(xy),
  ky = [9, 13, 27, 32],
  Ks = ht && 'CompositionEvent' in window,
  kr = null;
ht && 'documentMode' in document && (kr = document.documentMode);
var Py = ht && 'TextEvent' in window && !kr,
  Wd = ht && (!Ks || (kr && 8 < kr && 11 >= kr)),
  Sc = String.fromCharCode(32),
  Ec = !1;
function Hd(e, t) {
  switch (e) {
    case 'keyup':
      return ky.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Vd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var xn = !1;
function Ry(e, t) {
  switch (e) {
    case 'compositionend':
      return Vd(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Ec = !0), Sc);
    case 'textInput':
      return (e = t.data), e === Sc && Ec ? null : e;
    default:
      return null;
  }
}
function Oy(e, t) {
  if (xn)
    return e === 'compositionend' || (!Ks && Hd(e, t))
      ? ((e = Bd()), (Do = Ws = Ot = null), (xn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Wd && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Ny = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function xc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Ny[e.type] : t === 'textarea';
}
function Kd(e, t, n, r) {
  xd(r),
    (t = li(t, 'onChange')),
    0 < t.length &&
      ((n = new Hs('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pr = null,
  Fr = null;
function _y(e) {
  np(e, 0);
}
function $i(e) {
  var t = Pn(e);
  if (md(t)) return e;
}
function Ty(e, t) {
  if (e === 'change') return t;
}
var qd = !1;
if (ht) {
  var Ul;
  if (ht) {
    var Bl = 'oninput' in document;
    if (!Bl) {
      var Cc = document.createElement('div');
      Cc.setAttribute('oninput', 'return;'),
        (Bl = typeof Cc.oninput == 'function');
    }
    Ul = Bl;
  } else Ul = !1;
  qd = Ul && (!document.documentMode || 9 < document.documentMode);
}
function kc() {
  Pr && (Pr.detachEvent('onpropertychange', Qd), (Fr = Pr = null));
}
function Qd(e) {
  if (e.propertyName === 'value' && $i(Fr)) {
    var t = [];
    Kd(t, Fr, e, Ds(e)), Rd(_y, t);
  }
}
function Ly(e, t, n) {
  e === 'focusin'
    ? (kc(), (Pr = t), (Fr = n), Pr.attachEvent('onpropertychange', Qd))
    : e === 'focusout' && kc();
}
function Ay(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return $i(Fr);
}
function jy(e, t) {
  if (e === 'click') return $i(t);
}
function $y(e, t) {
  if (e === 'input' || e === 'change') return $i(t);
}
function Iy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == 'function' ? Object.is : Iy;
function Ur(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!wu.call(t, o) || !Ye(e[o], t[o])) return !1;
  }
  return !0;
}
function Pc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Rc(e, t) {
  var n = Pc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Pc(n);
  }
}
function Gd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Gd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Xd() {
  for (var e = window, t = bo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bo(e.document);
  }
  return t;
}
function qs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function My(e) {
  var t = Xd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && qs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Rc(n, i));
        var l = Rc(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Dy = ht && 'documentMode' in document && 11 >= document.documentMode,
  Cn = null,
  zu = null,
  Rr = null,
  Fu = !1;
function Oc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fu ||
    Cn == null ||
    Cn !== bo(r) ||
    ((r = Cn),
    'selectionStart' in r && qs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Rr && Ur(Rr, r)) ||
      ((Rr = r),
      (r = li(zu, 'onSelect')),
      0 < r.length &&
        ((t = new Hs('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Cn))));
}
function Po(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var kn = {
    animationend: Po('Animation', 'AnimationEnd'),
    animationiteration: Po('Animation', 'AnimationIteration'),
    animationstart: Po('Animation', 'AnimationStart'),
    transitionend: Po('Transition', 'TransitionEnd'),
  },
  Wl = {},
  Jd = {};
ht &&
  ((Jd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  'TransitionEvent' in window || delete kn.transitionend.transition);
function Ii(e) {
  if (Wl[e]) return Wl[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Jd) return (Wl[e] = t[n]);
  return e;
}
var Yd = Ii('animationend'),
  Zd = Ii('animationiteration'),
  bd = Ii('animationstart'),
  ep = Ii('transitionend'),
  tp = new Map(),
  Nc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function qt(e, t) {
  tp.set(e, t), vn(t, [e]);
}
for (var Hl = 0; Hl < Nc.length; Hl++) {
  var Vl = Nc[Hl],
    zy = Vl.toLowerCase(),
    Fy = Vl[0].toUpperCase() + Vl.slice(1);
  qt(zy, 'on' + Fy);
}
qt(Yd, 'onAnimationEnd');
qt(Zd, 'onAnimationIteration');
qt(bd, 'onAnimationStart');
qt('dblclick', 'onDoubleClick');
qt('focusin', 'onFocus');
qt('focusout', 'onBlur');
qt(ep, 'onTransitionEnd');
Bn('onMouseEnter', ['mouseout', 'mouseover']);
Bn('onMouseLeave', ['mouseout', 'mouseover']);
Bn('onPointerEnter', ['pointerout', 'pointerover']);
Bn('onPointerLeave', ['pointerout', 'pointerover']);
vn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
vn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
vn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
vn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
vn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
vn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var wr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Uy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(wr));
function _c(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), zv(r, t, void 0, e), (e.currentTarget = null);
}
function np(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && o.isPropagationStopped())) break e;
          _c(o, u, a), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          _c(o, u, a), (i = s);
        }
    }
  }
  if (ti) throw ((e = $u), (ti = !1), ($u = null), e);
}
function W(e, t) {
  var n = t[Vu];
  n === void 0 && (n = t[Vu] = new Set());
  var r = e + '__bubble';
  n.has(r) || (rp(t, e, 2, !1), n.add(r));
}
function Kl(e, t, n) {
  var r = 0;
  t && (r |= 4), rp(n, e, r, t);
}
var Ro = '_reactListening' + Math.random().toString(36).slice(2);
function Br(e) {
  if (!e[Ro]) {
    (e[Ro] = !0),
      cd.forEach(function (n) {
        n !== 'selectionchange' && (Uy.has(n) || Kl(n, !1, e), Kl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ro] || ((t[Ro] = !0), Kl('selectionchange', !1, t));
  }
}
function rp(e, t, n, r) {
  switch (Ud(t)) {
    case 1:
      var o = ey;
      break;
    case 4:
      o = ty;
      break;
    default:
      o = Bs;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ju ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ql(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; u !== null; ) {
          if (((l = rn(u)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Rd(function () {
    var a = i,
      c = Ds(n),
      f = [];
    e: {
      var h = tp.get(e);
      if (h !== void 0) {
        var g = Hs,
          m = e;
        switch (e) {
          case 'keypress':
            if (zo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = vy;
            break;
          case 'focusin':
            (m = 'focus'), (g = Fl);
            break;
          case 'focusout':
            (m = 'blur'), (g = Fl);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = Fl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = yc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = oy;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = wy;
            break;
          case Yd:
          case Zd:
          case bd:
            g = uy;
            break;
          case ep:
            g = Ey;
            break;
          case 'scroll':
            g = ny;
            break;
          case 'wheel':
            g = Cy;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = ay;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = wc;
        }
        var y = (t & 4) !== 0,
          E = !y && e === 'scroll',
          p = y ? (h !== null ? h + 'Capture' : null) : h;
        y = [];
        for (var d = a, v; d !== null; ) {
          v = d;
          var w = v.stateNode;
          if (
            (v.tag === 5 &&
              w !== null &&
              ((v = w),
              p !== null && ((w = Ir(d, p)), w != null && y.push(Wr(d, w, v)))),
            E)
          )
            break;
          d = d.return;
        }
        0 < y.length &&
          ((h = new g(h, m, null, n, c)), f.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          h &&
            n !== Lu &&
            (m = n.relatedTarget || n.fromElement) &&
            (rn(m) || m[mt]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((m = n.relatedTarget || n.toElement),
              (g = a),
              (m = m ? rn(m) : null),
              m !== null &&
                ((E = yn(m)), m !== E || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((g = null), (m = a)),
          g !== m)
        ) {
          if (
            ((y = yc),
            (w = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = wc),
              (w = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (d = 'pointer')),
            (E = g == null ? h : Pn(g)),
            (v = m == null ? h : Pn(m)),
            (h = new y(w, d + 'leave', g, n, c)),
            (h.target = E),
            (h.relatedTarget = v),
            (w = null),
            rn(c) === a &&
              ((y = new y(p, d + 'enter', m, n, c)),
              (y.target = v),
              (y.relatedTarget = E),
              (w = y)),
            (E = w),
            g && m)
          )
            t: {
              for (y = g, p = m, d = 0, v = y; v; v = wn(v)) d++;
              for (v = 0, w = p; w; w = wn(w)) v++;
              for (; 0 < d - v; ) (y = wn(y)), d--;
              for (; 0 < v - d; ) (p = wn(p)), v--;
              for (; d--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = wn(y)), (p = wn(p));
              }
              y = null;
            }
          else y = null;
          g !== null && Tc(f, h, g, y, !1),
            m !== null && E !== null && Tc(f, E, m, y, !0);
        }
      }
      e: {
        if (
          ((h = a ? Pn(a) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && h.type === 'file'))
        )
          var C = Ty;
        else if (xc(h))
          if (qd) C = $y;
          else {
            C = Ay;
            var R = Ly;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (C = jy);
        if (C && (C = C(e, a))) {
          Kd(f, C, n, c);
          break e;
        }
        R && R(e, h, a),
          e === 'focusout' &&
            (R = h._wrapperState) &&
            R.controlled &&
            h.type === 'number' &&
            Ru(h, 'number', h.value);
      }
      switch (((R = a ? Pn(a) : window), e)) {
        case 'focusin':
          (xc(R) || R.contentEditable === 'true') &&
            ((Cn = R), (zu = a), (Rr = null));
          break;
        case 'focusout':
          Rr = zu = Cn = null;
          break;
        case 'mousedown':
          Fu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Fu = !1), Oc(f, n, c);
          break;
        case 'selectionchange':
          if (Dy) break;
        case 'keydown':
        case 'keyup':
          Oc(f, n, c);
      }
      var O;
      if (Ks)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        xn
          ? Hd(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (Wd &&
          n.locale !== 'ko' &&
          (xn || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && xn && (O = Bd())
            : ((Ot = c),
              (Ws = 'value' in Ot ? Ot.value : Ot.textContent),
              (xn = !0))),
        (R = li(a, T)),
        0 < R.length &&
          ((T = new gc(T, e, null, n, c)),
          f.push({ event: T, listeners: R }),
          O ? (T.data = O) : ((O = Vd(n)), O !== null && (T.data = O)))),
        (O = Py ? Ry(e, n) : Oy(e, n)) &&
          ((a = li(a, 'onBeforeInput')),
          0 < a.length &&
            ((c = new gc('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: a }),
            (c.data = O)));
    }
    np(f, t);
  });
}
function Wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function li(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ir(e, n)),
      i != null && r.unshift(Wr(e, i, o)),
      (i = Ir(e, t)),
      i != null && r.push(Wr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = Ir(n, i)), s != null && l.unshift(Wr(n, s, u)))
        : o || ((s = Ir(n, i)), s != null && l.push(Wr(n, s, u)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var By = /\r\n?/g,
  Wy = /\u0000|\uFFFD/g;
function Lc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      By,
      `
`
    )
    .replace(Wy, '');
}
function Oo(e, t, n) {
  if (((t = Lc(t)), Lc(e) !== t && n)) throw Error(x(425));
}
function ui() {}
var Uu = null,
  Bu = null;
function Wu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Hu = typeof setTimeout == 'function' ? setTimeout : void 0,
  Hy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Ac = typeof Promise == 'function' ? Promise : void 0,
  Vy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Ac < 'u'
      ? function (e) {
          return Ac.resolve(null).then(e).catch(Ky);
        }
      : Hu;
function Ky(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ql(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), zr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  zr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function jc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var er = Math.random().toString(36).slice(2),
  tt = '__reactFiber$' + er,
  Hr = '__reactProps$' + er,
  mt = '__reactContainer$' + er,
  Vu = '__reactEvents$' + er,
  qy = '__reactListeners$' + er,
  Qy = '__reactHandles$' + er;
function rn(e) {
  var t = e[tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mt] || n[tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = jc(e); e !== null; ) {
          if ((n = e[tt])) return n;
          e = jc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function lo(e) {
  return (
    (e = e[tt] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Mi(e) {
  return e[Hr] || null;
}
var Ku = [],
  Rn = -1;
function Qt(e) {
  return { current: e };
}
function H(e) {
  0 > Rn || ((e.current = Ku[Rn]), (Ku[Rn] = null), Rn--);
}
function B(e, t) {
  Rn++, (Ku[Rn] = e.current), (e.current = t);
}
var Ht = {},
  ve = Qt(Ht),
  ke = Qt(!1),
  cn = Ht;
function Wn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Pe(e) {
  return (e = e.childContextTypes), e != null;
}
function si() {
  H(ke), H(ve);
}
function $c(e, t, n) {
  if (ve.current !== Ht) throw Error(x(168));
  B(ve, t), B(ke, n);
}
function op(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(x(108, Lv(e) || 'Unknown', o));
  return G({}, n, r);
}
function ai(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ht),
    (cn = ve.current),
    B(ve, e),
    B(ke, ke.current),
    !0
  );
}
function Ic(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = op(e, t, cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(ke),
      H(ve),
      B(ve, e))
    : H(ke),
    B(ke, n);
}
var st = null,
  Di = !1,
  Gl = !1;
function ip(e) {
  st === null ? (st = [e]) : st.push(e);
}
function Gy(e) {
  (Di = !0), ip(e);
}
function Gt() {
  if (!Gl && st !== null) {
    Gl = !0;
    var e = 0,
      t = z;
    try {
      var n = st;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (st = null), (Di = !1);
    } catch (o) {
      throw (st !== null && (st = st.slice(e + 1)), Td(zs, Gt), o);
    } finally {
      (z = t), (Gl = !1);
    }
  }
  return null;
}
var On = [],
  Nn = 0,
  ci = null,
  fi = 0,
  Me = [],
  De = 0,
  fn = null,
  ct = 1,
  ft = '';
function bt(e, t) {
  (On[Nn++] = fi), (On[Nn++] = ci), (ci = e), (fi = t);
}
function lp(e, t, n) {
  (Me[De++] = ct), (Me[De++] = ft), (Me[De++] = fn), (fn = e);
  var r = ct;
  e = ft;
  var o = 32 - Xe(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Xe(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (ct = (1 << (32 - Xe(t) + o)) | (n << o) | r),
      (ft = i + e);
  } else (ct = (1 << i) | (n << o) | r), (ft = e);
}
function Qs(e) {
  e.return !== null && (bt(e, 1), lp(e, 1, 0));
}
function Gs(e) {
  for (; e === ci; )
    (ci = On[--Nn]), (On[Nn] = null), (fi = On[--Nn]), (On[Nn] = null);
  for (; e === fn; )
    (fn = Me[--De]),
      (Me[De] = null),
      (ft = Me[--De]),
      (Me[De] = null),
      (ct = Me[--De]),
      (Me[De] = null);
}
var Te = null,
  _e = null,
  K = !1,
  Qe = null;
function up(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Mc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Te = e), (_e = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Te = e), (_e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fn !== null ? { id: ct, overflow: ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Te = e),
            (_e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function qu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qu(e) {
  if (K) {
    var t = _e;
    if (t) {
      var n = t;
      if (!Mc(e, t)) {
        if (qu(e)) throw Error(x(418));
        t = jt(n.nextSibling);
        var r = Te;
        t && Mc(e, t)
          ? up(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Te = e));
      }
    } else {
      if (qu(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (K = !1), (Te = e);
    }
  }
}
function Dc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Te = e;
}
function No(e) {
  if (e !== Te) return !1;
  if (!K) return Dc(e), (K = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Wu(e.type, e.memoizedProps))),
    t && (t = _e))
  ) {
    if (qu(e)) throw (sp(), Error(x(418)));
    for (; t; ) up(e, t), (t = jt(t.nextSibling));
  }
  if ((Dc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              _e = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = Te ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function sp() {
  for (var e = _e; e; ) e = jt(e.nextSibling);
}
function Hn() {
  (_e = Te = null), (K = !1);
}
function Xs(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
var Xy = wt.ReactCurrentBatchConfig;
function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var di = Qt(null),
  pi = null,
  _n = null,
  Js = null;
function Ys() {
  Js = _n = pi = null;
}
function Zs(e) {
  var t = di.current;
  H(di), (e._currentValue = t);
}
function Gu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Mn(e, t) {
  (pi = e),
    (Js = _n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function Be(e) {
  var t = e._currentValue;
  if (Js !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
      if (pi === null) throw Error(x(308));
      (_n = e), (pi.dependencies = { lanes: 0, firstContext: e });
    } else _n = _n.next = e;
  return t;
}
var on = null;
function bs(e) {
  on === null ? (on = [e]) : on.push(e);
}
function ap(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), bs(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    vt(e, r)
  );
}
function vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function ea(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function $t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      vt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), bs(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    vt(e, n)
  );
}
function Fo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fs(e, n);
  }
}
function zc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function hi(e, t, n, r) {
  var o = e.updateQueue;
  Ct = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), l === null ? (i = a) : (l.next = a), (l = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== l &&
        (u === null ? (c.firstBaseUpdate = a) : (u.next = a),
        (c.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var f = o.baseState;
    (l = 0), (c = a = s = null), (u = i);
    do {
      var h = u.lane,
        g = u.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var m = e,
            y = u;
          switch (((h = t), (g = n), y.tag)) {
            case 1:
              if (((m = y.payload), typeof m == 'function')) {
                f = m.call(g, f, h);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = y.payload),
                (h = typeof m == 'function' ? m.call(g, f, h) : m),
                h == null)
              )
                break e;
              f = G({}, f, h);
              break e;
            case 2:
              Ct = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [u]) : h.push(u));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          c === null ? ((a = c = g), (s = f)) : (c = c.next = g),
          (l |= h);
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (s = f),
      (o.baseState = s),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (pn |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function Fc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(x(191, o));
        o.call(r);
      }
    }
}
var fp = new ad.Component().refs;
function Xu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      o = Mt(e),
      i = dt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = $t(e, i, o)),
      t !== null && (Je(t, e, o, r), Fo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      o = Mt(e),
      i = dt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = $t(e, i, o)),
      t !== null && (Je(t, e, o, r), Fo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Mt(e),
      o = dt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = $t(e, o, r)),
      t !== null && (Je(t, e, r, n), Fo(t, e, r));
  },
};
function Uc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ur(n, r) || !Ur(o, i)
      : !0
  );
}
function dp(e, t, n) {
  var r = !1,
    o = Ht,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Be(i))
      : ((o = Pe(t) ? cn : ve.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Wn(e, o) : Ht)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Bc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zi.enqueueReplaceState(t, t.state, null);
}
function Ju(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = fp), ea(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Be(i))
    : ((i = Pe(t) ? cn : ve.current), (o.context = Wn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Xu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && zi.enqueueReplaceState(o, o.state, null),
      hi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function dr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var u = o.refs;
            u === fp && (u = o.refs = {}),
              l === null ? delete u[i] : (u[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function _o(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Wc(e) {
  var t = e._init;
  return t(e._payload);
}
function pp(e) {
  function t(p, d) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [d]), (p.flags |= 16)) : v.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function o(p, d) {
    return (p = Dt(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, d, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < d ? ((p.flags |= 2), d) : v)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, d, v, w) {
    return d === null || d.tag !== 6
      ? ((d = tu(v, p.mode, w)), (d.return = p), d)
      : ((d = o(d, v)), (d.return = p), d);
  }
  function s(p, d, v, w) {
    var C = v.type;
    return C === En
      ? c(p, d, v.props.children, w, v.key)
      : d !== null &&
        (d.elementType === C ||
          (typeof C == 'object' &&
            C !== null &&
            C.$$typeof === xt &&
            Wc(C) === d.type))
      ? ((w = o(d, v.props)), (w.ref = dr(p, d, v)), (w.return = p), w)
      : ((w = Ko(v.type, v.key, v.props, null, p.mode, w)),
        (w.ref = dr(p, d, v)),
        (w.return = p),
        w);
  }
  function a(p, d, v, w) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== v.containerInfo ||
      d.stateNode.implementation !== v.implementation
      ? ((d = nu(v, p.mode, w)), (d.return = p), d)
      : ((d = o(d, v.children || [])), (d.return = p), d);
  }
  function c(p, d, v, w, C) {
    return d === null || d.tag !== 7
      ? ((d = sn(v, p.mode, w, C)), (d.return = p), d)
      : ((d = o(d, v)), (d.return = p), d);
  }
  function f(p, d, v) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = tu('' + d, p.mode, v)), (d.return = p), d;
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case go:
          return (
            (v = Ko(d.type, d.key, d.props, null, p.mode, v)),
            (v.ref = dr(p, null, d)),
            (v.return = p),
            v
          );
        case Sn:
          return (d = nu(d, p.mode, v)), (d.return = p), d;
        case xt:
          var w = d._init;
          return f(p, w(d._payload), v);
      }
      if (yr(d) || ur(d))
        return (d = sn(d, p.mode, v, null)), (d.return = p), d;
      _o(p, d);
    }
    return null;
  }
  function h(p, d, v, w) {
    var C = d !== null ? d.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return C !== null ? null : u(p, d, '' + v, w);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case go:
          return v.key === C ? s(p, d, v, w) : null;
        case Sn:
          return v.key === C ? a(p, d, v, w) : null;
        case xt:
          return (C = v._init), h(p, d, C(v._payload), w);
      }
      if (yr(v) || ur(v)) return C !== null ? null : c(p, d, v, w, null);
      _o(p, v);
    }
    return null;
  }
  function g(p, d, v, w, C) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (p = p.get(v) || null), u(d, p, '' + w, C);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case go:
          return (p = p.get(w.key === null ? v : w.key) || null), s(d, p, w, C);
        case Sn:
          return (p = p.get(w.key === null ? v : w.key) || null), a(d, p, w, C);
        case xt:
          var R = w._init;
          return g(p, d, v, R(w._payload), C);
      }
      if (yr(w) || ur(w)) return (p = p.get(v) || null), c(d, p, w, C, null);
      _o(d, w);
    }
    return null;
  }
  function m(p, d, v, w) {
    for (
      var C = null, R = null, O = d, T = (d = 0), D = null;
      O !== null && T < v.length;
      T++
    ) {
      O.index > T ? ((D = O), (O = null)) : (D = O.sibling);
      var L = h(p, O, v[T], w);
      if (L === null) {
        O === null && (O = D);
        break;
      }
      e && O && L.alternate === null && t(p, O),
        (d = i(L, d, T)),
        R === null ? (C = L) : (R.sibling = L),
        (R = L),
        (O = D);
    }
    if (T === v.length) return n(p, O), K && bt(p, T), C;
    if (O === null) {
      for (; T < v.length; T++)
        (O = f(p, v[T], w)),
          O !== null &&
            ((d = i(O, d, T)), R === null ? (C = O) : (R.sibling = O), (R = O));
      return K && bt(p, T), C;
    }
    for (O = r(p, O); T < v.length; T++)
      (D = g(O, p, T, v[T], w)),
        D !== null &&
          (e && D.alternate !== null && O.delete(D.key === null ? T : D.key),
          (d = i(D, d, T)),
          R === null ? (C = D) : (R.sibling = D),
          (R = D));
    return (
      e &&
        O.forEach(function (ee) {
          return t(p, ee);
        }),
      K && bt(p, T),
      C
    );
  }
  function y(p, d, v, w) {
    var C = ur(v);
    if (typeof C != 'function') throw Error(x(150));
    if (((v = C.call(v)), v == null)) throw Error(x(151));
    for (
      var R = (C = null), O = d, T = (d = 0), D = null, L = v.next();
      O !== null && !L.done;
      T++, L = v.next()
    ) {
      O.index > T ? ((D = O), (O = null)) : (D = O.sibling);
      var ee = h(p, O, L.value, w);
      if (ee === null) {
        O === null && (O = D);
        break;
      }
      e && O && ee.alternate === null && t(p, O),
        (d = i(ee, d, T)),
        R === null ? (C = ee) : (R.sibling = ee),
        (R = ee),
        (O = D);
    }
    if (L.done) return n(p, O), K && bt(p, T), C;
    if (O === null) {
      for (; !L.done; T++, L = v.next())
        (L = f(p, L.value, w)),
          L !== null &&
            ((d = i(L, d, T)), R === null ? (C = L) : (R.sibling = L), (R = L));
      return K && bt(p, T), C;
    }
    for (O = r(p, O); !L.done; T++, L = v.next())
      (L = g(O, p, T, L.value, w)),
        L !== null &&
          (e && L.alternate !== null && O.delete(L.key === null ? T : L.key),
          (d = i(L, d, T)),
          R === null ? (C = L) : (R.sibling = L),
          (R = L));
    return (
      e &&
        O.forEach(function (ir) {
          return t(p, ir);
        }),
      K && bt(p, T),
      C
    );
  }
  function E(p, d, v, w) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === En &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case go:
          e: {
            for (var C = v.key, R = d; R !== null; ) {
              if (R.key === C) {
                if (((C = v.type), C === En)) {
                  if (R.tag === 7) {
                    n(p, R.sibling),
                      (d = o(R, v.props.children)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                } else if (
                  R.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === xt &&
                    Wc(C) === R.type)
                ) {
                  n(p, R.sibling),
                    (d = o(R, v.props)),
                    (d.ref = dr(p, R, v)),
                    (d.return = p),
                    (p = d);
                  break e;
                }
                n(p, R);
                break;
              } else t(p, R);
              R = R.sibling;
            }
            v.type === En
              ? ((d = sn(v.props.children, p.mode, w, v.key)),
                (d.return = p),
                (p = d))
              : ((w = Ko(v.type, v.key, v.props, null, p.mode, w)),
                (w.ref = dr(p, d, v)),
                (w.return = p),
                (p = w));
          }
          return l(p);
        case Sn:
          e: {
            for (R = v.key; d !== null; ) {
              if (d.key === R)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === v.containerInfo &&
                  d.stateNode.implementation === v.implementation
                ) {
                  n(p, d.sibling),
                    (d = o(d, v.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = nu(v, p.mode, w)), (d.return = p), (p = d);
          }
          return l(p);
        case xt:
          return (R = v._init), E(p, d, R(v._payload), w);
      }
      if (yr(v)) return m(p, d, v, w);
      if (ur(v)) return y(p, d, v, w);
      _o(p, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = o(d, v)), (d.return = p), (p = d))
          : (n(p, d), (d = tu(v, p.mode, w)), (d.return = p), (p = d)),
        l(p))
      : n(p, d);
  }
  return E;
}
var Vn = pp(!0),
  hp = pp(!1),
  uo = {},
  ot = Qt(uo),
  Vr = Qt(uo),
  Kr = Qt(uo);
function ln(e) {
  if (e === uo) throw Error(x(174));
  return e;
}
function ta(e, t) {
  switch ((B(Kr, t), B(Vr, e), B(ot, uo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Nu(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Nu(t, e));
  }
  H(ot), B(ot, t);
}
function Kn() {
  H(ot), H(Vr), H(Kr);
}
function mp(e) {
  ln(Kr.current);
  var t = ln(ot.current),
    n = Nu(t, e.type);
  t !== n && (B(Vr, e), B(ot, n));
}
function na(e) {
  Vr.current === e && (H(ot), H(Vr));
}
var q = Qt(0);
function mi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Xl = [];
function ra() {
  for (var e = 0; e < Xl.length; e++)
    Xl[e]._workInProgressVersionPrimary = null;
  Xl.length = 0;
}
var Uo = wt.ReactCurrentDispatcher,
  Jl = wt.ReactCurrentBatchConfig,
  dn = 0,
  Q = null,
  te = null,
  ie = null,
  vi = !1,
  Or = !1,
  qr = 0,
  Jy = 0;
function de() {
  throw Error(x(321));
}
function oa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function ia(e, t, n, r, o, i) {
  if (
    ((dn = i),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Uo.current = e === null || e.memoizedState === null ? e0 : t0),
    (e = n(r, o)),
    Or)
  ) {
    i = 0;
    do {
      if (((Or = !1), (qr = 0), 25 <= i)) throw Error(x(301));
      (i += 1),
        (ie = te = null),
        (t.updateQueue = null),
        (Uo.current = n0),
        (e = n(r, o));
    } while (Or);
  }
  if (
    ((Uo.current = yi),
    (t = te !== null && te.next !== null),
    (dn = 0),
    (ie = te = Q = null),
    (vi = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function la() {
  var e = qr !== 0;
  return (qr = 0), e;
}
function et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ie === null ? (Q.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function We() {
  if (te === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = ie === null ? Q.memoizedState : ie.next;
  if (t !== null) (ie = t), (te = e);
  else {
    if (e === null) throw Error(x(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      ie === null ? (Q.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}
function Qr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Yl(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = te,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var u = (l = null),
      s = null,
      a = i;
    do {
      var c = a.lane;
      if ((dn & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var f = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = f), (l = r)) : (s = s.next = f),
          (Q.lanes |= c),
          (pn |= c);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (l = r) : (s.next = u),
      Ye(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Q.lanes |= i), (pn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zl(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    Ye(i, t.memoizedState) || (Ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function vp() {}
function yp(e, t) {
  var n = Q,
    r = We(),
    o = t(),
    i = !Ye(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ce = !0)),
    (r = r.queue),
    ua(Sp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, wp.bind(null, n, r, o, t), void 0, null),
      le === null)
    )
      throw Error(x(349));
    dn & 30 || gp(n, t, o);
  }
  return o;
}
function gp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ep(t) && xp(e);
}
function Sp(e, t, n) {
  return n(function () {
    Ep(t) && xp(e);
  });
}
function Ep(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function xp(e) {
  var t = vt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function Hc(e) {
  var t = et();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = by.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Cp() {
  return We().memoizedState;
}
function Bo(e, t, n, r) {
  var o = et();
  (Q.flags |= e),
    (o.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fi(e, t, n, r) {
  var o = We();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (te !== null) {
    var l = te.memoizedState;
    if (((i = l.destroy), r !== null && oa(r, l.deps))) {
      o.memoizedState = Gr(t, n, i, r);
      return;
    }
  }
  (Q.flags |= e), (o.memoizedState = Gr(1 | t, n, i, r));
}
function Vc(e, t) {
  return Bo(8390656, 8, e, t);
}
function ua(e, t) {
  return Fi(2048, 8, e, t);
}
function kp(e, t) {
  return Fi(4, 2, e, t);
}
function Pp(e, t) {
  return Fi(4, 4, e, t);
}
function Rp(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Op(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Fi(4, 4, Rp.bind(null, t, e), n)
  );
}
function sa() {}
function Np(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && oa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _p(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && oa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Tp(e, t, n) {
  return dn & 21
    ? (Ye(n, t) || ((n = jd()), (Q.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function Yy(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Jl.transition;
  Jl.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (Jl.transition = r);
  }
}
function Lp() {
  return We().memoizedState;
}
function Zy(e, t, n) {
  var r = Mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ap(e))
  )
    jp(t, n);
  else if (((n = ap(e, t, n, r)), n !== null)) {
    var o = we();
    Je(n, e, r, o), $p(n, t, r);
  }
}
function by(e, t, n) {
  var r = Mt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ap(e)) jp(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          u = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = u), Ye(u, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), bs(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = ap(e, t, o, r)),
      n !== null && ((o = we()), Je(n, e, r, o), $p(n, t, r));
  }
}
function Ap(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function jp(e, t) {
  Or = vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function $p(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fs(e, n);
  }
}
var yi = {
    readContext: Be,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  e0 = {
    readContext: Be,
    useCallback: function (e, t) {
      return (et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Be,
    useEffect: Vc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Bo(4194308, 4, Rp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Bo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Bo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = et();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Zy.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Hc,
    useDebugValue: sa,
    useDeferredValue: function (e) {
      return (et().memoizedState = e);
    },
    useTransition: function () {
      var e = Hc(!1),
        t = e[0];
      return (e = Yy.bind(null, e[1])), (et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        o = et();
      if (K) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(x(349));
        dn & 30 || gp(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Vc(Sp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Gr(9, wp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = et(),
        t = le.identifierPrefix;
      if (K) {
        var n = ft,
          r = ct;
        (n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = qr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Jy++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  t0 = {
    readContext: Be,
    useCallback: Np,
    useContext: Be,
    useEffect: ua,
    useImperativeHandle: Op,
    useInsertionEffect: kp,
    useLayoutEffect: Pp,
    useMemo: _p,
    useReducer: Yl,
    useRef: Cp,
    useState: function () {
      return Yl(Qr);
    },
    useDebugValue: sa,
    useDeferredValue: function (e) {
      var t = We();
      return Tp(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(Qr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: vp,
    useSyncExternalStore: yp,
    useId: Lp,
    unstable_isNewReconciler: !1,
  },
  n0 = {
    readContext: Be,
    useCallback: Np,
    useContext: Be,
    useEffect: ua,
    useImperativeHandle: Op,
    useInsertionEffect: kp,
    useLayoutEffect: Pp,
    useMemo: _p,
    useReducer: Zl,
    useRef: Cp,
    useState: function () {
      return Zl(Qr);
    },
    useDebugValue: sa,
    useDeferredValue: function (e) {
      var t = We();
      return te === null ? (t.memoizedState = e) : Tp(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(Qr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: vp,
    useSyncExternalStore: yp,
    useId: Lp,
    unstable_isNewReconciler: !1,
  };
function qn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Tv(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var r0 = typeof WeakMap == 'function' ? WeakMap : Map;
function Ip(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wi || ((wi = !0), (us = r)), Yu(e, t);
    }),
    n
  );
}
function Mp(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Yu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Yu(e, t),
          typeof r != 'function' &&
            (It === null ? (It = new Set([this])) : It.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : '',
        });
      }),
    n
  );
}
function Kc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new r0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = y0.bind(null, e, t, n)), t.then(e, e));
}
function qc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = dt(-1, 1)), (t.tag = 2), $t(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var o0 = wt.ReactCurrentOwner,
  Ce = !1;
function ye(e, t, n, r) {
  t.child = e === null ? hp(t, null, n, r) : Vn(t, e.child, n, r);
}
function Gc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Mn(t, o),
    (r = ia(e, t, n, r, i, o)),
    (n = la()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        yt(e, t, o))
      : (K && n && Qs(t), (t.flags |= 1), ye(e, t, r, o), t.child)
  );
}
function Xc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !va(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Dp(e, t, i, r, o))
      : ((e = Ko(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ur), n(l, r) && e.ref === t.ref)
    )
      return yt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Dp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ur(i, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), yt(e, t, o);
  }
  return Zu(e, t, n, r, o);
}
function zp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Ln, Ne),
        (Ne |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(Ln, Ne),
          (Ne |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        B(Ln, Ne),
        (Ne |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Ln, Ne),
      (Ne |= r);
  return ye(e, t, o, n), t.child;
}
function Fp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zu(e, t, n, r, o) {
  var i = Pe(n) ? cn : ve.current;
  return (
    (i = Wn(t, i)),
    Mn(t, o),
    (n = ia(e, t, n, r, i, o)),
    (r = la()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        yt(e, t, o))
      : (K && r && Qs(t), (t.flags |= 1), ye(e, t, n, o), t.child)
  );
}
function Jc(e, t, n, r, o) {
  if (Pe(n)) {
    var i = !0;
    ai(t);
  } else i = !1;
  if ((Mn(t, o), t.stateNode === null))
    Wo(e, t), dp(t, n, r), Ju(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var s = l.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = Be(a))
      : ((a = Pe(n) ? cn : ve.current), (a = Wn(t, a)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && Bc(t, l, r, a)),
      (Ct = !1);
    var h = t.memoizedState;
    (l.state = h),
      hi(t, r, l, o),
      (s = t.memoizedState),
      u !== r || h !== s || ke.current || Ct
        ? (typeof c == 'function' && (Xu(t, n, c, r), (s = t.memoizedState)),
          (u = Ct || Uc(t, n, u, r, h, s, a))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = a),
          (r = u))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      cp(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Ke(t.type, u)),
      (l.props = a),
      (f = t.pendingProps),
      (h = l.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Be(s))
        : ((s = Pe(n) ? cn : ve.current), (s = Wn(t, s)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((u !== f || h !== s) && Bc(t, l, r, s)),
      (Ct = !1),
      (h = t.memoizedState),
      (l.state = h),
      hi(t, r, l, o);
    var m = t.memoizedState;
    u !== f || h !== m || ke.current || Ct
      ? (typeof g == 'function' && (Xu(t, n, g, r), (m = t.memoizedState)),
        (a = Ct || Uc(t, n, a, r, h, m, s) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, m, s),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, m, s)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (l.props = r),
        (l.state = m),
        (l.context = s),
        (r = a))
      : (typeof l.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bu(e, t, n, r, i, o);
}
function bu(e, t, n, r, o, i) {
  Fp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Ic(t, n, !1), yt(e, t, i);
  (r = t.stateNode), (o0.current = t);
  var u =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Vn(t, e.child, null, i)), (t.child = Vn(t, null, u, i)))
      : ye(e, t, u, i),
    (t.memoizedState = r.state),
    o && Ic(t, n, !0),
    t.child
  );
}
function Up(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $c(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $c(e, t.context, !1),
    ta(e, t.containerInfo);
}
function Yc(e, t, n, r, o) {
  return Hn(), Xs(o), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var es = { dehydrated: null, treeContext: null, retryLane: 0 };
function ts(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bp(e, t, n) {
  var r = t.pendingProps,
    o = q.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    u;
  if (
    ((u = l) ||
      (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    B(q, o & 1),
    e === null)
  )
    return (
      Qu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Wi(l, r, 0, null)),
              (e = sn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ts(n)),
              (t.memoizedState = es),
              e)
            : aa(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return i0(e, t, l, r, u, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (u = o.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Dt(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = Dt(u, i)) : ((i = sn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ts(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = es),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Dt(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function aa(e, t) {
  return (
    (t = Wi({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function To(e, t, n, r) {
  return (
    r !== null && Xs(r),
    Vn(t, e.child, null, n),
    (e = aa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function i0(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = bl(Error(x(422)))), To(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Wi({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = sn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Vn(t, e.child, null, l),
        (t.child.memoizedState = ts(l)),
        (t.memoizedState = es),
        i);
  if (!(t.mode & 1)) return To(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(x(419))), (r = bl(i, r, void 0)), To(e, t, l, r);
  }
  if (((u = (l & e.childLanes) !== 0), Ce || u)) {
    if (((r = le), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), vt(e, o), Je(r, e, o, -1));
    }
    return ma(), (r = bl(Error(x(421)))), To(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = g0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (_e = jt(o.nextSibling)),
      (Te = t),
      (K = !0),
      (Qe = null),
      e !== null &&
        ((Me[De++] = ct),
        (Me[De++] = ft),
        (Me[De++] = fn),
        (ct = e.id),
        (ft = e.overflow),
        (fn = t)),
      (t = aa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Gu(e.return, t, n);
}
function eu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Wp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ye(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zc(e, n, t);
        else if (e.tag === 19) Zc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && mi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          eu(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && mi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        eu(t, !0, n, null, i);
        break;
      case 'together':
        eu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function l0(e, t, n) {
  switch (t.tag) {
    case 3:
      Up(t), Hn();
      break;
    case 5:
      mp(t);
      break;
    case 1:
      Pe(t.type) && ai(t);
      break;
    case 4:
      ta(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      B(di, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Bp(e, t, n)
          : (B(q, q.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      B(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Wp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        B(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zp(e, t, n);
  }
  return yt(e, t, n);
}
var Hp, ns, Vp, Kp;
Hp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ns = function () {};
Vp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), ln(ot.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = ku(e, o)), (r = ku(e, r)), (i = []);
        break;
      case 'select':
        (o = G({}, o, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = Ou(e, o)), (r = Ou(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ui);
    }
    _u(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var u = o[a];
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (jr.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === 'style')
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''));
            for (l in s)
              s.hasOwnProperty(l) &&
                u[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (i = i || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (jr.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && W('scroll', e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Kp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function pr(e, t) {
  if (!K)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function u0(e, t, n) {
  var r = t.pendingProps;
  switch ((Gs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null;
    case 1:
      return Pe(t.type) && si(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Kn(),
        H(ke),
        H(ve),
        ra(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (No(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qe !== null && (cs(Qe), (Qe = null)))),
        ns(e, t),
        pe(t),
        null
      );
    case 5:
      na(t);
      var o = ln(Kr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return pe(t), null;
        }
        if (((e = ln(ot.current)), No(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[tt] = t), (r[Hr] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              W('cancel', r), W('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              W('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < wr.length; o++) W(wr[o], r);
              break;
            case 'source':
              W('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              W('error', r), W('load', r);
              break;
            case 'details':
              W('toggle', r);
              break;
            case 'input':
              uc(r, i), W('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                W('invalid', r);
              break;
            case 'textarea':
              ac(r, i), W('invalid', r);
          }
          _u(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Oo(r.textContent, u, e),
                    (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Oo(r.textContent, u, e),
                    (o = ['children', '' + u]))
                : jr.hasOwnProperty(l) &&
                  u != null &&
                  l === 'onScroll' &&
                  W('scroll', r);
            }
          switch (n) {
            case 'input':
              wo(r), sc(r, i, !0);
              break;
            case 'textarea':
              wo(r), cc(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = ui);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = gd(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[tt] = t),
            (e[Hr] = r),
            Hp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Tu(n, r)), n)) {
              case 'dialog':
                W('cancel', e), W('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                W('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < wr.length; o++) W(wr[o], e);
                o = r;
                break;
              case 'source':
                W('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                W('error', e), W('load', e), (o = r);
                break;
              case 'details':
                W('toggle', e), (o = r);
                break;
              case 'input':
                uc(e, r), (o = ku(e, r)), W('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = G({}, r, { value: void 0 })),
                  W('invalid', e);
                break;
              case 'textarea':
                ac(e, r), (o = Ou(e, r)), W('invalid', e);
                break;
              default:
                o = r;
            }
            _u(n, o), (u = o);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style'
                  ? Ed(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && wd(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && $r(e, s)
                    : typeof s == 'number' && $r(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (jr.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && W('scroll', e)
                      : s != null && js(e, i, s, l));
              }
            switch (n) {
              case 'input':
                wo(e), sc(e, r, !1);
                break;
              case 'textarea':
                wo(e), cc(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Wt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? An(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      An(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = ui);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) Kp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(x(166));
        if (((n = ln(Kr.current)), ln(ot.current), No(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[tt] = t),
            (i = r.nodeValue !== n) && ((e = Te), e !== null))
          )
            switch (e.tag) {
              case 3:
                Oo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Oo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[tt] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (H(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && _e !== null && t.mode & 1 && !(t.flags & 128))
          sp(), Hn(), (t.flags |= 98560), (i = !1);
        else if (((i = No(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(x(317));
            i[tt] = t;
          } else
            Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (i = !1);
        } else Qe !== null && (cs(Qe), (Qe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? ne === 0 && (ne = 3) : ma())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        Kn(), ns(e, t), e === null && Br(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return Zs(t.type._context), pe(t), null;
    case 17:
      return Pe(t.type) && si(), pe(t), null;
    case 19:
      if ((H(q), (i = t.memoizedState), i === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) pr(i, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = mi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    pr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Y() > Qn &&
            ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = mi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              pr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !K)
            )
              return pe(t), null;
          } else
            2 * Y() - i.renderingStartTime > Qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Y()),
          (t.sibling = null),
          (n = q.current),
          B(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        ha(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function s0(e, t) {
  switch ((Gs(t), t.tag)) {
    case 1:
      return (
        Pe(t.type) && si(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Kn(),
        H(ke),
        H(ve),
        ra(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return na(t), null;
    case 13:
      if ((H(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        Hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(q), null;
    case 4:
      return Kn(), null;
    case 10:
      return Zs(t.type._context), null;
    case 22:
    case 23:
      return ha(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Lo = !1,
  me = !1,
  a0 = typeof WeakSet == 'function' ? WeakSet : Set,
  N = null;
function Tn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function rs(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var bc = !1;
function c0(e, t) {
  if (((Uu = oi), (e = Xd()), qs(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            u = -1,
            s = -1,
            a = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (o !== 0 && f.nodeType !== 3) || (u = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (s = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (h = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++a === o && (u = l),
                h === i && ++c === r && (s = l),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bu = { focusedElem: e, selectionRange: n }, oi = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var y = m.memoizedProps,
                    E = m.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ke(t.type, y),
                      E
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (w) {
          X(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (m = bc), (bc = !1), m;
}
function Nr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && rs(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ui(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function os(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function qp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), qp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[tt], delete t[Hr], delete t[Vu], delete t[qy], delete t[Qy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ef(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function is(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ui));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (is(e, t, n), e = e.sibling; e !== null; ) is(e, t, n), (e = e.sibling);
}
function ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ls(e, t, n), e = e.sibling; e !== null; ) ls(e, t, n), (e = e.sibling);
}
var ae = null,
  qe = !1;
function St(e, t, n) {
  for (n = n.child; n !== null; ) Gp(e, t, n), (n = n.sibling);
}
function Gp(e, t, n) {
  if (rt && typeof rt.onCommitFiberUnmount == 'function')
    try {
      rt.onCommitFiberUnmount(Ai, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || Tn(n, t);
    case 6:
      var r = ae,
        o = qe;
      (ae = null),
        St(e, t, n),
        (ae = r),
        (qe = o),
        ae !== null &&
          (qe
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (qe
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ql(e.parentNode, n)
              : e.nodeType === 1 && Ql(e, n),
            zr(e))
          : Ql(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (o = qe),
        (ae = n.stateNode.containerInfo),
        (qe = !0),
        St(e, t, n),
        (ae = r),
        (qe = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && rs(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      St(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (Tn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          X(n, t, u);
        }
      St(e, t, n);
      break;
    case 21:
      St(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), St(e, t, n), (me = r))
        : St(e, t, n);
      break;
    default:
      St(e, t, n);
  }
}
function tf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new a0()),
      t.forEach(function (r) {
        var o = w0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ve(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          u = l;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ae = u.stateNode), (qe = !1);
              break e;
            case 3:
              (ae = u.stateNode.containerInfo), (qe = !0);
              break e;
            case 4:
              (ae = u.stateNode.containerInfo), (qe = !0);
              break e;
          }
          u = u.return;
        }
        if (ae === null) throw Error(x(160));
        Gp(i, l, o), (ae = null), (qe = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (a) {
        X(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Xp(t, e), (t = t.sibling);
}
function Xp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ve(t, e), be(e), r & 4)) {
        try {
          Nr(3, e, e.return), Ui(3, e);
        } catch (y) {
          X(e, e.return, y);
        }
        try {
          Nr(5, e, e.return);
        } catch (y) {
          X(e, e.return, y);
        }
      }
      break;
    case 1:
      Ve(t, e), be(e), r & 512 && n !== null && Tn(n, n.return);
      break;
    case 5:
      if (
        (Ve(t, e),
        be(e),
        r & 512 && n !== null && Tn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          $r(o, '');
        } catch (y) {
          X(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && vd(o, i),
              Tu(u, l);
            var a = Tu(u, i);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                f = s[l + 1];
              c === 'style'
                ? Ed(o, f)
                : c === 'dangerouslySetInnerHTML'
                ? wd(o, f)
                : c === 'children'
                ? $r(o, f)
                : js(o, c, f, a);
            }
            switch (u) {
              case 'input':
                Pu(o, i);
                break;
              case 'textarea':
                yd(o, i);
                break;
              case 'select':
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? An(o, !!i.multiple, g, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? An(o, !!i.multiple, i.defaultValue, !0)
                      : An(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Hr] = i;
          } catch (y) {
            X(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ve(t, e), be(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          X(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ve(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          zr(t.containerInfo);
        } catch (y) {
          X(e, e.return, y);
        }
      break;
    case 4:
      Ve(t, e), be(e);
      break;
    case 13:
      Ve(t, e),
        be(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (da = Y())),
        r & 4 && tf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (a = me) || c), Ve(t, e), (me = a)) : Ve(t, e),
        be(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (N = e, c = e.child; c !== null; ) {
            for (f = N = c; N !== null; ) {
              switch (((h = N), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nr(4, h, h.return);
                  break;
                case 1:
                  Tn(h, h.return);
                  var m = h.stateNode;
                  if (typeof m.componentWillUnmount == 'function') {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (y) {
                      X(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Tn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    rf(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (N = g)) : rf(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = f.stateNode),
                      (s = f.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = Sd('display', l)));
              } catch (y) {
                X(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = a ? '' : f.memoizedProps;
              } catch (y) {
                X(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ve(t, e), be(e), r & 4 && tf(e);
      break;
    case 21:
      break;
    default:
      Ve(t, e), be(e);
  }
}
function be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && ($r(o, ''), (r.flags &= -33));
          var i = ef(e);
          ls(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = ef(e);
          is(e, u, l);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      X(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function f0(e, t, n) {
  (N = e), Jp(e);
}
function Jp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var o = N,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Lo;
      if (!l) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || me;
        u = Lo;
        var a = me;
        if (((Lo = l), (me = s) && !a))
          for (N = o; N !== null; )
            (l = N),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? of(o)
                : s !== null
                ? ((s.return = l), (N = s))
                : of(o);
        for (; i !== null; ) (N = i), Jp(i), (i = i.sibling);
        (N = o), (Lo = u), (me = a);
      }
      nf(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (N = i)) : nf(e);
  }
}
function nf(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Ui(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Fc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Fc(t, l, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && zr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        me || (t.flags & 512 && os(t));
      } catch (h) {
        X(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function rf(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function of(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ui(4, t);
          } catch (s) {
            X(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              X(t, o, s);
            }
          }
          var i = t.return;
          try {
            os(t);
          } catch (s) {
            X(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            os(t);
          } catch (s) {
            X(t, l, s);
          }
      }
    } catch (s) {
      X(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
var d0 = Math.ceil,
  gi = wt.ReactCurrentDispatcher,
  ca = wt.ReactCurrentOwner,
  Fe = wt.ReactCurrentBatchConfig,
  M = 0,
  le = null,
  Z = null,
  ce = 0,
  Ne = 0,
  Ln = Qt(0),
  ne = 0,
  Xr = null,
  pn = 0,
  Bi = 0,
  fa = 0,
  _r = null,
  xe = null,
  da = 0,
  Qn = 1 / 0,
  ut = null,
  wi = !1,
  us = null,
  It = null,
  Ao = !1,
  Nt = null,
  Si = 0,
  Tr = 0,
  ss = null,
  Ho = -1,
  Vo = 0;
function we() {
  return M & 6 ? Y() : Ho !== -1 ? Ho : (Ho = Y());
}
function Mt(e) {
  return e.mode & 1
    ? M & 2 && ce !== 0
      ? ce & -ce
      : Xy.transition !== null
      ? (Vo === 0 && (Vo = jd()), Vo)
      : ((e = z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ud(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < Tr) throw ((Tr = 0), (ss = null), Error(x(185)));
  oo(e, n, r),
    (!(M & 2) || e !== le) &&
      (e === le && (!(M & 2) && (Bi |= n), ne === 4 && Pt(e, ce)),
      Re(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((Qn = Y() + 500), Di && Gt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  Xv(e, t);
  var r = ri(e, e === le ? ce : 0);
  if (r === 0)
    n !== null && pc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && pc(n), t === 1))
      e.tag === 0 ? Gy(lf.bind(null, e)) : ip(lf.bind(null, e)),
        Vy(function () {
          !(M & 6) && Gt();
        }),
        (n = null);
    else {
      switch ($d(r)) {
        case 1:
          n = zs;
          break;
        case 4:
          n = Ld;
          break;
        case 16:
          n = ni;
          break;
        case 536870912:
          n = Ad;
          break;
        default:
          n = ni;
      }
      n = oh(n, Yp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yp(e, t) {
  if (((Ho = -1), (Vo = 0), M & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (Dn() && e.callbackNode !== n) return null;
  var r = ri(e, e === le ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ei(e, r);
  else {
    t = r;
    var o = M;
    M |= 2;
    var i = bp();
    (le !== e || ce !== t) && ((ut = null), (Qn = Y() + 500), un(e, t));
    do
      try {
        m0();
        break;
      } catch (u) {
        Zp(e, u);
      }
    while (1);
    Ys(),
      (gi.current = i),
      (M = o),
      Z !== null ? (t = 0) : ((le = null), (ce = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Iu(e)), o !== 0 && ((r = o), (t = as(e, o)))), t === 1)
    )
      throw ((n = Xr), un(e, 0), Pt(e, r), Re(e, Y()), n);
    if (t === 6) Pt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !p0(o) &&
          ((t = Ei(e, r)),
          t === 2 && ((i = Iu(e)), i !== 0 && ((r = i), (t = as(e, i)))),
          t === 1))
      )
        throw ((n = Xr), un(e, 0), Pt(e, r), Re(e, Y()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          en(e, xe, ut);
          break;
        case 3:
          if (
            (Pt(e, r), (r & 130023424) === r && ((t = da + 500 - Y()), 10 < t))
          ) {
            if (ri(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Hu(en.bind(null, e, xe, ut), t);
            break;
          }
          en(e, xe, ut);
          break;
        case 4:
          if ((Pt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Xe(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * d0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hu(en.bind(null, e, xe, ut), r);
            break;
          }
          en(e, xe, ut);
          break;
        case 5:
          en(e, xe, ut);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Re(e, Y()), e.callbackNode === n ? Yp.bind(null, e) : null;
}
function as(e, t) {
  var n = _r;
  return (
    e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
    (e = Ei(e, t)),
    e !== 2 && ((t = xe), (xe = n), t !== null && cs(t)),
    e
  );
}
function cs(e) {
  xe === null ? (xe = e) : xe.push.apply(xe, e);
}
function p0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ye(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Pt(e, t) {
  for (
    t &= ~fa,
      t &= ~Bi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function lf(e) {
  if (M & 6) throw Error(x(327));
  Dn();
  var t = ri(e, 0);
  if (!(t & 1)) return Re(e, Y()), null;
  var n = Ei(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Iu(e);
    r !== 0 && ((t = r), (n = as(e, r)));
  }
  if (n === 1) throw ((n = Xr), un(e, 0), Pt(e, t), Re(e, Y()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    en(e, xe, ut),
    Re(e, Y()),
    null
  );
}
function pa(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((Qn = Y() + 500), Di && Gt());
  }
}
function hn(e) {
  Nt !== null && Nt.tag === 0 && !(M & 6) && Dn();
  var t = M;
  M |= 1;
  var n = Fe.transition,
    r = z;
  try {
    if (((Fe.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (Fe.transition = n), (M = t), !(M & 6) && Gt();
  }
}
function ha() {
  (Ne = Ln.current), H(Ln);
}
function un(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hy(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((Gs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && si();
          break;
        case 3:
          Kn(), H(ke), H(ve), ra();
          break;
        case 5:
          na(r);
          break;
        case 4:
          Kn();
          break;
        case 13:
          H(q);
          break;
        case 19:
          H(q);
          break;
        case 10:
          Zs(r.type._context);
          break;
        case 22:
        case 23:
          ha();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (Z = e = Dt(e.current, null)),
    (ce = Ne = t),
    (ne = 0),
    (Xr = null),
    (fa = Bi = pn = 0),
    (xe = _r = null),
    on !== null)
  ) {
    for (t = 0; t < on.length; t++)
      if (((n = on[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    on = null;
  }
  return e;
}
function Zp(e, t) {
  do {
    var n = Z;
    try {
      if ((Ys(), (Uo.current = yi), vi)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        vi = !1;
      }
      if (
        ((dn = 0),
        (ie = te = Q = null),
        (Or = !1),
        (qr = 0),
        (ca.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Xr = t), (Z = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          u = n,
          s = t;
        if (
          ((t = ce),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s,
            c = u,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = qc(l);
          if (g !== null) {
            (g.flags &= -257),
              Qc(g, l, u, i, t),
              g.mode & 1 && Kc(i, a, t),
              (t = g),
              (s = a);
            var m = t.updateQueue;
            if (m === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else m.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Kc(i, a, t), ma();
              break e;
            }
            s = Error(x(426));
          }
        } else if (K && u.mode & 1) {
          var E = qc(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Qc(E, l, u, i, t),
              Xs(qn(s, u));
            break e;
          }
        }
        (i = s = qn(s, u)),
          ne !== 4 && (ne = 2),
          _r === null ? (_r = [i]) : _r.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = Ip(i, s, t);
              zc(i, p);
              break e;
            case 1:
              u = s;
              var d = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (It === null || !It.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = Mp(i, u, t);
                zc(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      th(n);
    } catch (C) {
      (t = C), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function bp() {
  var e = gi.current;
  return (gi.current = yi), e === null ? yi : e;
}
function ma() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    le === null || (!(pn & 268435455) && !(Bi & 268435455)) || Pt(le, ce);
}
function Ei(e, t) {
  var n = M;
  M |= 2;
  var r = bp();
  (le !== e || ce !== t) && ((ut = null), un(e, t));
  do
    try {
      h0();
      break;
    } catch (o) {
      Zp(e, o);
    }
  while (1);
  if ((Ys(), (M = n), (gi.current = r), Z !== null)) throw Error(x(261));
  return (le = null), (ce = 0), ne;
}
function h0() {
  for (; Z !== null; ) eh(Z);
}
function m0() {
  for (; Z !== null && !Uv(); ) eh(Z);
}
function eh(e) {
  var t = rh(e.alternate, e, Ne);
  (e.memoizedProps = e.pendingProps),
    t === null ? th(e) : (Z = t),
    (ca.current = null);
}
function th(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = s0(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (Z = null);
        return;
      }
    } else if (((n = u0(n, t, Ne)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function en(e, t, n) {
  var r = z,
    o = Fe.transition;
  try {
    (Fe.transition = null), (z = 1), v0(e, t, n, r);
  } finally {
    (Fe.transition = o), (z = r);
  }
  return null;
}
function v0(e, t, n, r) {
  do Dn();
  while (Nt !== null);
  if (M & 6) throw Error(x(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Jv(e, i),
    e === le && ((Z = le = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ao ||
      ((Ao = !0),
      oh(ni, function () {
        return Dn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Fe.transition), (Fe.transition = null);
    var l = z;
    z = 1;
    var u = M;
    (M |= 4),
      (ca.current = null),
      c0(e, n),
      Xp(n, e),
      My(Bu),
      (oi = !!Uu),
      (Bu = Uu = null),
      (e.current = n),
      f0(n),
      Bv(),
      (M = u),
      (z = l),
      (Fe.transition = i);
  } else e.current = n;
  if (
    (Ao && ((Ao = !1), (Nt = e), (Si = o)),
    (i = e.pendingLanes),
    i === 0 && (It = null),
    Vv(n.stateNode),
    Re(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (wi) throw ((wi = !1), (e = us), (us = null), e);
  return (
    Si & 1 && e.tag !== 0 && Dn(),
    (i = e.pendingLanes),
    i & 1 ? (e === ss ? Tr++ : ((Tr = 0), (ss = e))) : (Tr = 0),
    Gt(),
    null
  );
}
function Dn() {
  if (Nt !== null) {
    var e = $d(Si),
      t = Fe.transition,
      n = z;
    try {
      if (((Fe.transition = null), (z = 16 > e ? 16 : e), Nt === null))
        var r = !1;
      else {
        if (((e = Nt), (Nt = null), (Si = 0), M & 6)) throw Error(x(331));
        var o = M;
        for (M |= 4, N = e.current; N !== null; ) {
          var i = N,
            l = i.child;
          if (N.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (N = a; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nr(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (N = f);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var h = c.sibling,
                        g = c.return;
                      if ((qp(c), c === a)) {
                        N = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (N = h);
                        break;
                      }
                      N = g;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var y = m.child;
                if (y !== null) {
                  m.child = null;
                  do {
                    var E = y.sibling;
                    (y.sibling = null), (y = E);
                  } while (y !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (N = l);
          else
            e: for (; N !== null; ) {
              if (((i = N), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Nr(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (N = p);
                break e;
              }
              N = i.return;
            }
        }
        var d = e.current;
        for (N = d; N !== null; ) {
          l = N;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (N = v);
          else
            e: for (l = d; N !== null; ) {
              if (((u = N), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ui(9, u);
                  }
                } catch (C) {
                  X(u, u.return, C);
                }
              if (u === l) {
                N = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (N = w);
                break e;
              }
              N = u.return;
            }
        }
        if (
          ((M = o), Gt(), rt && typeof rt.onPostCommitFiberRoot == 'function')
        )
          try {
            rt.onPostCommitFiberRoot(Ai, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (Fe.transition = t);
    }
  }
  return !1;
}
function uf(e, t, n) {
  (t = qn(n, t)),
    (t = Ip(e, t, 1)),
    (e = $t(e, t, 1)),
    (t = we()),
    e !== null && (oo(e, 1, t), Re(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) uf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        uf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (It === null || !It.has(r)))
        ) {
          (e = qn(n, e)),
            (e = Mp(t, e, 1)),
            (t = $t(t, e, 1)),
            (e = we()),
            t !== null && (oo(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function y0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ce & n) === n &&
      (ne === 4 || (ne === 3 && (ce & 130023424) === ce && 500 > Y() - da)
        ? un(e, 0)
        : (fa |= n)),
    Re(e, t);
}
function nh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xo), (xo <<= 1), !(xo & 130023424) && (xo = 4194304))
      : (t = 1));
  var n = we();
  (e = vt(e, t)), e !== null && (oo(e, t, n), Re(e, n));
}
function g0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), nh(e, n);
}
function w0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), nh(e, n);
}
var rh;
rh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ke.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), l0(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), K && t.flags & 1048576 && lp(t, fi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wo(e, t), (e = t.pendingProps);
      var o = Wn(t, ve.current);
      Mn(t, n), (o = ia(null, t, r, e, o, n));
      var i = la();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Pe(r) ? ((i = !0), ai(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ea(t),
            (o.updater = zi),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ju(t, r, e, n),
            (t = bu(null, t, r, !0, i, n)))
          : ((t.tag = 0), K && i && Qs(t), ye(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = E0(r)),
          (e = Ke(r, e)),
          o)
        ) {
          case 0:
            t = Zu(null, t, r, e, n);
            break e;
          case 1:
            t = Jc(null, t, r, e, n);
            break e;
          case 11:
            t = Gc(null, t, r, e, n);
            break e;
          case 14:
            t = Xc(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        Zu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        Jc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Up(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          cp(e, t),
          hi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = qn(Error(x(423)), t)), (t = Yc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = qn(Error(x(424)), t)), (t = Yc(e, t, r, n, o));
            break e;
          } else
            for (
              _e = jt(t.stateNode.containerInfo.firstChild),
                Te = t,
                K = !0,
                Qe = null,
                n = hp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hn(), r === o)) {
            t = yt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        mp(t),
        e === null && Qu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Wu(r, o) ? (l = null) : i !== null && Wu(r, i) && (t.flags |= 32),
        Fp(e, t),
        ye(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Qu(t), null;
    case 13:
      return Bp(e, t, n);
    case 4:
      return (
        ta(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        Gc(e, t, r, o, n)
      );
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          B(di, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Ye(i.value, l)) {
            if (i.children === o.children && !ke.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                l = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = dt(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Gu(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(x(341));
                (l.lanes |= n),
                  (u = l.alternate),
                  u !== null && (u.lanes |= n),
                  Gu(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ye(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Mn(t, n),
        (o = Be(o)),
        (r = r(o)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ke(r, t.pendingProps)),
        (o = Ke(r.type, o)),
        Xc(e, t, r, o, n)
      );
    case 15:
      return Dp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        Wo(e, t),
        (t.tag = 1),
        Pe(r) ? ((e = !0), ai(t)) : (e = !1),
        Mn(t, n),
        dp(t, r, o),
        Ju(t, r, o, n),
        bu(null, t, r, !0, e, n)
      );
    case 19:
      return Wp(e, t, n);
    case 22:
      return zp(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function oh(e, t) {
  return Td(e, t);
}
function S0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, n, r) {
  return new S0(e, t, n, r);
}
function va(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function E0(e) {
  if (typeof e == 'function') return va(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Is)) return 11;
    if (e === Ms) return 14;
  }
  return 2;
}
function Dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ko(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) va(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case En:
        return sn(n.children, o, i, t);
      case $s:
        (l = 8), (o |= 8);
        break;
      case Su:
        return (
          (e = ze(12, n, t, o | 2)), (e.elementType = Su), (e.lanes = i), e
        );
      case Eu:
        return (e = ze(13, n, t, o)), (e.elementType = Eu), (e.lanes = i), e;
      case xu:
        return (e = ze(19, n, t, o)), (e.elementType = xu), (e.lanes = i), e;
      case pd:
        return Wi(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case fd:
              l = 10;
              break e;
            case dd:
              l = 9;
              break e;
            case Is:
              l = 11;
              break e;
            case Ms:
              l = 14;
              break e;
            case xt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = ze(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function sn(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function Wi(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = pd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function tu(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function nu(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function x0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ml(0)),
    (this.expirationTimes = Ml(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ml(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ya(e, t, n, r, o, i, l, u, s) {
  return (
    (e = new x0(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ze(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ea(i),
    e
  );
}
function C0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Sn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ih(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pe(n)) return op(e, n, t);
  }
  return t;
}
function lh(e, t, n, r, o, i, l, u, s) {
  return (
    (e = ya(n, r, !0, e, o, i, l, u, s)),
    (e.context = ih(null)),
    (n = e.current),
    (r = we()),
    (o = Mt(n)),
    (i = dt(r, o)),
    (i.callback = t ?? null),
    $t(n, i, o),
    (e.current.lanes = o),
    oo(e, o, r),
    Re(e, r),
    e
  );
}
function Hi(e, t, n, r) {
  var o = t.current,
    i = we(),
    l = Mt(o);
  return (
    (n = ih(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $t(o, t, l)),
    e !== null && (Je(e, o, l, i), Fo(e, o, l)),
    l
  );
}
function xi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function sf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ga(e, t) {
  sf(e, t), (e = e.alternate) && sf(e, t);
}
function k0() {
  return null;
}
var uh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function wa(e) {
  this._internalRoot = e;
}
Vi.prototype.render = wa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Hi(e, t, null, null);
};
Vi.prototype.unmount = wa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function () {
      Hi(null, e, null, null);
    }),
      (t[mt] = null);
  }
};
function Vi(e) {
  this._internalRoot = e;
}
Vi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Dd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++);
    kt.splice(n, 0, e), n === 0 && Fd(e);
  }
};
function Sa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ki(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function af() {}
function P0(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = xi(l);
        i.call(a);
      };
    }
    var l = lh(t, r, e, 0, null, !1, !1, '', af);
    return (
      (e._reactRootContainer = l),
      (e[mt] = l.current),
      Br(e.nodeType === 8 ? e.parentNode : e),
      hn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = xi(s);
      u.call(a);
    };
  }
  var s = ya(e, 0, !1, null, null, !1, !1, '', af);
  return (
    (e._reactRootContainer = s),
    (e[mt] = s.current),
    Br(e.nodeType === 8 ? e.parentNode : e),
    hn(function () {
      Hi(t, s, n, r);
    }),
    s
  );
}
function qi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var u = o;
      o = function () {
        var s = xi(l);
        u.call(s);
      };
    }
    Hi(t, l, e, o);
  } else l = P0(n, t, e, o, r);
  return xi(l);
}
Id = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = gr(t.pendingLanes);
        n !== 0 &&
          (Fs(t, n | 1), Re(t, Y()), !(M & 6) && ((Qn = Y() + 500), Gt()));
      }
      break;
    case 13:
      hn(function () {
        var r = vt(e, 1);
        if (r !== null) {
          var o = we();
          Je(r, e, 1, o);
        }
      }),
        ga(e, 1);
  }
};
Us = function (e) {
  if (e.tag === 13) {
    var t = vt(e, 134217728);
    if (t !== null) {
      var n = we();
      Je(t, e, 134217728, n);
    }
    ga(e, 134217728);
  }
};
Md = function (e) {
  if (e.tag === 13) {
    var t = Mt(e),
      n = vt(e, t);
    if (n !== null) {
      var r = we();
      Je(n, e, t, r);
    }
    ga(e, t);
  }
};
Dd = function () {
  return z;
};
zd = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
Au = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Pu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Mi(r);
            if (!o) throw Error(x(90));
            md(r), Pu(r, o);
          }
        }
      }
      break;
    case 'textarea':
      yd(e, n);
      break;
    case 'select':
      (t = n.value), t != null && An(e, !!n.multiple, t, !1);
  }
};
kd = pa;
Pd = hn;
var R0 = { usingClientEntryPoint: !1, Events: [lo, Pn, Mi, xd, Cd, pa] },
  hr = {
    findFiberByHostInstance: rn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  O0 = {
    bundleType: hr.bundleType,
    version: hr.version,
    rendererPackageName: hr.rendererPackageName,
    rendererConfig: hr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Nd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: hr.findFiberByHostInstance || k0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jo.isDisabled && jo.supportsFiber)
    try {
      (Ai = jo.inject(O0)), (rt = jo);
    } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R0;
je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Sa(t)) throw Error(x(200));
  return C0(e, t, null, n);
};
je.createRoot = function (e, t) {
  if (!Sa(e)) throw Error(x(299));
  var n = !1,
    r = '',
    o = uh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ya(e, 1, !1, null, null, n, !1, r, o)),
    (e[mt] = t.current),
    Br(e.nodeType === 8 ? e.parentNode : e),
    new wa(t)
  );
};
je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(x(188))
      : ((e = Object.keys(e).join(',')), Error(x(268, e)));
  return (e = Nd(t)), (e = e === null ? null : e.stateNode), e;
};
je.flushSync = function (e) {
  return hn(e);
};
je.hydrate = function (e, t, n) {
  if (!Ki(t)) throw Error(x(200));
  return qi(null, e, t, !0, n);
};
je.hydrateRoot = function (e, t, n) {
  if (!Sa(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = uh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = lh(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[mt] = t.current),
    Br(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Vi(t);
};
je.render = function (e, t, n) {
  if (!Ki(t)) throw Error(x(200));
  return qi(null, e, t, !1, n);
};
je.unmountComponentAtNode = function (e) {
  if (!Ki(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (hn(function () {
        qi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mt] = null);
        });
      }),
      !0)
    : !1;
};
je.unstable_batchedUpdates = pa;
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ki(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return qi(e, t, n, !1, r);
};
je.version = '18.2.0-next-9e3b772b8-20220608';
function sh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sh);
    } catch (e) {
      console.error(e);
    }
}
sh(), (ld.exports = je);
var ah = ld.exports,
  cf = ah;
(gu.createRoot = cf.createRoot), (gu.hydrateRoot = cf.hydrateRoot);
var ch = { exports: {} },
  fh = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gn = k;
function N0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _0 = typeof Object.is == 'function' ? Object.is : N0,
  T0 = Gn.useState,
  L0 = Gn.useEffect,
  A0 = Gn.useLayoutEffect,
  j0 = Gn.useDebugValue;
function $0(e, t) {
  var n = t(),
    r = T0({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    A0(
      function () {
        (o.value = n), (o.getSnapshot = t), ru(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    L0(
      function () {
        return (
          ru(o) && i({ inst: o }),
          e(function () {
            ru(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    j0(n),
    n
  );
}
function ru(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_0(e, n);
  } catch {
    return !0;
  }
}
function I0(e, t) {
  return t();
}
var M0 =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? I0
    : $0;
fh.useSyncExternalStore =
  Gn.useSyncExternalStore !== void 0 ? Gn.useSyncExternalStore : M0;
ch.exports = fh;
var D0 = ch.exports,
  dh = { exports: {} },
  ph = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qi = k,
  z0 = D0;
function F0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var U0 = typeof Object.is == 'function' ? Object.is : F0,
  B0 = z0.useSyncExternalStore,
  W0 = Qi.useRef,
  H0 = Qi.useEffect,
  V0 = Qi.useMemo,
  K0 = Qi.useDebugValue;
ph.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = W0(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else l = i.current;
  i = V0(
    function () {
      function s(g) {
        if (!a) {
          if (((a = !0), (c = g), (g = r(g)), o !== void 0 && l.hasValue)) {
            var m = l.value;
            if (o(m, g)) return (f = m);
          }
          return (f = g);
        }
        if (((m = f), U0(c, g))) return m;
        var y = r(g);
        return o !== void 0 && o(m, y) ? m : ((c = g), (f = y));
      }
      var a = !1,
        c,
        f,
        h = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        h === null
          ? void 0
          : function () {
              return s(h());
            },
      ];
    },
    [t, n, r, o]
  );
  var u = B0(e, i[0], i[1]);
  return (
    H0(
      function () {
        (l.hasValue = !0), (l.value = u);
      },
      [u]
    ),
    K0(u),
    u
  );
};
dh.exports = ph;
var q0 = dh.exports;
function Q0(e) {
  e();
}
let hh = Q0;
const G0 = (e) => (hh = e),
  X0 = () => hh,
  Vt = k.createContext(null);
function mh() {
  return k.useContext(Vt);
}
const J0 = () => {
  throw new Error('uSES not initialized!');
};
let vh = J0;
const Y0 = (e) => {
    vh = e;
  },
  Z0 = (e, t) => e === t;
function b0(e = Vt) {
  const t = e === Vt ? mh : () => k.useContext(e);
  return function (r, o = Z0) {
    const { store: i, subscription: l, getServerState: u } = t(),
      s = vh(l.addNestedSub, i.getState, u || i.getState, r, o);
    return k.useDebugValue(s), s;
  };
}
const eg = b0();
function Ci() {
  return (
    (Ci = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ci.apply(this, arguments)
  );
}
function tg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var yh = { exports: {} },
  F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ue = typeof Symbol == 'function' && Symbol.for,
  Ea = ue ? Symbol.for('react.element') : 60103,
  xa = ue ? Symbol.for('react.portal') : 60106,
  Gi = ue ? Symbol.for('react.fragment') : 60107,
  Xi = ue ? Symbol.for('react.strict_mode') : 60108,
  Ji = ue ? Symbol.for('react.profiler') : 60114,
  Yi = ue ? Symbol.for('react.provider') : 60109,
  Zi = ue ? Symbol.for('react.context') : 60110,
  Ca = ue ? Symbol.for('react.async_mode') : 60111,
  bi = ue ? Symbol.for('react.concurrent_mode') : 60111,
  el = ue ? Symbol.for('react.forward_ref') : 60112,
  tl = ue ? Symbol.for('react.suspense') : 60113,
  ng = ue ? Symbol.for('react.suspense_list') : 60120,
  nl = ue ? Symbol.for('react.memo') : 60115,
  rl = ue ? Symbol.for('react.lazy') : 60116,
  rg = ue ? Symbol.for('react.block') : 60121,
  og = ue ? Symbol.for('react.fundamental') : 60117,
  ig = ue ? Symbol.for('react.responder') : 60118,
  lg = ue ? Symbol.for('react.scope') : 60119;
function Ie(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ea:
        switch (((e = e.type), e)) {
          case Ca:
          case bi:
          case Gi:
          case Ji:
          case Xi:
          case tl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Zi:
              case el:
              case rl:
              case nl:
              case Yi:
                return e;
              default:
                return t;
            }
        }
      case xa:
        return t;
    }
  }
}
function gh(e) {
  return Ie(e) === bi;
}
F.AsyncMode = Ca;
F.ConcurrentMode = bi;
F.ContextConsumer = Zi;
F.ContextProvider = Yi;
F.Element = Ea;
F.ForwardRef = el;
F.Fragment = Gi;
F.Lazy = rl;
F.Memo = nl;
F.Portal = xa;
F.Profiler = Ji;
F.StrictMode = Xi;
F.Suspense = tl;
F.isAsyncMode = function (e) {
  return gh(e) || Ie(e) === Ca;
};
F.isConcurrentMode = gh;
F.isContextConsumer = function (e) {
  return Ie(e) === Zi;
};
F.isContextProvider = function (e) {
  return Ie(e) === Yi;
};
F.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ea;
};
F.isForwardRef = function (e) {
  return Ie(e) === el;
};
F.isFragment = function (e) {
  return Ie(e) === Gi;
};
F.isLazy = function (e) {
  return Ie(e) === rl;
};
F.isMemo = function (e) {
  return Ie(e) === nl;
};
F.isPortal = function (e) {
  return Ie(e) === xa;
};
F.isProfiler = function (e) {
  return Ie(e) === Ji;
};
F.isStrictMode = function (e) {
  return Ie(e) === Xi;
};
F.isSuspense = function (e) {
  return Ie(e) === tl;
};
F.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Gi ||
    e === bi ||
    e === Ji ||
    e === Xi ||
    e === tl ||
    e === ng ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === rl ||
        e.$$typeof === nl ||
        e.$$typeof === Yi ||
        e.$$typeof === Zi ||
        e.$$typeof === el ||
        e.$$typeof === og ||
        e.$$typeof === ig ||
        e.$$typeof === lg ||
        e.$$typeof === rg))
  );
};
F.typeOf = Ie;
yh.exports = F;
var ug = yh.exports,
  wh = ug,
  sg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  ag = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Sh = {};
Sh[wh.ForwardRef] = sg;
Sh[wh.Memo] = ag;
var U = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ka = Symbol.for('react.element'),
  Pa = Symbol.for('react.portal'),
  ol = Symbol.for('react.fragment'),
  il = Symbol.for('react.strict_mode'),
  ll = Symbol.for('react.profiler'),
  ul = Symbol.for('react.provider'),
  sl = Symbol.for('react.context'),
  cg = Symbol.for('react.server_context'),
  al = Symbol.for('react.forward_ref'),
  cl = Symbol.for('react.suspense'),
  fl = Symbol.for('react.suspense_list'),
  dl = Symbol.for('react.memo'),
  pl = Symbol.for('react.lazy'),
  fg = Symbol.for('react.offscreen'),
  Eh;
Eh = Symbol.for('react.module.reference');
function He(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ka:
        switch (((e = e.type), e)) {
          case ol:
          case ll:
          case il:
          case cl:
          case fl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case cg:
              case sl:
              case al:
              case pl:
              case dl:
              case ul:
                return e;
              default:
                return t;
            }
        }
      case Pa:
        return t;
    }
  }
}
U.ContextConsumer = sl;
U.ContextProvider = ul;
U.Element = ka;
U.ForwardRef = al;
U.Fragment = ol;
U.Lazy = pl;
U.Memo = dl;
U.Portal = Pa;
U.Profiler = ll;
U.StrictMode = il;
U.Suspense = cl;
U.SuspenseList = fl;
U.isAsyncMode = function () {
  return !1;
};
U.isConcurrentMode = function () {
  return !1;
};
U.isContextConsumer = function (e) {
  return He(e) === sl;
};
U.isContextProvider = function (e) {
  return He(e) === ul;
};
U.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ka;
};
U.isForwardRef = function (e) {
  return He(e) === al;
};
U.isFragment = function (e) {
  return He(e) === ol;
};
U.isLazy = function (e) {
  return He(e) === pl;
};
U.isMemo = function (e) {
  return He(e) === dl;
};
U.isPortal = function (e) {
  return He(e) === Pa;
};
U.isProfiler = function (e) {
  return He(e) === ll;
};
U.isStrictMode = function (e) {
  return He(e) === il;
};
U.isSuspense = function (e) {
  return He(e) === cl;
};
U.isSuspenseList = function (e) {
  return He(e) === fl;
};
U.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === ol ||
    e === ll ||
    e === il ||
    e === cl ||
    e === fl ||
    e === fg ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === pl ||
        e.$$typeof === dl ||
        e.$$typeof === ul ||
        e.$$typeof === sl ||
        e.$$typeof === al ||
        e.$$typeof === Eh ||
        e.getModuleId !== void 0))
  );
};
U.typeOf = He;
function dg() {
  const e = X0();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        o = t;
      for (; o; ) r.push(o), (o = o.next);
      return r;
    },
    subscribe(r) {
      let o = !0,
        i = (n = { callback: r, next: null, prev: n });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const ff = { notify() {}, get: () => [] };
function pg(e, t) {
  let n,
    r = ff;
  function o(f) {
    return s(), r.subscribe(f);
  }
  function i() {
    r.notify();
  }
  function l() {
    c.onStateChange && c.onStateChange();
  }
  function u() {
    return !!n;
  }
  function s() {
    n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = dg()));
  }
  function a() {
    n && (n(), (n = void 0), r.clear(), (r = ff));
  }
  const c = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: s,
    tryUnsubscribe: a,
    getListeners: () => r,
  };
  return c;
}
const hg =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  mg = hg ? k.useLayoutEffect : k.useEffect;
function vg({ store: e, context: t, children: n, serverState: r }) {
  const o = k.useMemo(() => {
      const u = pg(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
      };
    }, [e, r]),
    i = k.useMemo(() => e.getState(), [e]);
  mg(() => {
    const { subscription: u } = o;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      i !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [o, i]);
  const l = t || Vt;
  return od.createElement(l.Provider, { value: o }, n);
}
function xh(e = Vt) {
  const t = e === Vt ? mh : () => k.useContext(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const yg = xh();
function gg(e = Vt) {
  const t = e === Vt ? yg : xh(e);
  return function () {
    return t().dispatch;
  };
}
const wg = gg();
Y0(q0.useSyncExternalStoreWithSelector);
G0(ah.unstable_batchedUpdates);
function Ge(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (n.length
        ? ' ' +
          n
            .map(function (o) {
              return "'" + o + "'";
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  );
}
function Kt(e) {
  return !!e && !!e[V];
}
function gt(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var o = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
      return (
        o === Object ||
        (typeof o == 'function' && Function.toString.call(o) === Ng)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[gf] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[gf]) ||
      Ra(e) ||
      Oa(e))
  );
}
function mn(e, t, n) {
  n === void 0 && (n = !1),
    tr(e) === 0
      ? (n ? Object.keys : Fn)(e).forEach(function (r) {
          (n && typeof r == 'symbol') || t(r, e[r], e);
        })
      : e.forEach(function (r, o) {
          return t(o, r, e);
        });
}
function tr(e) {
  var t = e[V];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Ra(e)
    ? 2
    : Oa(e)
    ? 3
    : 0;
}
function zn(e, t) {
  return tr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Sg(e, t) {
  return tr(e) === 2 ? e.get(t) : e[t];
}
function Ch(e, t, n) {
  var r = tr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function kh(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Ra(e) {
  return Rg && e instanceof Map;
}
function Oa(e) {
  return Og && e instanceof Set;
}
function tn(e) {
  return e.o || e.t;
}
function Na(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Rh(e);
  delete t[V];
  for (var n = Fn(t), r = 0; r < n.length; r++) {
    var o = n[r],
      i = t[o];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function _a(e, t) {
  return (
    t === void 0 && (t = !1),
    Ta(e) ||
      Kt(e) ||
      !gt(e) ||
      (tr(e) > 1 && (e.set = e.add = e.clear = e.delete = Eg),
      Object.freeze(e),
      t &&
        mn(
          e,
          function (n, r) {
            return _a(r, !0);
          },
          !0
        )),
    e
  );
}
function Eg() {
  Ge(2);
}
function Ta(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e);
}
function it(e) {
  var t = hs[e];
  return t || Ge(18, e), t;
}
function xg(e, t) {
  hs[e] || (hs[e] = t);
}
function fs() {
  return Jr;
}
function ou(e, t) {
  t && (it('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function ki(e) {
  ds(e), e.p.forEach(Cg), (e.p = null);
}
function ds(e) {
  e === Jr && (Jr = e.l);
}
function df(e) {
  return (Jr = { p: [], l: Jr, h: e, m: !0, _: 0 });
}
function Cg(e) {
  var t = e[V];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function iu(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || it('ES5').S(t, e, r),
    r
      ? (n[V].P && (ki(t), Ge(4)),
        gt(e) && ((e = Pi(t, e)), t.l || Ri(t, e)),
        t.u && it('Patches').M(n[V].t, e, t.u, t.s))
      : (e = Pi(t, n, [])),
    ki(t),
    t.u && t.v(t.u, t.s),
    e !== Ph ? e : void 0
  );
}
function Pi(e, t, n) {
  if (Ta(t)) return t;
  var r = t[V];
  if (!r)
    return (
      mn(
        t,
        function (u, s) {
          return pf(e, r, t, u, s, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return Ri(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var o = r.i === 4 || r.i === 5 ? (r.o = Na(r.k)) : r.o,
      i = o,
      l = !1;
    r.i === 3 && ((i = new Set(o)), o.clear(), (l = !0)),
      mn(i, function (u, s) {
        return pf(e, r, o, u, s, n, l);
      }),
      Ri(e, o, !1),
      n && e.u && it('Patches').N(r, n, e.u, e.s);
  }
  return r.o;
}
function pf(e, t, n, r, o, i, l) {
  if (Kt(o)) {
    var u = Pi(e, o, i && t && t.i !== 3 && !zn(t.R, r) ? i.concat(r) : void 0);
    if ((Ch(n, r, u), !Kt(u))) return;
    e.m = !1;
  } else l && n.add(o);
  if (gt(o) && !Ta(o)) {
    if (!e.h.D && e._ < 1) return;
    Pi(e, o), (t && t.A.l) || Ri(e, o);
  }
}
function Ri(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && _a(t, n);
}
function lu(e, t) {
  var n = e[V];
  return (n ? tn(n) : e)[t];
}
function hf(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Rt(e) {
  e.P || ((e.P = !0), e.l && Rt(e.l));
}
function uu(e) {
  e.o || (e.o = Na(e.t));
}
function ps(e, t, n) {
  var r = Ra(t)
    ? it('MapSet').F(t, n)
    : Oa(t)
    ? it('MapSet').T(t, n)
    : e.O
    ? (function (o, i) {
        var l = Array.isArray(o),
          u = {
            i: l ? 1 : 0,
            A: i ? i.A : fs(),
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          s = u,
          a = Yr;
        l && ((s = [u]), (a = Sr));
        var c = Proxy.revocable(s, a),
          f = c.revoke,
          h = c.proxy;
        return (u.k = h), (u.j = f), h;
      })(t, n)
    : it('ES5').J(t, n);
  return (n ? n.A : fs()).p.push(r), r;
}
function kg(e) {
  return (
    Kt(e) || Ge(22, e),
    (function t(n) {
      if (!gt(n)) return n;
      var r,
        o = n[V],
        i = tr(n);
      if (o) {
        if (!o.P && (o.i < 4 || !it('ES5').K(o))) return o.t;
        (o.I = !0), (r = mf(n, i)), (o.I = !1);
      } else r = mf(n, i);
      return (
        mn(r, function (l, u) {
          (o && Sg(o.t, l) === u) || Ch(r, l, t(u));
        }),
        i === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function mf(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Na(e);
}
function Pg() {
  function e(i, l) {
    var u = o[i];
    return (
      u
        ? (u.enumerable = l)
        : (o[i] = u =
            {
              configurable: !0,
              enumerable: l,
              get: function () {
                var s = this[V];
                return Yr.get(s, i);
              },
              set: function (s) {
                var a = this[V];
                Yr.set(a, i, s);
              },
            }),
      u
    );
  }
  function t(i) {
    for (var l = i.length - 1; l >= 0; l--) {
      var u = i[l][V];
      if (!u.P)
        switch (u.i) {
          case 5:
            r(u) && Rt(u);
            break;
          case 4:
            n(u) && Rt(u);
        }
    }
  }
  function n(i) {
    for (var l = i.t, u = i.k, s = Fn(u), a = s.length - 1; a >= 0; a--) {
      var c = s[a];
      if (c !== V) {
        var f = l[c];
        if (f === void 0 && !zn(l, c)) return !0;
        var h = u[c],
          g = h && h[V];
        if (g ? g.t !== f : !kh(h, f)) return !0;
      }
    }
    var m = !!l[V];
    return s.length !== Fn(l).length + (m ? 0 : 1);
  }
  function r(i) {
    var l = i.k;
    if (l.length !== i.t.length) return !0;
    var u = Object.getOwnPropertyDescriptor(l, l.length - 1);
    if (u && !u.get) return !0;
    for (var s = 0; s < l.length; s++) if (!l.hasOwnProperty(s)) return !0;
    return !1;
  }
  var o = {};
  xg('ES5', {
    J: function (i, l) {
      var u = Array.isArray(i),
        s = (function (c, f) {
          if (c) {
            for (var h = Array(f.length), g = 0; g < f.length; g++)
              Object.defineProperty(h, '' + g, e(g, !0));
            return h;
          }
          var m = Rh(f);
          delete m[V];
          for (var y = Fn(m), E = 0; E < y.length; E++) {
            var p = y[E];
            m[p] = e(p, c || !!m[p].enumerable);
          }
          return Object.create(Object.getPrototypeOf(f), m);
        })(u, i),
        a = {
          i: u ? 5 : 4,
          A: l ? l.A : fs(),
          P: !1,
          I: !1,
          R: {},
          l,
          t: i,
          k: s,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(s, V, { value: a, writable: !0 }), s;
    },
    S: function (i, l, u) {
      u
        ? Kt(l) && l[V].A === i && t(i.p)
        : (i.u &&
            (function s(a) {
              if (a && typeof a == 'object') {
                var c = a[V];
                if (c) {
                  var f = c.t,
                    h = c.k,
                    g = c.R,
                    m = c.i;
                  if (m === 4)
                    mn(h, function (v) {
                      v !== V &&
                        (f[v] !== void 0 || zn(f, v)
                          ? g[v] || s(h[v])
                          : ((g[v] = !0), Rt(c)));
                    }),
                      mn(f, function (v) {
                        h[v] !== void 0 || zn(h, v) || ((g[v] = !1), Rt(c));
                      });
                  else if (m === 5) {
                    if ((r(c) && (Rt(c), (g.length = !0)), h.length < f.length))
                      for (var y = h.length; y < f.length; y++) g[y] = !1;
                    else for (var E = f.length; E < h.length; E++) g[E] = !0;
                    for (
                      var p = Math.min(h.length, f.length), d = 0;
                      d < p;
                      d++
                    )
                      h.hasOwnProperty(d) || (g[d] = !0),
                        g[d] === void 0 && s(h[d]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i);
    },
  });
}
var vf,
  Jr,
  La = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  Rg = typeof Map < 'u',
  Og = typeof Set < 'u',
  yf = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  Ph = La
    ? Symbol.for('immer-nothing')
    : (((vf = {})['immer-nothing'] = !0), vf),
  gf = La ? Symbol.for('immer-draftable') : '__$immer_draftable',
  V = La ? Symbol.for('immer-state') : '__$immer_state',
  Ng = '' + Object.prototype.constructor,
  Fn =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  Rh =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Fn(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  hs = {},
  Yr = {
    get: function (e, t) {
      if (t === V) return e;
      var n = tn(e);
      if (!zn(n, t))
        return (function (o, i, l) {
          var u,
            s = hf(i, l);
          return s
            ? 'value' in s
              ? s.value
              : (u = s.get) === null || u === void 0
              ? void 0
              : u.call(o.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !gt(r)
        ? r
        : r === lu(e.t, t)
        ? (uu(e), (e.o[t] = ps(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in tn(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(tn(e));
    },
    set: function (e, t, n) {
      var r = hf(tn(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var o = lu(tn(e), t),
          i = o == null ? void 0 : o[V];
        if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (kh(n, o) && (n !== void 0 || zn(e.t, t))) return !0;
        uu(e), Rt(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        lu(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), uu(e), Rt(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = tn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Ge(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Ge(12);
    },
  },
  Sr = {};
mn(Yr, function (e, t) {
  Sr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Sr.deleteProperty = function (e, t) {
    return Sr.set.call(this, e, t, void 0);
  }),
  (Sr.set = function (e, t, n) {
    return Yr.set.call(this, e[0], t, n, e[0]);
  });
var _g = (function () {
    function e(n) {
      var r = this;
      (this.O = yf),
        (this.D = !0),
        (this.produce = function (o, i, l) {
          if (typeof o == 'function' && typeof i != 'function') {
            var u = i;
            i = o;
            var s = r;
            return function (y) {
              var E = this;
              y === void 0 && (y = u);
              for (
                var p = arguments.length, d = Array(p > 1 ? p - 1 : 0), v = 1;
                v < p;
                v++
              )
                d[v - 1] = arguments[v];
              return s.produce(y, function (w) {
                var C;
                return (C = i).call.apply(C, [E, w].concat(d));
              });
            };
          }
          var a;
          if (
            (typeof i != 'function' && Ge(6),
            l !== void 0 && typeof l != 'function' && Ge(7),
            gt(o))
          ) {
            var c = df(r),
              f = ps(r, o, void 0),
              h = !0;
            try {
              (a = i(f)), (h = !1);
            } finally {
              h ? ki(c) : ds(c);
            }
            return typeof Promise < 'u' && a instanceof Promise
              ? a.then(
                  function (y) {
                    return ou(c, l), iu(y, c);
                  },
                  function (y) {
                    throw (ki(c), y);
                  }
                )
              : (ou(c, l), iu(a, c));
          }
          if (!o || typeof o != 'object') {
            if (
              ((a = i(o)) === void 0 && (a = o),
              a === Ph && (a = void 0),
              r.D && _a(a, !0),
              l)
            ) {
              var g = [],
                m = [];
              it('Patches').M(o, a, g, m), l(g, m);
            }
            return a;
          }
          Ge(21, o);
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == 'function')
            return function (a) {
              for (
                var c = arguments.length, f = Array(c > 1 ? c - 1 : 0), h = 1;
                h < c;
                h++
              )
                f[h - 1] = arguments[h];
              return r.produceWithPatches(a, function (g) {
                return o.apply(void 0, [g].concat(f));
              });
            };
          var l,
            u,
            s = r.produce(o, i, function (a, c) {
              (l = a), (u = c);
            });
          return typeof Promise < 'u' && s instanceof Promise
            ? s.then(function (a) {
                return [a, l, u];
              })
            : [s, l, u];
        }),
        typeof (n == null ? void 0 : n.useProxies) == 'boolean' &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        gt(n) || Ge(8), Kt(n) && (n = kg(n));
        var r = df(this),
          o = ps(this, n, void 0);
        return (o[V].C = !0), ds(r), o;
      }),
      (t.finishDraft = function (n, r) {
        var o = n && n[V],
          i = o.A;
        return ou(i, r), iu(void 0, i);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !yf && Ge(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var o;
        for (o = r.length - 1; o >= 0; o--) {
          var i = r[o];
          if (i.path.length === 0 && i.op === 'replace') {
            n = i.value;
            break;
          }
        }
        o > -1 && (r = r.slice(o + 1));
        var l = it('Patches').$;
        return Kt(n)
          ? l(n, r)
          : this.produce(n, function (u) {
              return l(u, r);
            });
      }),
      e
    );
  })(),
  Ae = new _g(),
  Oh = Ae.produce;
Ae.produceWithPatches.bind(Ae);
Ae.setAutoFreeze.bind(Ae);
Ae.setUseProxies.bind(Ae);
Ae.applyPatches.bind(Ae);
Ae.createDraft.bind(Ae);
Ae.finishDraft.bind(Ae);
function Zr(e) {
  '@babel/helpers - typeof';
  return (
    (Zr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Zr(e)
  );
}
function Tg(e, t) {
  if (Zr(e) !== 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (Zr(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Lg(e) {
  var t = Tg(e, 'string');
  return Zr(t) === 'symbol' ? t : String(t);
}
function Ag(e, t, n) {
  return (
    (t = Lg(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function wf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Sf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wf(Object(n), !0).forEach(function (r) {
          Ag(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : wf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function he(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var Ef = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  su = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  Oi = {
    INIT: '@@redux/INIT' + su(),
    REPLACE: '@@redux/REPLACE' + su(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + su();
    },
  };
function jg(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Nh(e, t, n) {
  var r;
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(he(0));
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(he(1));
    return n(Nh)(e, t);
  }
  if (typeof e != 'function') throw new Error(he(2));
  var o = e,
    i = t,
    l = [],
    u = l,
    s = !1;
  function a() {
    u === l && (u = l.slice());
  }
  function c() {
    if (s) throw new Error(he(3));
    return i;
  }
  function f(y) {
    if (typeof y != 'function') throw new Error(he(4));
    if (s) throw new Error(he(5));
    var E = !0;
    return (
      a(),
      u.push(y),
      function () {
        if (E) {
          if (s) throw new Error(he(6));
          (E = !1), a();
          var d = u.indexOf(y);
          u.splice(d, 1), (l = null);
        }
      }
    );
  }
  function h(y) {
    if (!jg(y)) throw new Error(he(7));
    if (typeof y.type > 'u') throw new Error(he(8));
    if (s) throw new Error(he(9));
    try {
      (s = !0), (i = o(i, y));
    } finally {
      s = !1;
    }
    for (var E = (l = u), p = 0; p < E.length; p++) {
      var d = E[p];
      d();
    }
    return y;
  }
  function g(y) {
    if (typeof y != 'function') throw new Error(he(10));
    (o = y), h({ type: Oi.REPLACE });
  }
  function m() {
    var y,
      E = f;
    return (
      (y = {
        subscribe: function (d) {
          if (typeof d != 'object' || d === null) throw new Error(he(11));
          function v() {
            d.next && d.next(c());
          }
          v();
          var w = E(v);
          return { unsubscribe: w };
        },
      }),
      (y[Ef] = function () {
        return this;
      }),
      y
    );
  }
  return (
    h({ type: Oi.INIT }),
    (r = { dispatch: h, subscribe: f, getState: c, replaceReducer: g }),
    (r[Ef] = m),
    r
  );
}
function $g(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Oi.INIT });
    if (typeof r > 'u') throw new Error(he(12));
    if (typeof n(void 0, { type: Oi.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(he(13));
  });
}
function Ig(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == 'function' && (n[o] = e[o]);
  }
  var i = Object.keys(n),
    l;
  try {
    $g(n);
  } catch (u) {
    l = u;
  }
  return function (s, a) {
    if ((s === void 0 && (s = {}), l)) throw l;
    for (var c = !1, f = {}, h = 0; h < i.length; h++) {
      var g = i[h],
        m = n[g],
        y = s[g],
        E = m(y, a);
      if (typeof E > 'u') throw (a && a.type, new Error(he(14)));
      (f[g] = E), (c = c || E !== y);
    }
    return (c = c || i.length !== Object.keys(s).length), c ? f : s;
  };
}
function br() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments));
        };
      });
}
function Mg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(he(15));
        },
        l = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        u = t.map(function (s) {
          return s(l);
        });
      return (
        (i = br.apply(void 0, u)(o.dispatch)),
        Sf(Sf({}, o), {}, { dispatch: i })
      );
    };
  };
}
function _h(e) {
  var t = function (r) {
    var o = r.dispatch,
      i = r.getState;
    return function (l) {
      return function (u) {
        return typeof u == 'function' ? u(o, i, e) : l(u);
      };
    };
  };
  return t;
}
var Th = _h();
Th.withExtraArgument = _h;
const xf = Th;
var Lh =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o;
              }) ||
            function (r, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  Dg =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        l;
      return (
        (l = { next: u(0), throw: u(1), return: u(2) }),
        typeof Symbol == 'function' &&
          (l[Symbol.iterator] = function () {
            return this;
          }),
        l
      );
      function u(a) {
        return function (c) {
          return s([a, c]);
        };
      }
      function s(a) {
        if (r) throw new TypeError('Generator is already executing.');
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  a[0] & 2
                    ? o.return
                    : a[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, a[1])).done)
            )
              return i;
            switch (((o = 0), i && (a = [a[0] & 2, i.value]), a[0])) {
              case 0:
              case 1:
                i = a;
                break;
              case 4:
                return n.label++, { value: a[1], done: !1 };
              case 5:
                n.label++, (o = a[1]), (a = [0]);
                continue;
              case 7:
                (a = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (a[0] === 6 || a[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (a[0] === 3 && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                  n.label = a[1];
                  break;
                }
                if (a[0] === 6 && n.label < i[1]) {
                  (n.label = i[1]), (i = a);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(a);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            a = t.call(e, n);
          } catch (c) {
            (a = [6, c]), (o = 0);
          } finally {
            r = i = 0;
          }
        if (a[0] & 5) throw a[1];
        return { value: a[0] ? a[1] : void 0, done: !0 };
      }
    },
  Xn =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  zg = Object.defineProperty,
  Fg = Object.defineProperties,
  Ug = Object.getOwnPropertyDescriptors,
  Cf = Object.getOwnPropertySymbols,
  Bg = Object.prototype.hasOwnProperty,
  Wg = Object.prototype.propertyIsEnumerable,
  kf = function (e, t, n) {
    return t in e
      ? zg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  zt = function (e, t) {
    for (var n in t || (t = {})) Bg.call(t, n) && kf(e, n, t[n]);
    if (Cf)
      for (var r = 0, o = Cf(t); r < o.length; r++) {
        var n = o[r];
        Wg.call(t, n) && kf(e, n, t[n]);
      }
    return e;
  },
  au = function (e, t) {
    return Fg(e, Ug(t));
  },
  Hg = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (s) {
          try {
            u(n.next(s));
          } catch (a) {
            o(a);
          }
        },
        l = function (s) {
          try {
            u(n.throw(s));
          } catch (a) {
            o(a);
          }
        },
        u = function (s) {
          return s.done ? r(s.value) : Promise.resolve(s.value).then(i, l);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  Vg =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? br
              : br.apply(null, arguments);
        };
function Kg(e) {
  if (typeof e != 'object' || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var qg = (function (e) {
    Lh(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var o = e.apply(this, n) || this;
      return Object.setPrototypeOf(o, t.prototype), o;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Xn([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Xn([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  Qg = (function (e) {
    Lh(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var o = e.apply(this, n) || this;
      return Object.setPrototypeOf(o, t.prototype), o;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Xn([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Xn([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function ms(e) {
  return gt(e) ? Oh(e, function () {}) : e;
}
function Gg(e) {
  return typeof e == 'boolean';
}
function Xg() {
  return function (t) {
    return Jg(t);
  };
}
function Jg(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new qg();
  return (
    n && (Gg(n) ? r.push(xf) : r.push(xf.withExtraArgument(n.extraArgument))), r
  );
}
var Yg = !0;
function Zg(e) {
  var t = Xg(),
    n = e || {},
    r = n.reducer,
    o = r === void 0 ? void 0 : r,
    i = n.middleware,
    l = i === void 0 ? t() : i,
    u = n.devTools,
    s = u === void 0 ? !0 : u,
    a = n.preloadedState,
    c = a === void 0 ? void 0 : a,
    f = n.enhancers,
    h = f === void 0 ? void 0 : f,
    g;
  if (typeof o == 'function') g = o;
  else if (Kg(o)) g = Ig(o);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var m = l;
  typeof m == 'function' && (m = m(t));
  var y = Mg.apply(void 0, m),
    E = br;
  s && (E = Vg(zt({ trace: !Yg }, typeof s == 'object' && s)));
  var p = new Qg(y),
    d = p;
  Array.isArray(h) ? (d = Xn([y], h)) : typeof h == 'function' && (d = h(p));
  var v = E.apply(void 0, d);
  return Nh(g, c, v);
}
function Ft(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    if (t) {
      var i = t.apply(void 0, r);
      if (!i) throw new Error('prepareAction did not return an object');
      return zt(
        zt({ type: e, payload: i.payload }, 'meta' in i && { meta: i.meta }),
        'error' in i && { error: i.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return '' + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function Ah(e) {
  var t = {},
    n = [],
    r,
    o = {
      addCase: function (i, l) {
        var u = typeof i == 'string' ? i : i.type;
        if (u in t)
          throw new Error(
            'addCase cannot be called with two reducers for the same action type'
          );
        return (t[u] = l), o;
      },
      addMatcher: function (i, l) {
        return n.push({ matcher: i, reducer: l }), o;
      },
      addDefaultCase: function (i) {
        return (r = i), o;
      },
    };
  return e(o), [t, n, r];
}
function bg(e) {
  return typeof e == 'function';
}
function e1(e, t, n, r) {
  n === void 0 && (n = []);
  var o = typeof t == 'function' ? Ah(t) : [t, n, r],
    i = o[0],
    l = o[1],
    u = o[2],
    s;
  if (bg(e))
    s = function () {
      return ms(e());
    };
  else {
    var a = ms(e);
    s = function () {
      return a;
    };
  }
  function c(f, h) {
    f === void 0 && (f = s());
    var g = Xn(
      [i[h.type]],
      l
        .filter(function (m) {
          var y = m.matcher;
          return y(h);
        })
        .map(function (m) {
          var y = m.reducer;
          return y;
        })
    );
    return (
      g.filter(function (m) {
        return !!m;
      }).length === 0 && (g = [u]),
      g.reduce(function (m, y) {
        if (y)
          if (Kt(m)) {
            var E = m,
              p = y(E, h);
            return p === void 0 ? m : p;
          } else {
            if (gt(m))
              return Oh(m, function (d) {
                return y(d, h);
              });
            var p = y(m, h);
            if (p === void 0) {
              if (m === null) return m;
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              );
            }
            return p;
          }
        return m;
      }, f)
    );
  }
  return (c.getInitialState = s), c;
}
function t1(e, t) {
  return e + '/' + t;
}
function so(e) {
  var t = e.name;
  if (!t) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var n =
      typeof e.initialState == 'function' ? e.initialState : ms(e.initialState),
    r = e.reducers || {},
    o = Object.keys(r),
    i = {},
    l = {},
    u = {};
  o.forEach(function (c) {
    var f = r[c],
      h = t1(t, c),
      g,
      m;
    'reducer' in f ? ((g = f.reducer), (m = f.prepare)) : (g = f),
      (i[c] = g),
      (l[h] = g),
      (u[c] = m ? Ft(h, m) : Ft(h));
  });
  function s() {
    var c =
        typeof e.extraReducers == 'function'
          ? Ah(e.extraReducers)
          : [e.extraReducers],
      f = c[0],
      h = f === void 0 ? {} : f,
      g = c[1],
      m = g === void 0 ? [] : g,
      y = c[2],
      E = y === void 0 ? void 0 : y,
      p = zt(zt({}, h), l);
    return e1(n, function (d) {
      for (var v in p) d.addCase(v, p[v]);
      for (var w = 0, C = m; w < C.length; w++) {
        var R = C[w];
        d.addMatcher(R.matcher, R.reducer);
      }
      E && d.addDefaultCase(E);
    });
  }
  var a;
  return {
    name: t,
    reducer: function (c, f) {
      return a || (a = s()), a(c, f);
    },
    actions: u,
    caseReducers: i,
    getInitialState: function () {
      return a || (a = s()), a.getInitialState();
    },
  };
}
var n1 = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  r1 = function (e) {
    e === void 0 && (e = 21);
    for (var t = '', n = e; n--; ) t += n1[(Math.random() * 64) | 0];
    return t;
  },
  o1 = ['name', 'message', 'stack', 'code'],
  cu = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  Pf = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  i1 = function (e) {
    if (typeof e == 'object' && e !== null) {
      for (var t = {}, n = 0, r = o1; n < r.length; n++) {
        var o = r[n];
        typeof e[o] == 'string' && (t[o] = e[o]);
      }
      return t;
    }
    return { message: String(e) };
  };
(function () {
  function e(t, n, r) {
    var o = Ft(t + '/fulfilled', function (a, c, f, h) {
        return {
          payload: a,
          meta: au(zt({}, h || {}), {
            arg: f,
            requestId: c,
            requestStatus: 'fulfilled',
          }),
        };
      }),
      i = Ft(t + '/pending', function (a, c, f) {
        return {
          payload: void 0,
          meta: au(zt({}, f || {}), {
            arg: c,
            requestId: a,
            requestStatus: 'pending',
          }),
        };
      }),
      l = Ft(t + '/rejected', function (a, c, f, h, g) {
        return {
          payload: h,
          error: ((r && r.serializeError) || i1)(a || 'Rejected'),
          meta: au(zt({}, g || {}), {
            arg: f,
            requestId: c,
            rejectedWithValue: !!h,
            requestStatus: 'rejected',
            aborted: (a == null ? void 0 : a.name) === 'AbortError',
            condition: (a == null ? void 0 : a.name) === 'ConditionError',
          }),
        };
      }),
      u =
        typeof AbortController < 'u'
          ? AbortController
          : (function () {
              function a() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                };
              }
              return (a.prototype.abort = function () {}), a;
            })();
    function s(a) {
      return function (c, f, h) {
        var g = r != null && r.idGenerator ? r.idGenerator(a) : r1(),
          m = new u(),
          y;
        function E(d) {
          (y = d), m.abort();
        }
        var p = (function () {
          return Hg(this, null, function () {
            var d, v, w, C, R, O, T;
            return Dg(this, function (D) {
              switch (D.label) {
                case 0:
                  return (
                    D.trys.push([0, 4, , 5]),
                    (C =
                      (d = r == null ? void 0 : r.condition) == null
                        ? void 0
                        : d.call(r, a, { getState: f, extra: h })),
                    u1(C) ? [4, C] : [3, 2]
                  );
                case 1:
                  (C = D.sent()), (D.label = 2);
                case 2:
                  if (C === !1 || m.signal.aborted)
                    throw {
                      name: 'ConditionError',
                      message:
                        'Aborted due to condition callback returning false.',
                    };
                  return (
                    (R = new Promise(function (L, ee) {
                      return m.signal.addEventListener('abort', function () {
                        return ee({
                          name: 'AbortError',
                          message: y || 'Aborted',
                        });
                      });
                    })),
                    c(
                      i(
                        g,
                        a,
                        (v = r == null ? void 0 : r.getPendingMeta) == null
                          ? void 0
                          : v.call(
                              r,
                              { requestId: g, arg: a },
                              { getState: f, extra: h }
                            )
                      )
                    ),
                    [
                      4,
                      Promise.race([
                        R,
                        Promise.resolve(
                          n(a, {
                            dispatch: c,
                            getState: f,
                            extra: h,
                            requestId: g,
                            signal: m.signal,
                            abort: E,
                            rejectWithValue: function (L, ee) {
                              return new cu(L, ee);
                            },
                            fulfillWithValue: function (L, ee) {
                              return new Pf(L, ee);
                            },
                          })
                        ).then(function (L) {
                          if (L instanceof cu) throw L;
                          return L instanceof Pf
                            ? o(L.payload, g, a, L.meta)
                            : o(L, g, a);
                        }),
                      ]),
                    ]
                  );
                case 3:
                  return (w = D.sent()), [3, 5];
                case 4:
                  return (
                    (O = D.sent()),
                    (w =
                      O instanceof cu
                        ? l(null, g, a, O.payload, O.meta)
                        : l(O, g, a)),
                    [3, 5]
                  );
                case 5:
                  return (
                    (T =
                      r &&
                      !r.dispatchConditionRejection &&
                      l.match(w) &&
                      w.meta.condition),
                    T || c(w),
                    [2, w]
                  );
              }
            });
          });
        })();
        return Object.assign(p, {
          abort: E,
          requestId: g,
          arg: a,
          unwrap: function () {
            return p.then(l1);
          },
        });
      };
    }
    return Object.assign(s, {
      pending: i,
      rejected: l,
      fulfilled: o,
      typePrefix: t,
    });
  }
  return (
    (e.withTypes = function () {
      return e;
    }),
    e
  );
})();
function l1(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function u1(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function';
}
var Aa = 'listenerMiddleware';
Ft(Aa + '/add');
Ft(Aa + '/removeAll');
Ft(Aa + '/remove');
var Rf;
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(
    typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis
  );
Pg();
var Ze = function (t) {
    return '@@redux-saga/' + t;
  },
  jh = Ze('CANCEL_PROMISE'),
  $h = Ze('CHANNEL_END'),
  Ih = Ze('IO'),
  Of = Ze('MATCH'),
  Mh = Ze('MULTICAST'),
  Dh = Ze('SAGA_ACTION'),
  s1 = Ze('SELF_CANCELLATION'),
  a1 = Ze('TASK'),
  Un = Ze('TASK_CANCEL'),
  zh = Ze('TERMINATE'),
  c1 = Ze('LOCATION'),
  Fh = function (t) {
    return t == null;
  },
  qo = function (t) {
    return t != null;
  },
  Oe = function (t) {
    return typeof t == 'function';
  },
  ja = function (t) {
    return typeof t == 'string';
  },
  Xt = Array.isArray,
  hl = function (t) {
    return t && Oe(t.then);
  },
  $a = function (t) {
    return t && Oe(t.next) && Oe(t.throw);
  },
  Nf = function e(t) {
    return t && (ja(t) || Bh(t) || Oe(t) || (Xt(t) && t.every(e)));
  },
  Ia = function (t) {
    return t && Oe(t.take) && Oe(t.close);
  },
  Uh = function (t) {
    return Oe(t) && t.hasOwnProperty('toString');
  },
  Bh = function (t) {
    return (
      !!t &&
      typeof Symbol == 'function' &&
      t.constructor === Symbol &&
      t !== Symbol.prototype
    );
  },
  f1 = function (t) {
    return Ia(t) && t[Mh];
  },
  d1 = 2147483647;
function p1(e, t) {
  t === void 0 && (t = !0);
  var n,
    r = new Promise(function (o) {
      n = setTimeout(o, Math.min(d1, e), t);
    });
  return (
    (r[jh] = function () {
      clearTimeout(n);
    }),
    r
  );
}
var h1 = function (t) {
    return function () {
      return t;
    };
  },
  m1 = h1(!0),
  ge = function () {},
  Wh = function (t) {
    return t;
  },
  Ma = function (t, n) {
    Ci(t, n),
      Object.getOwnPropertySymbols &&
        Object.getOwnPropertySymbols(n).forEach(function (r) {
          t[r] = n[r];
        });
  },
  v1 = function (t, n) {
    var r;
    return (r = []).concat.apply(r, n.map(t));
  };
function ml(e, t) {
  var n = e.indexOf(t);
  n >= 0 && e.splice(n, 1);
}
function y1(e) {
  var t = !1;
  return function () {
    t || ((t = !0), e());
  };
}
var g1 = function (t) {
    throw t;
  },
  w1 = function (t) {
    return { value: t, done: !0 };
  };
function vs(e, t, n) {
  t === void 0 && (t = g1), n === void 0 && (n = 'iterator');
  var r = {
    meta: { name: n },
    next: e,
    throw: t,
    return: w1,
    isSagaIterator: !0,
  };
  return (
    typeof Symbol < 'u' &&
      (r[Symbol.iterator] = function () {
        return r;
      }),
    r
  );
}
function S1(e, t) {
  var n = t.sagaStack;
  console.error(e), console.error(n);
}
var Hh = function (t) {
    return Array.apply(null, new Array(t));
  },
  E1 = function (t) {
    return function (n) {
      return t(Object.defineProperty(n, Dh, { value: !0 }));
    };
  },
  Vh = function (t) {
    return t === zh;
  },
  Kh = function (t) {
    return t === Un;
  },
  qh = function (t) {
    return Vh(t) || Kh(t);
  };
function Qh(e, t) {
  var n = Object.keys(e),
    r = n.length,
    o = 0,
    i,
    l = Xt(e) ? Hh(r) : {},
    u = {};
  function s() {
    o === r && ((i = !0), t(l));
  }
  return (
    n.forEach(function (a) {
      var c = function (h, g) {
        i || (g || qh(h) ? (t.cancel(), t(h, g)) : ((l[a] = h), o++, s()));
      };
      (c.cancel = ge), (u[a] = c);
    }),
    (t.cancel = function () {
      i ||
        ((i = !0),
        n.forEach(function (a) {
          return u[a].cancel();
        }));
    }),
    u
  );
}
function Da(e) {
  return { name: e.name || 'anonymous', location: Gh(e) };
}
function Gh(e) {
  return e[c1];
}
var x1 = "Channel's Buffer overflow!",
  C1 = 1,
  k1 = 3,
  Xh = 4;
function P1(e, t) {
  e === void 0 && (e = 10);
  var n = new Array(e),
    r = 0,
    o = 0,
    i = 0,
    l = function (c) {
      (n[o] = c), (o = (o + 1) % e), r++;
    },
    u = function () {
      if (r != 0) {
        var c = n[i];
        return (n[i] = null), r--, (i = (i + 1) % e), c;
      }
    },
    s = function () {
      for (var c = []; r; ) c.push(u());
      return c;
    };
  return {
    isEmpty: function () {
      return r == 0;
    },
    put: function (c) {
      if (r < e) l(c);
      else {
        var f;
        switch (t) {
          case C1:
            throw new Error(x1);
          case k1:
            (n[o] = c), (o = (o + 1) % e), (i = o);
            break;
          case Xh:
            (f = 2 * e),
              (n = s()),
              (r = n.length),
              (o = n.length),
              (i = 0),
              (n.length = f),
              (e = f),
              l(c);
            break;
        }
      }
    },
    take: u,
    flush: s,
  };
}
var R1 = function (t) {
    return P1(t, Xh);
  },
  Qo = 'TAKE',
  Jh = 'PUT',
  Yh = 'ALL',
  O1 = 'RACE',
  Zh = 'CALL',
  N1 = 'CPS',
  bh = 'FORK',
  _1 = 'JOIN',
  T1 = 'CANCEL',
  em = 'SELECT',
  L1 = 'ACTION_CHANNEL',
  A1 = 'CANCELLED',
  j1 = 'FLUSH',
  $1 = 'GET_CONTEXT',
  I1 = 'SET_CONTEXT',
  Ut = function (t, n) {
    var r;
    return (
      (r = {}),
      (r[Ih] = !0),
      (r.combinator = !1),
      (r.type = t),
      (r.payload = n),
      r
    );
  };
function tm(e, t) {
  if ((e === void 0 && (e = '*'), Nf(e)))
    return (
      qo(t) &&
        console.warn(
          'take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types'
        ),
      Ut(Qo, { pattern: e })
    );
  if (f1(e) && qo(t) && Nf(t)) return Ut(Qo, { channel: e, pattern: t });
  if (Ia(e))
    return (
      qo(t) &&
        console.warn(
          'take(channel) takes one argument but two were provided. Second argument is ignored.'
        ),
      Ut(Qo, { channel: e })
    );
}
function an(e, t) {
  return Fh(t) && ((t = e), (e = void 0)), Ut(Jh, { channel: e, action: t });
}
function M1(e) {
  var t = Ut(Yh, e);
  return (t.combinator = !0), t;
}
function nm(e, t) {
  var n = null,
    r;
  return (
    Oe(e)
      ? (r = e)
      : (Xt(e) ? ((n = e[0]), (r = e[1])) : ((n = e.context), (r = e.fn)),
        n && ja(r) && Oe(n[r]) && (r = n[r])),
    { context: n, fn: r, args: t }
  );
}
function Jn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return Ut(Zh, nm(e, n));
}
function za(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return Ut(bh, nm(e, n));
}
function rm(e) {
  e === void 0 && (e = Wh);
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return Ut(em, { selector: e, args: n });
}
var Fa = Jn.bind(null, p1);
function D1() {
  var e = {};
  return (
    (e.promise = new Promise(function (t, n) {
      (e.resolve = t), (e.reject = n);
    })),
    e
  );
}
var om = [],
  vl = 0;
function z1(e) {
  try {
    Ua(), e();
  } finally {
    um();
  }
}
function im(e) {
  om.push(e), vl || (Ua(), sm());
}
function lm(e) {
  try {
    return Ua(), e();
  } finally {
    sm();
  }
}
function Ua() {
  vl++;
}
function um() {
  vl--;
}
function sm() {
  um();
  for (var e; !vl && (e = om.shift()) !== void 0; ) z1(e);
}
var F1 = function (t) {
    return function (n) {
      return t.some(function (r) {
        return Ba(r)(n);
      });
    };
  },
  U1 = function (t) {
    return function (n) {
      return t(n);
    };
  },
  _f = function (t) {
    return function (n) {
      return n.type === String(t);
    };
  },
  B1 = function (t) {
    return function (n) {
      return n.type === t;
    };
  },
  am = function () {
    return m1;
  };
function Ba(e) {
  var t =
    e === '*'
      ? am
      : ja(e)
      ? _f
      : Xt(e)
      ? F1
      : Uh(e)
      ? _f
      : Oe(e)
      ? U1
      : Bh(e)
      ? B1
      : null;
  if (t === null) throw new Error('invalid pattern: ' + e);
  return t(e);
}
var Lr = { type: $h },
  Wa = function (t) {
    return t && t.type === $h;
  };
function W1(e) {
  e === void 0 && (e = R1());
  var t = !1,
    n = [];
  function r(u) {
    if (!t) {
      if (n.length === 0) return e.put(u);
      var s = n.shift();
      s(u);
    }
  }
  function o(u) {
    t && e.isEmpty()
      ? u(Lr)
      : e.isEmpty()
      ? (n.push(u),
        (u.cancel = function () {
          ml(n, u);
        }))
      : u(e.take());
  }
  function i(u) {
    if (t && e.isEmpty()) {
      u(Lr);
      return;
    }
    u(e.flush());
  }
  function l() {
    if (!t) {
      t = !0;
      var u = n;
      n = [];
      for (var s = 0, a = u.length; s < a; s++) {
        var c = u[s];
        c(Lr);
      }
    }
  }
  return { take: o, put: r, flush: i, close: l };
}
function H1() {
  var e,
    t = !1,
    n = [],
    r = n,
    o = function () {
      r === n && (r = n.slice());
    },
    i = function () {
      t = !0;
      var u = (n = r);
      (r = []),
        u.forEach(function (s) {
          s(Lr);
        });
    };
  return (
    (e = {}),
    (e[Mh] = !0),
    (e.put = function (u) {
      if (!t) {
        if (Wa(u)) {
          i();
          return;
        }
        for (var s = (n = r), a = 0, c = s.length; a < c; a++) {
          var f = s[a];
          f[Of](u) && (f.cancel(), f(u));
        }
      }
    }),
    (e.take = function (u, s) {
      if ((s === void 0 && (s = am), t)) {
        u(Lr);
        return;
      }
      (u[Of] = s),
        o(),
        r.push(u),
        (u.cancel = y1(function () {
          o(), ml(r, u);
        }));
    }),
    (e.close = i),
    e
  );
}
function cm() {
  var e = H1(),
    t = e.put;
  return (
    (e.put = function (n) {
      if (n[Dh]) {
        t(n);
        return;
      }
      im(function () {
        t(n);
      });
    }),
    e
  );
}
var nn = 0,
  at = 1,
  Go = 2,
  fm = 3;
function Ha(e, t) {
  var n = e[jh];
  Oe(n) && (t.cancel = n),
    e.then(t, function (r) {
      t(r, !0);
    });
}
var ao = 0,
  dm = function () {
    return ++ao;
  },
  se;
function V1(e, t) {
  return e.isSagaIterator ? { name: e.meta.name } : Da(t);
}
function K1(e) {
  var t = e.context,
    n = e.fn,
    r = e.args;
  try {
    var o = n.apply(t, r);
    if ($a(o)) return o;
    var i = !1,
      l = function (s) {
        return i
          ? { value: s, done: !0 }
          : ((i = !0), { value: o, done: !hl(o) });
      };
    return vs(l);
  } catch (u) {
    return vs(function () {
      throw u;
    });
  }
}
function q1(e, t, n) {
  var r = t.channel,
    o = t.action,
    i = t.resolve;
  im(function () {
    var l;
    try {
      l = (r ? r.put : e.dispatch)(o);
    } catch (u) {
      n(u, !0);
      return;
    }
    i && hl(l) ? Ha(l, n) : n(l);
  });
}
function Q1(e, t, n) {
  var r = t.channel,
    o = r === void 0 ? e.channel : r,
    i = t.pattern,
    l = t.maybe,
    u = function (a) {
      if (a instanceof Error) {
        n(a, !0);
        return;
      }
      if (Wa(a) && !l) {
        n(zh);
        return;
      }
      n(a);
    };
  try {
    o.take(u, qo(i) ? Ba(i) : null);
  } catch (s) {
    n(s, !0);
    return;
  }
  n.cancel = u.cancel;
}
function G1(e, t, n, r) {
  var o = t.context,
    i = t.fn,
    l = t.args,
    u = r.task;
  try {
    var s = i.apply(o, l);
    if (hl(s)) {
      Ha(s, n);
      return;
    }
    if ($a(s)) {
      yl(e, s, u.context, ao, Da(i), !1, n);
      return;
    }
    n(s);
  } catch (a) {
    n(a, !0);
  }
}
function X1(e, t, n) {
  var r = t.context,
    o = t.fn,
    i = t.args;
  try {
    var l = function (s, a) {
      Fh(s) ? n(a) : n(s, !0);
    };
    o.apply(r, i.concat(l)), l.cancel && (n.cancel = l.cancel);
  } catch (u) {
    n(u, !0);
  }
}
function J1(e, t, n, r) {
  var o = t.context,
    i = t.fn,
    l = t.args,
    u = t.detached,
    s = r.task,
    a = K1({ context: o, fn: i, args: l }),
    c = V1(a, i);
  lm(function () {
    var f = yl(e, a, s.context, ao, c, u, void 0);
    u
      ? n(f)
      : f.isRunning()
      ? (s.queue.addTask(f), n(f))
      : f.isAborted()
      ? s.queue.abort(f.error())
      : n(f);
  });
}
function Y1(e, t, n, r) {
  var o = r.task,
    i = function (s, a) {
      if (s.isRunning()) {
        var c = { task: o, cb: a };
        (a.cancel = function () {
          s.isRunning() && ml(s.joiners, c);
        }),
          s.joiners.push(c);
      } else s.isAborted() ? a(s.error(), !0) : a(s.result());
    };
  if (Xt(t)) {
    if (t.length === 0) {
      n([]);
      return;
    }
    var l = Qh(t, n);
    t.forEach(function (u, s) {
      i(u, l[s]);
    });
  } else i(t, n);
}
function fu(e) {
  e.isRunning() && e.cancel();
}
function Z1(e, t, n, r) {
  var o = r.task;
  t === s1 ? fu(o) : Xt(t) ? t.forEach(fu) : fu(t), n();
}
function b1(e, t, n, r) {
  var o = r.digestEffect,
    i = ao,
    l = Object.keys(t);
  if (l.length === 0) {
    n(Xt(t) ? [] : {});
    return;
  }
  var u = Qh(t, n);
  l.forEach(function (s) {
    o(t[s], i, u[s], s);
  });
}
function ew(e, t, n, r) {
  var o = r.digestEffect,
    i = ao,
    l = Object.keys(t),
    u = Xt(t) ? Hh(l.length) : {},
    s = {},
    a = !1;
  l.forEach(function (c) {
    var f = function (g, m) {
      a ||
        (m || qh(g)
          ? (n.cancel(), n(g, m))
          : (n.cancel(), (a = !0), (u[c] = g), n(u)));
    };
    (f.cancel = ge), (s[c] = f);
  }),
    (n.cancel = function () {
      a ||
        ((a = !0),
        l.forEach(function (c) {
          return s[c].cancel();
        }));
    }),
    l.forEach(function (c) {
      a || o(t[c], i, s[c], c);
    });
}
function tw(e, t, n) {
  var r = t.selector,
    o = t.args;
  try {
    var i = r.apply(void 0, [e.getState()].concat(o));
    n(i);
  } catch (l) {
    n(l, !0);
  }
}
function nw(e, t, n) {
  var r = t.pattern,
    o = t.buffer,
    i = W1(o),
    l = Ba(r),
    u = function a(c) {
      Wa(c) || e.channel.take(a, l), i.put(c);
    },
    s = i.close;
  (i.close = function () {
    u.cancel(), s();
  }),
    e.channel.take(u, l),
    n(i);
}
function rw(e, t, n, r) {
  var o = r.task;
  n(o.isCancelled());
}
function ow(e, t, n) {
  t.flush(n);
}
function iw(e, t, n, r) {
  var o = r.task;
  n(o.context[t]);
}
function lw(e, t, n, r) {
  var o = r.task;
  Ma(o.context, t), n();
}
var uw =
  ((se = {}),
  (se[Qo] = Q1),
  (se[Jh] = q1),
  (se[Yh] = b1),
  (se[O1] = ew),
  (se[Zh] = G1),
  (se[N1] = X1),
  (se[bh] = J1),
  (se[_1] = Y1),
  (se[T1] = Z1),
  (se[em] = tw),
  (se[L1] = nw),
  (se[A1] = rw),
  (se[j1] = ow),
  (se[$1] = iw),
  (se[I1] = lw),
  se);
function sw(e, t, n) {
  var r = [],
    o,
    i = !1;
  s(e);
  var l = function () {
    return r;
  };
  function u(c) {
    t(), a(), n(c, !0);
  }
  function s(c) {
    r.push(c),
      (c.cont = function (f, h) {
        i ||
          (ml(r, c),
          (c.cont = ge),
          h ? u(f) : (c === e && (o = f), r.length || ((i = !0), n(o))));
      });
  }
  function a() {
    i ||
      ((i = !0),
      r.forEach(function (c) {
        (c.cont = ge), c.cancel();
      }),
      (r = []));
  }
  return { addTask: s, cancelAll: a, abort: u, getTasks: l };
}
function pm(e, t) {
  return e + '?' + t;
}
function aw(e) {
  var t = Gh(e);
  if (t) {
    var n = t.code,
      r = t.fileName,
      o = t.lineNumber,
      i = n + '  ' + pm(r, o);
    return i;
  }
  return '';
}
function Tf(e) {
  var t = e.name,
    n = e.location;
  return n ? t + '  ' + pm(n.fileName, n.lineNumber) : t;
}
function cw(e) {
  var t = v1(function (n) {
    return n.cancelledTasks;
  }, e);
  return t.length
    ? ['Tasks cancelled due to error:'].concat(t).join(`
`)
    : '';
}
var Va = null,
  Ar = [],
  fw = function (t) {
    (t.crashedEffect = Va), Ar.push(t);
  },
  hm = function () {
    (Va = null), (Ar.length = 0);
  },
  dw = function (t) {
    Va = t;
  },
  pw = function () {
    var t = Ar[0],
      n = Ar.slice(1),
      r = t.crashedEffect ? aw(t.crashedEffect) : null,
      o =
        'The above error occurred in task ' +
        Tf(t.meta) +
        (r
          ? ` 
 when executing effect ` + r
          : '');
    return [o].concat(
      n.map(function (i) {
        return '    created by ' + Tf(i.meta);
      }),
      [cw(Ar)]
    ).join(`
`);
  };
function hw(e, t, n, r, o, i, l) {
  var u;
  l === void 0 && (l = ge);
  var s = nn,
    a,
    c,
    f = null,
    h = [],
    g = Object.create(n),
    m = sw(
      t,
      function () {
        h.push.apply(
          h,
          m.getTasks().map(function (C) {
            return C.meta.name;
          })
        );
      },
      E
    );
  function y() {
    s === nn && ((s = at), m.cancelAll(), E(Un, !1));
  }
  function E(w, C) {
    if (!C)
      w === Un ? (s = at) : s !== at && (s = fm), (a = w), f && f.resolve(w);
    else {
      if (((s = Go), fw({ meta: o, cancelledTasks: h }), v.isRoot)) {
        var R = pw();
        hm(), e.onError(w, { sagaStack: R });
      }
      (c = w), f && f.reject(w);
    }
    v.cont(w, C),
      v.joiners.forEach(function (O) {
        O.cb(w, C);
      }),
      (v.joiners = null);
  }
  function p(w) {
    Ma(g, w);
  }
  function d() {
    return (
      f || ((f = D1()), s === Go ? f.reject(c) : s !== nn && f.resolve(a)),
      f.promise
    );
  }
  var v =
    ((u = {}),
    (u[a1] = !0),
    (u.id = r),
    (u.meta = o),
    (u.isRoot = i),
    (u.context = g),
    (u.joiners = []),
    (u.queue = m),
    (u.cancel = y),
    (u.cont = l),
    (u.end = E),
    (u.setContext = p),
    (u.toPromise = d),
    (u.isRunning = function () {
      return s === nn;
    }),
    (u.isCancelled = function () {
      return s === at || (s === nn && t.status === at);
    }),
    (u.isAborted = function () {
      return s === Go;
    }),
    (u.result = function () {
      return a;
    }),
    (u.error = function () {
      return c;
    }),
    u);
  return v;
}
function yl(e, t, n, r, o, i, l) {
  var u = e.finalizeRunEffect(g);
  h.cancel = ge;
  var s = { meta: o, cancel: f, status: nn },
    a = hw(e, s, n, r, o, i, l),
    c = { task: a, digestEffect: m };
  function f() {
    s.status === nn && ((s.status = at), h(Un));
  }
  return l && (l.cancel = a.cancel), h(), a;
  function h(y, E) {
    try {
      var p;
      E
        ? ((p = t.throw(y)), hm())
        : Kh(y)
        ? ((s.status = at),
          h.cancel(),
          (p = Oe(t.return) ? t.return(Un) : { done: !0, value: Un }))
        : Vh(y)
        ? (p = Oe(t.return) ? t.return() : { done: !0 })
        : (p = t.next(y)),
        p.done
          ? (s.status !== at && (s.status = fm), s.cont(p.value))
          : m(p.value, r, h);
    } catch (d) {
      if (s.status === at) throw d;
      (s.status = Go), s.cont(d, !0);
    }
  }
  function g(y, E, p) {
    if (hl(y)) Ha(y, p);
    else if ($a(y)) yl(e, y, a.context, E, o, !1, p);
    else if (y && y[Ih]) {
      var d = uw[y.type];
      d(e, y.payload, p, c);
    } else p(y);
  }
  function m(y, E, p, d) {
    d === void 0 && (d = '');
    var v = dm();
    e.sagaMonitor &&
      e.sagaMonitor.effectTriggered({
        effectId: v,
        parentEffectId: E,
        label: d,
        effect: y,
      });
    var w;
    function C(R, O) {
      w ||
        ((w = !0),
        (p.cancel = ge),
        e.sagaMonitor &&
          (O
            ? e.sagaMonitor.effectRejected(v, R)
            : e.sagaMonitor.effectResolved(v, R)),
        O && dw(y),
        p(R, O));
    }
    (C.cancel = ge),
      (p.cancel = function () {
        w ||
          ((w = !0),
          C.cancel(),
          (C.cancel = ge),
          e.sagaMonitor && e.sagaMonitor.effectCancelled(v));
      }),
      u(y, v, C);
  }
}
function mw(e, t) {
  for (
    var n = e.channel,
      r = n === void 0 ? cm() : n,
      o = e.dispatch,
      i = e.getState,
      l = e.context,
      u = l === void 0 ? {} : l,
      s = e.sagaMonitor,
      a = e.effectMiddlewares,
      c = e.onError,
      f = c === void 0 ? S1 : c,
      h = arguments.length,
      g = new Array(h > 2 ? h - 2 : 0),
      m = 2;
    m < h;
    m++
  )
    g[m - 2] = arguments[m];
  var y = t.apply(void 0, g),
    E = dm();
  s &&
    ((s.rootSagaStarted = s.rootSagaStarted || ge),
    (s.effectTriggered = s.effectTriggered || ge),
    (s.effectResolved = s.effectResolved || ge),
    (s.effectRejected = s.effectRejected || ge),
    (s.effectCancelled = s.effectCancelled || ge),
    (s.actionDispatched = s.actionDispatched || ge),
    s.rootSagaStarted({ effectId: E, saga: t, args: g }));
  var p;
  if (a) {
    var d = br.apply(void 0, a);
    p = function (C) {
      return function (R, O, T) {
        var D = function (ee) {
          return C(ee, O, T);
        };
        return d(D)(R);
      };
    };
  } else p = Wh;
  var v = {
    channel: r,
    dispatch: E1(o),
    getState: i,
    sagaMonitor: s,
    onError: f,
    finalizeRunEffect: p,
  };
  return lm(function () {
    var w = yl(v, y, u, E, Da(t), !0, void 0);
    return s && s.effectResolved(E, w), w;
  });
}
function vw(e) {
  var t = e === void 0 ? {} : e,
    n = t.context,
    r = n === void 0 ? {} : n,
    o = t.channel,
    i = o === void 0 ? cm() : o,
    l = t.sagaMonitor,
    u = tg(t, ['context', 'channel', 'sagaMonitor']),
    s;
  function a(c) {
    var f = c.getState,
      h = c.dispatch;
    return (
      (s = mw.bind(
        null,
        Ci({}, u, {
          context: r,
          channel: i,
          dispatch: h,
          getState: f,
          sagaMonitor: l,
        })
      )),
      function (g) {
        return function (m) {
          l && l.actionDispatched && l.actionDispatched(m);
          var y = g(m);
          return i.put(m), y;
        };
      }
    );
  }
  return (
    (a.run = function () {
      return s.apply(void 0, arguments);
    }),
    (a.setContext = function (c) {
      Ma(r, c);
    }),
    a
  );
}
var Lf = function (t) {
    return { done: !0, value: t };
  },
  du = {};
function mm(e) {
  return Ia(e) ? 'channel' : Uh(e) ? String(e) : Oe(e) ? e.name : String(e);
}
function vm(e, t, n) {
  var r,
    o,
    i,
    l = t;
  function u(s, a) {
    if (l === du) return Lf(s);
    if (a && !o) throw ((l = du), a);
    r && r(s);
    var c = a ? e[o](a) : e[l]();
    return (
      (l = c.nextState),
      (i = c.effect),
      (r = c.stateUpdater),
      (o = c.errorState),
      l === du ? Lf(s) : i
    );
  }
  return vs(
    u,
    function (s) {
      return u(null, s);
    },
    n
  );
}
function yw(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
    o < n;
    o++
  )
    r[o - 2] = arguments[o];
  var i = { done: !1, value: tm(e) },
    l = function (c) {
      return { done: !1, value: za.apply(void 0, [t].concat(r, [c])) };
    },
    u,
    s = function (c) {
      return (u = c);
    };
  return vm(
    {
      q1: function () {
        return { nextState: 'q2', effect: i, stateUpdater: s };
      },
      q2: function () {
        return { nextState: 'q1', effect: l(u) };
      },
    },
    'q1',
    'takeEvery(' + mm(e) + ', ' + t.name + ')'
  );
}
function gw(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
    o < n;
    o++
  )
    r[o - 2] = arguments[o];
  var i = { done: !1, value: tm(e) },
    l = function (c) {
      return { done: !1, value: Jn.apply(void 0, [t].concat(r, [c])) };
    },
    u,
    s = function (c) {
      return (u = c);
    };
  return vm(
    {
      q1: function () {
        return { nextState: 'q2', effect: i, stateUpdater: s };
      },
      q2: function () {
        return { nextState: 'q1', effect: l(u) };
      },
    },
    'q1',
    'takeLeading(' + mm(e) + ', ' + t.name + ')'
  );
}
function ym(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
    o < n;
    o++
  )
    r[o - 2] = arguments[o];
  return za.apply(void 0, [yw, e, t].concat(r));
}
function ww(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
    o < n;
    o++
  )
    r[o - 2] = arguments[o];
  return za.apply(void 0, [gw, e, t].concat(r));
}
const Sw = { posts: [], isLoading: !1, error: '' },
  gm = so({
    name: 'posts',
    initialState: Sw,
    reducers: {
      postsRequest(e) {
        (e.error = ''), (e.isLoading = !0);
      },
      setPosts(e, t) {
        (e.posts = t.payload), (e.isLoading = !1);
      },
      postsRequestError(e, t) {
        (e.error = t.payload), (e.isLoading = !1);
      },
    },
  }),
  { postsRequest: Ew, setPosts: xw, postsRequestError: Cw } = gm.actions,
  kw = gm.reducer;
function wm(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Pw } = Object.prototype,
  { getPrototypeOf: Ka } = Object,
  gl = ((e) => (t) => {
    const n = Pw.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  lt = (e) => ((e = e.toLowerCase()), (t) => gl(t) === e),
  wl = (e) => (t) => typeof t === e,
  { isArray: nr } = Array,
  eo = wl('undefined');
function Rw(e) {
  return (
    e !== null &&
    !eo(e) &&
    e.constructor !== null &&
    !eo(e.constructor) &&
    Ue(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Sm = lt('ArrayBuffer');
function Ow(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Sm(e.buffer)),
    t
  );
}
const Nw = wl('string'),
  Ue = wl('function'),
  Em = wl('number'),
  Sl = (e) => e !== null && typeof e == 'object',
  _w = (e) => e === !0 || e === !1,
  Xo = (e) => {
    if (gl(e) !== 'object') return !1;
    const t = Ka(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Tw = lt('Date'),
  Lw = lt('File'),
  Aw = lt('Blob'),
  jw = lt('FileList'),
  $w = (e) => Sl(e) && Ue(e.pipe),
  Iw = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Ue(e.append) &&
          ((t = gl(e)) === 'formdata' ||
            (t === 'object' &&
              Ue(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  Mw = lt('URLSearchParams'),
  Dw = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function co(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), nr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length;
    let u;
    for (r = 0; r < l; r++) (u = i[r]), t.call(null, e[u], u, e);
  }
}
function xm(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Cm = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  km = (e) => !eo(e) && e !== Cm;
function ys() {
  const { caseless: e } = (km(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && xm(t, o)) || o;
      Xo(t[i]) && Xo(r)
        ? (t[i] = ys(t[i], r))
        : Xo(r)
        ? (t[i] = ys({}, r))
        : nr(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && co(arguments[r], n);
  return t;
}
const zw = (e, t, n, { allOwnKeys: r } = {}) => (
    co(
      t,
      (o, i) => {
        n && Ue(o) ? (e[i] = wm(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Fw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Uw = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Bw = (e, t, n, r) => {
    let o, i, l;
    const u = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !u[l] && ((t[l] = e[l]), (u[l] = !0));
      e = n !== !1 && Ka(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Ww = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Hw = (e) => {
    if (!e) return null;
    if (nr(e)) return e;
    let t = e.length;
    if (!Em(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Vw = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Ka(Uint8Array)),
  Kw = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  qw = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Qw = lt('HTMLFormElement'),
  Gw = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Af = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Xw = lt('RegExp'),
  Pm = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    co(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o);
    }),
      Object.defineProperties(e, r);
  },
  Jw = (e) => {
    Pm(e, (t, n) => {
      if (Ue(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ue(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Yw = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return nr(e) ? r(e) : r(String(e).split(t)), n;
  },
  Zw = () => {},
  bw = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  pu = 'abcdefghijklmnopqrstuvwxyz',
  jf = '0123456789',
  Rm = { DIGIT: jf, ALPHA: pu, ALPHA_DIGIT: pu + pu.toUpperCase() + jf },
  eS = (e = 16, t = Rm.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function tS(e) {
  return !!(
    e &&
    Ue(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const nS = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Sl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const i = nr(r) ? [] : {};
            return (
              co(r, (l, u) => {
                const s = n(l, o + 1);
                !eo(s) && (i[u] = s);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  rS = lt('AsyncFunction'),
  oS = (e) => e && (Sl(e) || Ue(e)) && Ue(e.then) && Ue(e.catch),
  S = {
    isArray: nr,
    isArrayBuffer: Sm,
    isBuffer: Rw,
    isFormData: Iw,
    isArrayBufferView: Ow,
    isString: Nw,
    isNumber: Em,
    isBoolean: _w,
    isObject: Sl,
    isPlainObject: Xo,
    isUndefined: eo,
    isDate: Tw,
    isFile: Lw,
    isBlob: Aw,
    isRegExp: Xw,
    isFunction: Ue,
    isStream: $w,
    isURLSearchParams: Mw,
    isTypedArray: Vw,
    isFileList: jw,
    forEach: co,
    merge: ys,
    extend: zw,
    trim: Dw,
    stripBOM: Fw,
    inherits: Uw,
    toFlatObject: Bw,
    kindOf: gl,
    kindOfTest: lt,
    endsWith: Ww,
    toArray: Hw,
    forEachEntry: Kw,
    matchAll: qw,
    isHTMLForm: Qw,
    hasOwnProperty: Af,
    hasOwnProp: Af,
    reduceDescriptors: Pm,
    freezeMethods: Jw,
    toObjectSet: Yw,
    toCamelCase: Gw,
    noop: Zw,
    toFiniteNumber: bw,
    findKey: xm,
    global: Cm,
    isContextDefined: km,
    ALPHABET: Rm,
    generateString: eS,
    isSpecCompliantForm: tS,
    toJSONObject: nS,
    isAsyncFn: rS,
    isThenable: oS,
  };
function I(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
S.inherits(I, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Om = I.prototype,
  Nm = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Nm[e] = { value: e };
});
Object.defineProperties(I, Nm);
Object.defineProperty(Om, 'isAxiosError', { value: !0 });
I.from = (e, t, n, r, o, i) => {
  const l = Object.create(Om);
  return (
    S.toFlatObject(
      e,
      l,
      function (s) {
        return s !== Error.prototype;
      },
      (u) => u !== 'isAxiosError'
    ),
    I.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  );
};
const iS = null;
function gs(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function _m(e) {
  return S.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function $f(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = _m(o)), !n && i ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}
function lS(e) {
  return S.isArray(e) && !e.some(gs);
}
const uS = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function El(e, t, n) {
  if (!S.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, E) {
        return !S.isUndefined(E[y]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    l = n.indexes,
    s = (n.Blob || (typeof Blob < 'u' && Blob)) && S.isSpecCompliantForm(t);
  if (!S.isFunction(o)) throw new TypeError('visitor must be a function');
  function a(m) {
    if (m === null) return '';
    if (S.isDate(m)) return m.toISOString();
    if (!s && S.isBlob(m))
      throw new I('Blob is not supported. Use a Buffer instead.');
    return S.isArrayBuffer(m) || S.isTypedArray(m)
      ? s && typeof Blob == 'function'
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function c(m, y, E) {
    let p = m;
    if (m && !E && typeof m == 'object') {
      if (S.endsWith(y, '{}'))
        (y = r ? y : y.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (S.isArray(m) && lS(m)) ||
        ((S.isFileList(m) || S.endsWith(y, '[]')) && (p = S.toArray(m)))
      )
        return (
          (y = _m(y)),
          p.forEach(function (v, w) {
            !(S.isUndefined(v) || v === null) &&
              t.append(
                l === !0 ? $f([y], w, i) : l === null ? y : y + '[]',
                a(v)
              );
          }),
          !1
        );
    }
    return gs(m) ? !0 : (t.append($f(E, y, i), a(m)), !1);
  }
  const f = [],
    h = Object.assign(uS, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: gs,
    });
  function g(m, y) {
    if (!S.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error('Circular reference detected in ' + y.join('.'));
      f.push(m),
        S.forEach(m, function (p, d) {
          (!(S.isUndefined(p) || p === null) &&
            o.call(t, p, S.isString(d) ? d.trim() : d, y, h)) === !0 &&
            g(p, y ? y.concat(d) : [d]);
        }),
        f.pop();
    }
  }
  if (!S.isObject(e)) throw new TypeError('data must be an object');
  return g(e), t;
}
function If(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function qa(e, t) {
  (this._pairs = []), e && El(e, this, t);
}
const Tm = qa.prototype;
Tm.append = function (t, n) {
  this._pairs.push([t, n]);
};
Tm.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, If);
      }
    : If;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};
function sS(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Lm(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || sS,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = S.isURLSearchParams(t) ? t.toString() : new qa(t, n).toString(r)),
    i)
  ) {
    const l = e.indexOf('#');
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class aS {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Mf = aS,
  Am = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  cS = typeof URLSearchParams < 'u' ? URLSearchParams : qa,
  fS = typeof FormData < 'u' ? FormData : null,
  dS = typeof Blob < 'u' ? Blob : null,
  pS = (() => {
    let e;
    return typeof navigator < 'u' &&
      ((e = navigator.product) === 'ReactNative' ||
        e === 'NativeScript' ||
        e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  })(),
  hS = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  nt = {
    isBrowser: !0,
    classes: { URLSearchParams: cS, FormData: fS, Blob: dS },
    isStandardBrowserEnv: pS,
    isStandardBrowserWebWorkerEnv: hS,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
function mS(e, t) {
  return El(
    e,
    new nt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return nt.isNode && S.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function vS(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0]
  );
}
function yS(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function jm(e) {
  function t(n, r, o, i) {
    let l = n[i++];
    const u = Number.isFinite(+l),
      s = i >= n.length;
    return (
      (l = !l && S.isArray(o) ? o.length : l),
      s
        ? (S.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !u)
        : ((!o[l] || !S.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && S.isArray(o[l]) && (o[l] = yS(o[l])),
          !u)
    );
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return (
      S.forEachEntry(e, (r, o) => {
        t(vS(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
const gS = { 'Content-Type': void 0 };
function wS(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const xl = {
  transitional: Am,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = S.isObject(t);
      if ((i && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return o && o ? JSON.stringify(jm(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        );
      let u;
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return mS(t, this.formSerializer).toString();
        if ((u = S.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData;
          return El(
            u ? { 'files[]': t } : t,
            s && new s(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType('application/json', !1), wS(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || xl.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (t && S.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (u) {
          if (l)
            throw u.name === 'SyntaxError'
              ? I.from(u, I.ERR_BAD_RESPONSE, this, null, this.response)
              : u;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: nt.classes.FormData, Blob: nt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
};
S.forEach(['delete', 'get', 'head'], function (t) {
  xl.headers[t] = {};
});
S.forEach(['post', 'put', 'patch'], function (t) {
  xl.headers[t] = S.merge(gS);
});
const Qa = xl,
  SS = S.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  ES = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (o = l.indexOf(':')),
              (n = l.substring(0, o).trim().toLowerCase()),
              (r = l.substring(o + 1).trim()),
              !(!n || (t[n] && SS[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Df = Symbol('internals');
function mr(e) {
  return e && String(e).trim().toLowerCase();
}
function Jo(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Jo) : String(e);
}
function xS(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const CS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function hu(e, t, n, r, o) {
  if (S.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1;
    if (S.isRegExp(r)) return r.test(t);
  }
}
function kS(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function PS(e, t) {
  const n = S.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l);
      },
      configurable: !0,
    });
  });
}
class Cl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(u, s, a) {
      const c = mr(s);
      if (!c) throw new Error('header name must be a non-empty string');
      const f = S.findKey(o, c);
      (!f || o[f] === void 0 || a === !0 || (a === void 0 && o[f] !== !1)) &&
        (o[f || s] = Jo(u));
    }
    const l = (u, s) => S.forEach(u, (a, c) => i(a, c, s));
    return (
      S.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : S.isString(t) && (t = t.trim()) && !CS(t)
        ? l(ES(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = mr(t)), t)) {
      const r = S.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return xS(o);
        if (S.isFunction(n)) return n.call(this, o, r);
        if (S.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = mr(t)), t)) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || hu(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(l) {
      if (((l = mr(l)), l)) {
        const u = S.findKey(r, l);
        u && (!n || hu(r, r[u], u, n)) && (delete r[u], (o = !0));
      }
    }
    return S.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || hu(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      S.forEach(this, (o, i) => {
        const l = S.findKey(r, i);
        if (l) {
          (n[l] = Jo(o)), delete n[i];
          return;
        }
        const u = t ? kS(i) : String(i).trim();
        u !== i && delete n[i], (n[u] = Jo(o)), (r[u] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      S.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && S.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Df] = this[Df] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(l) {
      const u = mr(l);
      r[u] || (PS(o, l), (r[u] = !0));
    }
    return S.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Cl.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
S.freezeMethods(Cl.prototype);
S.freezeMethods(Cl);
const pt = Cl;
function mu(e, t) {
  const n = this || Qa,
    r = t || n,
    o = pt.from(r.headers);
  let i = r.data;
  return (
    S.forEach(e, function (u) {
      i = u.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function $m(e) {
  return !!(e && e.__CANCEL__);
}
function fo(e, t, n) {
  I.call(this, e ?? 'canceled', I.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
S.inherits(fo, I, { __CANCEL__: !0 });
function RS(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new I(
          'Request failed with status code ' + n.status,
          [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const OS = nt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, l, u) {
          const s = [];
          s.push(n + '=' + encodeURIComponent(r)),
            S.isNumber(o) && s.push('expires=' + new Date(o).toGMTString()),
            S.isString(i) && s.push('path=' + i),
            S.isString(l) && s.push('domain=' + l),
            u === !0 && s.push('secure'),
            (document.cookie = s.join('; '));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)')
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, '', Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function NS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function _S(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Im(e, t) {
  return e && !NS(t) ? _S(e, t) : t;
}
const TS = nt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function o(i) {
        let l = i;
        return (
          t && (n.setAttribute('href', l), (l = n.href)),
          n.setAttribute('href', l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (l) {
          const u = S.isString(l) ? o(l) : l;
          return u.protocol === r.protocol && u.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function LS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function AS(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const a = Date.now(),
        c = r[i];
      l || (l = a), (n[o] = s), (r[o] = a);
      let f = i,
        h = 0;
      for (; f !== o; ) (h += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - l < t)) return;
      const g = c && a - c;
      return g ? Math.round((h * 1e3) / g) : void 0;
    }
  );
}
function zf(e, t) {
  let n = 0;
  const r = AS(50, 250);
  return (o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      u = i - n,
      s = r(u),
      a = i <= l;
    n = i;
    const c = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: u,
      rate: s || void 0,
      estimated: s && l && a ? (l - i) / s : void 0,
      event: o,
    };
    (c[t ? 'download' : 'upload'] = !0), e(c);
  };
}
const jS = typeof XMLHttpRequest < 'u',
  $S =
    jS &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = pt.from(e.headers).normalize(),
          l = e.responseType;
        let u;
        function s() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener('abort', u);
        }
        S.isFormData(o) &&
          (nt.isStandardBrowserEnv || nt.isStandardBrowserWebWorkerEnv
            ? i.setContentType(!1)
            : i.setContentType('multipart/form-data;', !1));
        let a = new XMLHttpRequest();
        if (e.auth) {
          const g = e.auth.username || '',
            m = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : '';
          i.set('Authorization', 'Basic ' + btoa(g + ':' + m));
        }
        const c = Im(e.baseURL, e.url);
        a.open(e.method.toUpperCase(), Lm(c, e.params, e.paramsSerializer), !0),
          (a.timeout = e.timeout);
        function f() {
          if (!a) return;
          const g = pt.from(
              'getAllResponseHeaders' in a && a.getAllResponseHeaders()
            ),
            y = {
              data:
                !l || l === 'text' || l === 'json'
                  ? a.responseText
                  : a.response,
              status: a.status,
              statusText: a.statusText,
              headers: g,
              config: e,
              request: a,
            };
          RS(
            function (p) {
              n(p), s();
            },
            function (p) {
              r(p), s();
            },
            y
          ),
            (a = null);
        }
        if (
          ('onloadend' in a
            ? (a.onloadend = f)
            : (a.onreadystatechange = function () {
                !a ||
                  a.readyState !== 4 ||
                  (a.status === 0 &&
                    !(a.responseURL && a.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(f);
              }),
          (a.onabort = function () {
            a &&
              (r(new I('Request aborted', I.ECONNABORTED, e, a)), (a = null));
          }),
          (a.onerror = function () {
            r(new I('Network Error', I.ERR_NETWORK, e, a)), (a = null);
          }),
          (a.ontimeout = function () {
            let m = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const y = e.transitional || Am;
            e.timeoutErrorMessage && (m = e.timeoutErrorMessage),
              r(
                new I(
                  m,
                  y.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED,
                  e,
                  a
                )
              ),
              (a = null);
          }),
          nt.isStandardBrowserEnv)
        ) {
          const g =
            (e.withCredentials || TS(c)) &&
            e.xsrfCookieName &&
            OS.read(e.xsrfCookieName);
          g && i.set(e.xsrfHeaderName, g);
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in a &&
            S.forEach(i.toJSON(), function (m, y) {
              a.setRequestHeader(y, m);
            }),
          S.isUndefined(e.withCredentials) ||
            (a.withCredentials = !!e.withCredentials),
          l && l !== 'json' && (a.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            a.addEventListener('progress', zf(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            a.upload &&
            a.upload.addEventListener('progress', zf(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (g) => {
              a &&
                (r(!g || g.type ? new fo(null, e, a) : g),
                a.abort(),
                (a = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener('abort', u)));
        const h = LS(c);
        if (h && nt.protocols.indexOf(h) === -1) {
          r(new I('Unsupported protocol ' + h + ':', I.ERR_BAD_REQUEST, e));
          return;
        }
        a.send(o || null);
      });
    },
  Yo = { http: iS, xhr: $S };
S.forEach(Yo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const IS = {
  getAdapter: (e) => {
    e = S.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let o = 0;
      o < t && ((n = e[o]), !(r = S.isString(n) ? Yo[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new I(
            `Adapter ${n} is not supported by the environment`,
            'ERR_NOT_SUPPORT'
          )
        : new Error(
            S.hasOwnProp(Yo, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!S.isFunction(r)) throw new TypeError('adapter is not a function');
    return r;
  },
  adapters: Yo,
};
function vu(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new fo(null, e);
}
function Ff(e) {
  return (
    vu(e),
    (e.headers = pt.from(e.headers)),
    (e.data = mu.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    IS.getAdapter(e.adapter || Qa.adapter)(e).then(
      function (r) {
        return (
          vu(e),
          (r.data = mu.call(e, e.transformResponse, r)),
          (r.headers = pt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          $m(r) ||
            (vu(e),
            r &&
              r.response &&
              ((r.response.data = mu.call(e, e.transformResponse, r.response)),
              (r.response.headers = pt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Uf = (e) => (e instanceof pt ? e.toJSON() : e);
function Yn(e, t) {
  t = t || {};
  const n = {};
  function r(a, c, f) {
    return S.isPlainObject(a) && S.isPlainObject(c)
      ? S.merge.call({ caseless: f }, a, c)
      : S.isPlainObject(c)
      ? S.merge({}, c)
      : S.isArray(c)
      ? c.slice()
      : c;
  }
  function o(a, c, f) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a, f);
    } else return r(a, c, f);
  }
  function i(a, c) {
    if (!S.isUndefined(c)) return r(void 0, c);
  }
  function l(a, c) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, c);
  }
  function u(a, c, f) {
    if (f in t) return r(a, c);
    if (f in e) return r(void 0, a);
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u,
    headers: (a, c) => o(Uf(a), Uf(c), !0),
  };
  return (
    S.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = s[c] || o,
        h = f(e[c], t[c], c);
      (S.isUndefined(h) && f !== u) || (n[c] = h);
    }),
    n
  );
}
const Mm = '1.4.0',
  Ga = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Ga[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const Bf = {};
Ga.transitional = function (t, n, r) {
  function o(i, l) {
    return (
      '[Axios v' +
      Mm +
      "] Transitional option '" +
      i +
      "'" +
      l +
      (r ? '. ' + r : '')
    );
  }
  return (i, l, u) => {
    if (t === !1)
      throw new I(
        o(l, ' has been removed' + (n ? ' in ' + n : '')),
        I.ERR_DEPRECATED
      );
    return (
      n &&
        !Bf[l] &&
        ((Bf[l] = !0),
        console.warn(
          o(
            l,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(i, l, u) : !0
    );
  };
};
function MS(e, t, n) {
  if (typeof e != 'object')
    throw new I('options must be an object', I.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i];
    if (l) {
      const u = e[i],
        s = u === void 0 || l(u, i, e);
      if (s !== !0)
        throw new I('option ' + i + ' must be ' + s, I.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new I('Unknown option ' + i, I.ERR_BAD_OPTION);
  }
}
const ws = { assertOptions: MS, validators: Ga },
  Et = ws.validators;
class Ni {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Mf(), response: new Mf() });
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Yn(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      ws.assertOptions(
        r,
        {
          silentJSONParsing: Et.transitional(Et.boolean),
          forcedJSONParsing: Et.transitional(Et.boolean),
          clarifyTimeoutError: Et.transitional(Et.boolean),
        },
        !1
      ),
      o != null &&
        (S.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : ws.assertOptions(
              o,
              { encode: Et.function, serialize: Et.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let l;
    (l = i && S.merge(i.common, i[n.method])),
      l &&
        S.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          (m) => {
            delete i[m];
          }
        ),
      (n.headers = pt.concat(l, i));
    const u = [];
    let s = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == 'function' && y.runWhen(n) === !1) ||
        ((s = s && y.synchronous), u.unshift(y.fulfilled, y.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (y) {
      a.push(y.fulfilled, y.rejected);
    });
    let c,
      f = 0,
      h;
    if (!s) {
      const m = [Ff.bind(this), void 0];
      for (
        m.unshift.apply(m, u),
          m.push.apply(m, a),
          h = m.length,
          c = Promise.resolve(n);
        f < h;

      )
        c = c.then(m[f++], m[f++]);
      return c;
    }
    h = u.length;
    let g = n;
    for (f = 0; f < h; ) {
      const m = u[f++],
        y = u[f++];
      try {
        g = m(g);
      } catch (E) {
        y.call(this, E);
        break;
      }
    }
    try {
      c = Ff.call(this, g);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, h = a.length; f < h; ) c = c.then(a[f++], a[f++]);
    return c;
  }
  getUri(t) {
    t = Yn(this.defaults, t);
    const n = Im(t.baseURL, t.url);
    return Lm(n, t.params, t.paramsSerializer);
  }
}
S.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Ni.prototype[t] = function (n, r) {
    return this.request(
      Yn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
S.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, l, u) {
      return this.request(
        Yn(u || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: l,
        })
      );
    };
  }
  (Ni.prototype[t] = n()), (Ni.prototype[t + 'Form'] = n(!0));
});
const Zo = Ni;
class Xa {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const l = new Promise((u) => {
          r.subscribe(u), (i = u);
        }).then(o);
        return (
          (l.cancel = function () {
            r.unsubscribe(i);
          }),
          l
        );
      }),
      t(function (i, l, u) {
        r.reason || ((r.reason = new fo(i, l, u)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Xa(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const DS = Xa;
function zS(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function FS(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const Ss = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ss).forEach(([e, t]) => {
  Ss[t] = e;
});
const US = Ss;
function Dm(e) {
  const t = new Zo(e),
    n = wm(Zo.prototype.request, t);
  return (
    S.extend(n, Zo.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Dm(Yn(e, o));
    }),
    n
  );
}
const re = Dm(Qa);
re.Axios = Zo;
re.CanceledError = fo;
re.CancelToken = DS;
re.isCancel = $m;
re.VERSION = Mm;
re.toFormData = El;
re.AxiosError = I;
re.Cancel = re.CanceledError;
re.all = function (t) {
  return Promise.all(t);
};
re.spread = zS;
re.isAxiosError = FS;
re.mergeConfig = Yn;
re.AxiosHeaders = pt;
re.formToJSON = (e) => jm(S.isHTMLForm(e) ? new FormData(e) : e);
re.HttpStatusCode = US;
re.default = re;
const kl = re,
  BS = { isError: !1, error: '' },
  zm = so({
    name: 'error',
    initialState: BS,
    reducers: {
      setError(e, t) {
        (e.isError = !0), (e.error = t.payload);
      },
      resetError(e) {
        (e.error = ''), (e.isError = !1);
      },
    },
  }),
  { setError: Fm, resetError: WS } = zm.actions,
  HS = zm.reducer,
  VS = 'https://jsonplaceholder.typicode.com/posts',
  KS = async () => {
    let e;
    return await kl.get(VS).then((t) => (e = t.data)), e;
  };
function* qS() {
  try {
    const e = yield Jn(KS);
    yield Fa(500), yield an(xw(e));
  } catch {
    yield an(Fm('Posts request failed.')),
      yield an(Cw('Posts request failed.'));
  }
}
function* QS() {
  yield ym('posts/postsRequest', qS);
}
const GS = { postId: 0, isLoading: !1, comments: [], error: '' },
  Um = so({
    name: 'comments',
    initialState: GS,
    reducers: {
      commentsRequest(e, t) {
        (e.isLoading = !0), (e.postId = t.payload);
      },
      setComments(e, t) {
        (e.comments = t.payload), (e.isLoading = !1);
      },
      commentsRequestError(e, t) {
        (e.error = t.payload), (e.isLoading = !1);
      },
    },
  }),
  {
    commentsRequest: XS,
    setComments: JS,
    commentsRequestError: YS,
  } = Um.actions,
  ZS = Um.reducer,
  bS = 'https://jsonplaceholder.typicode.com/comments?postId=',
  eE = async (e) => {
    let t;
    return await kl.get(bS + e).then((n) => (t = n.data)), t;
  };
function* tE() {
  try {
    const e = yield rm(),
      t = yield Jn(eE, e.comments.postId);
    yield Fa(500), yield an(JS(t));
  } catch {
    YS('Comments request failed.');
  }
}
function* nE() {
  yield ww('comments/commentsRequest', tE);
}
const rE = { userId: 0, isLoading: !1, userPosts: [], error: '' },
  Bm = so({
    name: 'user',
    initialState: rE,
    reducers: {
      userRequest(e, t) {
        (e.error = ''), (e.isLoading = !0), (e.userId = t.payload);
      },
      setUser(e, t) {
        (e.user = t.payload.user),
          (e.userPosts = t.payload.userPosts),
          (e.isLoading = !1);
      },
      userRequestError(e, t) {
        (e.error = t.payload), (e.isLoading = !1), (e.userId = 0);
      },
    },
  }),
  { userRequest: oE, setUser: iE, userRequestError: lE } = Bm.actions,
  uE = Bm.reducer,
  sE = 'https://jsonplaceholder.typicode.com/users/',
  aE = (e) => `https://jsonplaceholder.typicode.com/users/${e}/posts`,
  cE = async (e) => {
    let t;
    return await kl.get(sE + e).then((n) => (t = n.data)), t;
  },
  fE = async (e) => {
    let t;
    return await kl.get(aE(e)).then((n) => (t = n.data)), t;
  };
function* dE() {
  try {
    const e = yield rm(),
      t = { user: {}, userPosts: [] };
    (t.user = yield Jn(cE, e.user.userId)),
      (t.userPosts = yield Jn(fE, e.user.userId)),
      yield Fa(500),
      yield an(iE(t));
  } catch {
    yield an(Fm('User request failed.')), yield an(lE('User request failed.'));
  }
}
function* pE() {
  yield ym('user/userRequest', dE);
}
const hE = { isActive: !1 },
  Wm = so({
    name: 'menu',
    initialState: hE,
    reducers: {
      setMenuIsActive(e) {
        e.isActive = !e.isActive;
      },
    },
  }),
  { setMenuIsActive: Hm } = Wm.actions,
  mE = Wm.reducer,
  Vm = vw();
function* vE() {
  yield M1([nE(), QS(), pE()]);
}
const yE = Zg({
  devTools: !0,
  reducer: { menu: mE, posts: kw, comments: ZS, user: uE, error: HS },
  middleware: [Vm],
});
Vm.run(vE);
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function to() {
  return (
    (to = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    to.apply(this, arguments)
  );
}
var _t;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(_t || (_t = {}));
const Wf = 'popstate';
function gE(e) {
  e === void 0 && (e = {});
  function t(o, i) {
    let {
      pathname: l = '/',
      search: u = '',
      hash: s = '',
    } = gn(o.location.hash.substr(1));
    return Es(
      '',
      { pathname: l, search: u, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(o, i) {
    let l = o.document.querySelector('base'),
      u = '';
    if (l && l.getAttribute('href')) {
      let s = o.location.href,
        a = s.indexOf('#');
      u = a === -1 ? s : s.slice(0, a);
    }
    return u + '#' + (typeof i == 'string' ? i : _i(i));
  }
  function r(o, i) {
    Pl(
      o.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(i) +
        ')'
    );
  }
  return SE(t, n, r, e);
}
function b(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Pl(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function wE() {
  return Math.random().toString(36).substr(2, 8);
}
function Hf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Es(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    to(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? gn(t) : t,
      { state: n, key: (t && t.key) || r || wE() }
    )
  );
}
function _i(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function gn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function SE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    u = _t.Pop,
    s = null,
    a = c();
  a == null && ((a = 0), l.replaceState(to({}, l.state, { idx: a }), ''));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    u = _t.Pop;
    let E = c(),
      p = E == null ? null : E - a;
    (a = E), s && s({ action: u, location: y.location, delta: p });
  }
  function h(E, p) {
    u = _t.Push;
    let d = Es(y.location, E, p);
    n && n(d, E), (a = c() + 1);
    let v = Hf(d, a),
      w = y.createHref(d);
    try {
      l.pushState(v, '', w);
    } catch {
      o.location.assign(w);
    }
    i && s && s({ action: u, location: y.location, delta: 1 });
  }
  function g(E, p) {
    u = _t.Replace;
    let d = Es(y.location, E, p);
    n && n(d, E), (a = c());
    let v = Hf(d, a),
      w = y.createHref(d);
    l.replaceState(v, '', w),
      i && s && s({ action: u, location: y.location, delta: 0 });
  }
  function m(E) {
    let p = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      d = typeof E == 'string' ? E : _i(E);
    return (
      b(
        p,
        'No window.location.(origin|href) available to create URL for href: ' +
          d
      ),
      new URL(d, p)
    );
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(o, l);
    },
    listen(E) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(Wf, f),
        (s = E),
        () => {
          o.removeEventListener(Wf, f), (s = null);
        }
      );
    },
    createHref(E) {
      return t(o, E);
    },
    createURL: m,
    encodeLocation(E) {
      let p = m(E);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: h,
    replace: g,
    go(E) {
      return l.go(E);
    },
  };
  return y;
}
var Vf;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Vf || (Vf = {}));
function EE(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? gn(t) : t,
    o = Ja(r.pathname || '/', n);
  if (o == null) return null;
  let i = Km(e);
  xE(i);
  let l = null;
  for (let u = 0; l == null && u < i.length; ++u) l = LE(i[u], $E(o));
  return l;
}
function Km(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, l, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || '' : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    s.relativePath.startsWith('/') &&
      (b(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = Bt([r, s.relativePath]),
      c = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (b(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".')
      ),
      Km(i.children, t, c, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: _E(a, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, l) => {
      var u;
      if (i.path === '' || !((u = i.path) != null && u.includes('?'))) o(i, l);
      else for (let s of qm(i.path)) o(i, l, s);
    }),
    t
  );
}
function qm(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let l = qm(r.join('/')),
    u = [];
  return (
    u.push(...l.map((s) => (s === '' ? i : [i, s].join('/')))),
    o && u.push(...l),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function xE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : TE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const CE = /^:\w+$/,
  kE = 3,
  PE = 2,
  RE = 1,
  OE = 10,
  NE = -2,
  Kf = (e) => e === '*';
function _E(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Kf) && (r += NE),
    t && (r += PE),
    n
      .filter((o) => !Kf(o))
      .reduce((o, i) => o + (CE.test(i) ? kE : i === '' ? RE : OE), r)
  );
}
function TE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function LE(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let u = n[l],
      s = l === n.length - 1,
      a = o === '/' ? t : t.slice(o.length) || '/',
      c = AE(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = u.route;
    i.push({
      params: r,
      pathname: Bt([o, c.pathname]),
      pathnameBase: zE(Bt([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== '/' && (o = Bt([o, c.pathnameBase]));
  }
  return i;
}
function AE(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = jE(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, '$1'),
    u = o.slice(1);
  return {
    params: r.reduce((a, c, f) => {
      if (c === '*') {
        let h = u[f] || '';
        l = i.slice(0, i.length - h.length).replace(/(.)\/+$/, '$1');
      }
      return (a[c] = IE(u[f] || '', c)), a;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function jE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Pl(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (l, u) => (r.push(u), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function $E(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Pl(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function IE(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Pl(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function Ja(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function ME(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? gn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : DE(n, t)) : t,
    search: FE(r),
    hash: UE(o),
  };
}
function DE(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function yu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Qm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Gm(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = gn(e))
    : ((o = to({}, e)),
      b(
        !o.pathname || !o.pathname.includes('?'),
        yu('?', 'pathname', 'search', o)
      ),
      b(
        !o.pathname || !o.pathname.includes('#'),
        yu('#', 'pathname', 'hash', o)
      ),
      b(!o.search || !o.search.includes('#'), yu('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    l = i ? '/' : o.pathname,
    u;
  if (r || l == null) u = n;
  else {
    let f = t.length - 1;
    if (l.startsWith('..')) {
      let h = l.split('/');
      for (; h[0] === '..'; ) h.shift(), (f -= 1);
      o.pathname = h.join('/');
    }
    u = f >= 0 ? t[f] : '/';
  }
  let s = ME(o, u),
    a = l && l !== '/' && l.endsWith('/'),
    c = (i || l === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (a || c) && (s.pathname += '/'), s;
}
const Bt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  zE = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  FE = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  UE = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function BE(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Xm = ['post', 'put', 'patch', 'delete'];
new Set(Xm);
const WE = ['get', ...Xm];
new Set(WE);
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ti() {
  return (
    (Ti = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ti.apply(this, arguments)
  );
}
const Ya = k.createContext(null),
  HE = k.createContext(null),
  rr = k.createContext(null),
  Rl = k.createContext(null),
  Jt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Jm = k.createContext(null);
function VE(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  po() || b(!1);
  let { basename: r, navigator: o } = k.useContext(rr),
    { hash: i, pathname: l, search: u } = Zm(e, { relative: n }),
    s = l;
  return (
    r !== '/' && (s = l === '/' ? r : Bt([r, l])),
    o.createHref({ pathname: s, search: u, hash: i })
  );
}
function po() {
  return k.useContext(Rl) != null;
}
function Ol() {
  return po() || b(!1), k.useContext(Rl).location;
}
function Ym(e) {
  k.useContext(rr).static || k.useLayoutEffect(e);
}
function KE() {
  let { isDataRoute: e } = k.useContext(Jt);
  return e ? ix() : qE();
}
function qE() {
  po() || b(!1);
  let e = k.useContext(Ya),
    { basename: t, navigator: n } = k.useContext(rr),
    { matches: r } = k.useContext(Jt),
    { pathname: o } = Ol(),
    i = JSON.stringify(Qm(r).map((s) => s.pathnameBase)),
    l = k.useRef(!1);
  return (
    Ym(() => {
      l.current = !0;
    }),
    k.useCallback(
      function (s, a) {
        if ((a === void 0 && (a = {}), !l.current)) return;
        if (typeof s == 'number') {
          n.go(s);
          return;
        }
        let c = Gm(s, JSON.parse(i), o, a.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Bt([t, c.pathname])),
          (a.replace ? n.replace : n.push)(c, a.state, a);
      },
      [t, n, i, o, e]
    )
  );
}
function QE() {
  let { matches: e } = k.useContext(Jt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Zm(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = k.useContext(Jt),
    { pathname: o } = Ol(),
    i = JSON.stringify(Qm(r).map((l) => l.pathnameBase));
  return k.useMemo(() => Gm(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function GE(e, t) {
  return XE(e, t);
}
function XE(e, t, n) {
  po() || b(!1);
  let { navigator: r } = k.useContext(rr),
    { matches: o } = k.useContext(Jt),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : '/';
  i && i.route;
  let s = Ol(),
    a;
  if (t) {
    var c;
    let y = typeof t == 'string' ? gn(t) : t;
    u === '/' || ((c = y.pathname) != null && c.startsWith(u)) || b(!1),
      (a = y);
  } else a = s;
  let f = a.pathname || '/',
    h = u === '/' ? f : f.slice(u.length) || '/',
    g = EE(e, { pathname: h }),
    m = ex(
      g &&
        g.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, l, y.params),
            pathname: Bt([
              u,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === '/'
                ? u
                : Bt([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && m
    ? k.createElement(
        Rl.Provider,
        {
          value: {
            location: Ti(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              a
            ),
            navigationType: _t.Pop,
          },
        },
        m
      )
    : m;
}
function JE() {
  let e = ox(),
    t = BE(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null;
  return k.createElement(
    k.Fragment,
    null,
    k.createElement('h2', null, 'Unexpected Application Error!'),
    k.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? k.createElement('pre', { style: o }, n) : null,
    i
  );
}
const YE = k.createElement(JE, null);
class ZE extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? k.createElement(
          Jt.Provider,
          { value: this.props.routeContext },
          k.createElement(Jm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function bE(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = k.useContext(Ya);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(Jt.Provider, { value: t }, r)
  );
}
function ex(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let u = i.findIndex(
      (s) => s.route.id && (l == null ? void 0 : l[s.route.id])
    );
    u >= 0 || b(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
  }
  return i.reduceRight((u, s, a) => {
    let c = s.route.id ? (l == null ? void 0 : l[s.route.id]) : null,
      f = null;
    n && (f = s.route.errorElement || YE);
    let h = t.concat(i.slice(0, a + 1)),
      g = () => {
        let m;
        return (
          c
            ? (m = f)
            : s.route.Component
            ? (m = k.createElement(s.route.Component, null))
            : s.route.element
            ? (m = s.route.element)
            : (m = u),
          k.createElement(bE, {
            match: s,
            routeContext: { outlet: u, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? k.createElement(ZE, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: c,
          children: g(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var xs;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate');
})(xs || (xs = {}));
var no;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId');
})(no || (no = {}));
function tx(e) {
  let t = k.useContext(Ya);
  return t || b(!1), t;
}
function nx(e) {
  let t = k.useContext(HE);
  return t || b(!1), t;
}
function rx(e) {
  let t = k.useContext(Jt);
  return t || b(!1), t;
}
function bm(e) {
  let t = rx(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || b(!1), n.route.id;
}
function ox() {
  var e;
  let t = k.useContext(Jm),
    n = nx(no.UseRouteError),
    r = bm(no.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function ix() {
  let { router: e } = tx(xs.UseNavigateStable),
    t = bm(no.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Ym(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, Ti({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Er(e) {
  b(!1);
}
function lx(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = _t.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  po() && b(!1);
  let u = t.replace(/^\/*/, '/'),
    s = k.useMemo(() => ({ basename: u, navigator: i, static: l }), [u, i, l]);
  typeof r == 'string' && (r = gn(r));
  let {
      pathname: a = '/',
      search: c = '',
      hash: f = '',
      state: h = null,
      key: g = 'default',
    } = r,
    m = k.useMemo(() => {
      let y = Ja(a, u);
      return y == null
        ? null
        : {
            location: { pathname: y, search: c, hash: f, state: h, key: g },
            navigationType: o,
          };
    }, [u, a, c, f, h, g, o]);
  return m == null
    ? null
    : k.createElement(
        rr.Provider,
        { value: s },
        k.createElement(Rl.Provider, { children: n, value: m })
      );
}
function ux(e) {
  let { children: t, location: n } = e;
  return GE(Cs(t), n);
}
var qf;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(qf || (qf = {}));
new Promise(() => {});
function Cs(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, o) => {
      if (!k.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === k.Fragment) {
        n.push.apply(n, Cs(r.props.children, i));
        return;
      }
      r.type !== Er && b(!1), !r.props.index || !r.props.children || b(!1);
      let l = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = Cs(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ks() {
  return (
    (ks = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ks.apply(this, arguments)
  );
}
function sx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function ax(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function cx(e, t) {
  return e.button === 0 && (!t || t === '_self') && !ax(e);
}
const fx = [
  'onClick',
  'relative',
  'reloadDocument',
  'replace',
  'state',
  'target',
  'to',
  'preventScrollReset',
];
function dx(e) {
  let { basename: t, children: n, window: r } = e,
    o = k.useRef();
  o.current == null && (o.current = gE({ window: r, v5Compat: !0 }));
  let i = o.current,
    [l, u] = k.useState({ action: i.action, location: i.location });
  return (
    k.useLayoutEffect(() => i.listen(u), [i]),
    k.createElement(lx, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
    })
  );
}
const px =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  hx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ps = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: u,
        target: s,
        to: a,
        preventScrollReset: c,
      } = t,
      f = sx(t, fx),
      { basename: h } = k.useContext(rr),
      g,
      m = !1;
    if (typeof a == 'string' && hx.test(a) && ((g = a), px))
      try {
        let d = new URL(window.location.href),
          v = a.startsWith('//') ? new URL(d.protocol + a) : new URL(a),
          w = Ja(v.pathname, h);
        v.origin === d.origin && w != null
          ? (a = w + v.search + v.hash)
          : (m = !0);
      } catch {}
    let y = VE(a, { relative: o }),
      E = mx(a, {
        replace: l,
        state: u,
        target: s,
        preventScrollReset: c,
        relative: o,
      });
    function p(d) {
      r && r(d), d.defaultPrevented || E(d);
    }
    return k.createElement(
      'a',
      ks({}, f, { href: g || y, onClick: m || i ? r : p, ref: n, target: s })
    );
  });
var Qf;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher');
})(Qf || (Qf = {}));
var Gf;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Gf || (Gf = {}));
function mx(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
    } = t === void 0 ? {} : t,
    u = KE(),
    s = Ol(),
    a = Zm(e, { relative: l });
  return k.useCallback(
    (c) => {
      if (cx(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : _i(s) === _i(a);
        u(e, { replace: f, state: o, preventScrollReset: i, relative: l });
      }
    },
    [s, u, a, r, o, n, e, i, l]
  );
}
const ho = () => wg(),
  or = eg,
  vx = () => {
    let e = document.createElement('div');
    (e.style.overflowY = 'scroll'),
      (e.style.width = '50px'),
      (e.style.height = '50px'),
      document.body.append(e);
    let t = e.offsetWidth - e.clientWidth;
    return e.remove(), t;
  },
  ev = (e) => {
    const t = k.useMemo(vx, []);
    return e ? { paddingRight: `${t}px` } : {};
  };
const Za = ({ text: e, toDo: t, localClassName: n }) =>
    P.jsx('button', { className: `button${n || ''}`, onClick: t, children: e }),
  yx = () => {
    const e = or(
        (o) =>
          o.posts.isLoading ||
          o.user.isLoading ||
          o.menu.isActive ||
          o.error.isError
      ),
      t = ho(),
      n = () => {
        t(Hm());
      },
      r = ev(e);
    return P.jsx('header', {
      className: 'header',
      style: r,
      children: P.jsx('div', {
        className: 'header__bar',
        children: P.jsx(Za, { text: 'Menu', toDo: n }),
      }),
    });
  };
const gx = () => P.jsx('footer', { className: 'footer' });
const ba = () => P.jsx('div', { className: 'loader' });
const Rs = (e) => e[0].toUpperCase() + e.slice(1);
const wx = ({ comment: e }) => {
    const { email: t, body: n } = e;
    return P.jsxs('div', {
      className: 'comment',
      children: [
        P.jsx('h2', { className: 'comment__title', children: t }),
        P.jsx('p', { className: 'comment__content', children: Rs(n) }),
      ],
    });
  },
  Sx = ({ postId: e }) => {
    const t = or((a) => a.comments),
      [n, r] = k.useState([]),
      [o, i] = k.useState(!1),
      l = ho(),
      u = () => {
        n.length === 0 ? l(XS(e)) : r([]), i(!o);
      },
      s = t.postId === e;
    return (
      k.useEffect(() => {
        o && s && r(t.comments);
      }, [t.comments]),
      P.jsxs(
        'div',
        {
          className: 'comment-list',
          children: [
            P.jsx(Za, { text: 'Comments', toDo: u }),
            o &&
              (t.isLoading && s
                ? P.jsx(ba, {})
                : n.length === 0
                ? P.jsx('h2', { children: 'Comments not found.' })
                : t.error
                ? P.jsx('h2', { children: t.error })
                : n.map((a) => P.jsx(wx, { comment: a }, a.id))),
          ],
        },
        e
      )
    );
  },
  Ex = ({ post: e }) => {
    const { userId: t, title: n, body: r, id: o } = e;
    return P.jsxs('div', {
      className: 'post',
      children: [
        P.jsxs('div', {
          className: 'post__head',
          children: [
            P.jsx(Ps, {
              to: `/React-Post-List/user/${t}`,
              className: 'post__avatar',
              children: P.jsx('img', {
                src: 'JasonStatham.jpg',
                alt: 'Avatar',
                className: 'post__avatar-img',
              }),
            }),
            P.jsx('div', {
              className: 'post__title',
              children: P.jsx('h2', { children: Rs(n) }),
            }),
          ],
        }),
        P.jsx('div', {
          className: 'post__body',
          children: P.jsx('p', { className: 'post__content', children: Rs(r) }),
        }),
        P.jsx(Sx, { postId: o }),
      ],
    });
  },
  tv = ({ posts: e }) =>
    P.jsx(P.Fragment, {
      children: P.jsx('div', {
        className: 'post-list',
        children:
          e.length === 0
            ? P.jsx('h2', { children: 'Posts not found.' })
            : e.map((t) => P.jsx(Ex, { post: t }, t.id)),
      }),
    }),
  xx = () => {
    const e = or((n) => n.posts),
      t = ho();
    return (
      k.useEffect(() => {
        !e.posts.length && t(Ew());
      }, []),
      e.isLoading
        ? P.jsx(ba, {})
        : e.error
        ? P.jsx('h2', { children: e.error })
        : P.jsx(tv, { posts: e.posts })
    );
  };
const Cx = () => {
  var o, i, l, u, s, a, c;
  const e = or((f) => f.user),
    { userId: t } = QE(),
    n = ho();
  k.useEffect(() => {
    n(oE(t));
  }, []);
  const r = () => {
    history.back();
  };
  return e.isLoading
    ? P.jsx(ba, {})
    : e.error
    ? P.jsx('h2', { children: e.error })
    : P.jsxs('div', {
        className: 'user',
        children: [
          P.jsx(Za, {
            text: 'Back',
            toDo: r,
            localClassName: ' user__back-btn',
          }),
          P.jsxs('div', {
            className: 'user__head',
            children: [
              P.jsx('div', {
                className: 'user__avatar',
                children: P.jsx('img', {
                  src: '/React-Post-List/JasonStatham.jpg',
                  alt: `${(o = e.user) == null ? void 0 : o.username}'s avatar`,
                  className: 'user__avatar-img',
                }),
              }),
              P.jsxs('div', {
                className: 'user__info',
                children: [
                  P.jsx('h2', {
                    className: 'user__info-item',
                    children: `Name: ${
                      (i = e.user) == null ? void 0 : i.name
                    } (${(l = e.user) == null ? void 0 : l.username})`,
                  }),
                  P.jsx('h2', {
                    className: 'user__info-item',
                    children: `Email: ${
                      (u = e.user) == null ? void 0 : u.email
                    }`,
                  }),
                  P.jsx('h2', {
                    className: 'user__info-item',
                    children: `Phone: ${
                      (s = e.user) == null ? void 0 : s.phone
                    }`,
                  }),
                  P.jsx('h2', {
                    className: 'user__info-item',
                    children: `Address: ${
                      (a = e.user) == null ? void 0 : a.address.city
                    }, ${(c = e.user) == null ? void 0 : c.address.street}`,
                  }),
                ],
              }),
            ],
          }),
          P.jsx('div', {
            className: 'user__posts',
            children: P.jsx(tv, { posts: e.userPosts }),
          }),
        ],
      });
};
const kx = () =>
  P.jsx('div', {
    className: 'about',
    children: P.jsx('h1', { children: 'About' }),
  });
const Px = () => {
  const e = or((i) => i.menu),
    t = ho(),
    n = () => {
      t(Hm());
    },
    r = () => {
      t(WS());
    },
    o = () => {
      n(), r();
    };
  return (
    k.useEffect(() => {
      e.isActive
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = '');
    }, [e.isActive]),
    P.jsx('div', {
      className: `menu${e.isActive && ' menu_active'}`,
      onClick: n,
      children: P.jsx('div', {
        className: 'menu__wrapper',
        children: P.jsx('div', {
          className: 'menu__content',
          onClick: (i) => i.stopPropagation(),
          children: P.jsxs('ul', {
            className: 'menu__nav-list',
            children: [
              P.jsx('li', {
                className: 'menu__nav-item',
                children: P.jsx(Ps, { to: '', onClick: o, children: 'Home' }),
              }),
              P.jsx('li', {
                className: 'menu__nav-item',
                children: P.jsx(Ps, {
                  to: 'about',
                  onClick: o,
                  children: 'About',
                }),
              }),
            ],
          }),
        }),
      }),
    })
  );
};
const Rx = ({ children: e }) => {
  const t = or(
      (r) =>
        r.posts.isLoading ||
        r.user.isLoading ||
        r.menu.isActive ||
        r.error.isError
    ),
    n = ev(t);
  return P.jsx('main', { className: 'main', style: n, children: e });
};
function Ox() {
  return P.jsx(vg, {
    store: yE,
    children: P.jsxs(dx, {
      children: [
        P.jsx(yx, {}),
        P.jsx(Px, {}),
        P.jsx(Rx, {
          children: P.jsxs(ux, {
            children: [
              P.jsx(Er, { path: '/React-Post-List/', element: P.jsx(xx, {}) }),
              P.jsx(Er, {
                path: '/React-Post-List/user/:userId',
                element: P.jsx(Cx, {}),
              }),
              P.jsx(Er, {
                path: '/React-Post-List/about',
                element: P.jsx(kx, {}),
              }),
              P.jsx(Er, {
                path: '*',
                element: P.jsx('h1', { children: 'Page is not found' }),
              }),
            ],
          }),
        }),
        P.jsx(gx, {}),
      ],
    }),
  });
}
gu.createRoot(document.getElementById('root')).render(
  P.jsx(od.StrictMode, { children: P.jsx(Ox, {}) })
);
