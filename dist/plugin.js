!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('rxjs'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : 'function' == typeof define && define.amd
    ? define(['ng.common', 'tslib', 'ng.forms', 'ngx-translate.core', 'rxjs', 'wako-app.mobile-sdk', 'ng.core', 'ionic.angular'], e)
    : 'object' == typeof exports
    ? (exports.plugin = e(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('rxjs'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : (t.plugin = e(
        t['ng.common'],
        t.tslib,
        t['ng.forms'],
        t['ngx-translate.core'],
        t.rxjs,
        t['wako-app.mobile-sdk'],
        t['ng.core'],
        t['ionic.angular']
      ));
})('undefined' != typeof self ? self : this, function (t, e, n, r, o, i, s, c) {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })({
    0: function (t, e, n) {
      t.exports = n('zUnb');
    },
    '0S4P': function (e, n) {
      e.exports = t;
    },
    '17wl': function (t, n) {
      t.exports = e;
    },
    '3xDq': function (t, e) {
      t.exports = n;
    },
    TGDj: function (t, e) {
      t.exports = r;
    },
    Vgaj: function (t, e) {
      t.exports = o;
    },
    doF0: function (t, e) {
      t.exports = i;
    },
    vOrQ: function (t, e) {
      t.exports = s;
    },
    z1lQ: function (t, e) {
      t.exports = c;
    },
    zUnb: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'PluginModule', function () {
          return G;
        });
      var r = n('17wl'),
        o = n('0S4P'),
        i = n('z1lQ'),
        s = n('doF0'),
        c = n('TGDj');
      function u() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        Object(s.wakoLog)('plugin.my-plugin', t);
      }
      var a = n('vOrQ'),
        l = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.translate = e), n;
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.initialize = function () {
              u('plugin initialized');
            }),
            (e.prototype.afterInstall = function () {
              u('plugin installed');
            }),
            (e.prototype.afterUpdate = function () {
              u('plugin updated');
            }),
            (e.prototype.setTranslation = function (t, e) {
              this.translate.setDefaultLang(t), this.translate.use(t), this.translate.setTranslation(t, e);
            }),
            (e.prototype.customAction = function (t, e) {}),
            (e.ɵfac = function (t) {
              return new (t || e)(a['\u0275\u0275inject'](c.TranslateService));
            }),
            (e.ɵprov = a['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(s.PluginBaseService),
        p = (function () {
          function t(t, e) {
            (this.toastCtrl = t), (this.translateService = e);
          }
          return (
            (t.prototype.simpleMessage = function (t, e, n, r) {
              var o = this;
              void 0 === n && (n = 2e3),
                void 0 === r && (r = 'top'),
                this.translateService.get(t, e).subscribe(function (t) {
                  o.toastCtrl.create({ message: t, mode: 'ios', position: r, duration: n }).then(function (t) {
                    t.present();
                  });
                });
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(a['\u0275\u0275inject'](i.ToastController), a['\u0275\u0275inject'](c.TranslateService));
            }),
            (t.ɵprov = a['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      function f(t, e) {
        if (1 & t) {
          var n = a['\u0275\u0275getCurrentView']();
          a['\u0275\u0275elementStart'](0, 'ion-card-content'),
            a['\u0275\u0275elementStart'](1, 'ion-button', 4),
            a['\u0275\u0275listener']('click', function () {
              a['\u0275\u0275restoreView'](n);
              var t = a['\u0275\u0275nextContext']();
              return t.openImdb(t.movie.imdbId);
            }),
            a['\u0275\u0275text'](2, ' Open on Imdb '),
            a['\u0275\u0275elementEnd'](),
            a['\u0275\u0275elementEnd']();
        }
      }
      function d(t, e) {
        if (1 & t) {
          var n = a['\u0275\u0275getCurrentView']();
          a['\u0275\u0275elementStart'](0, 'ion-card-content'),
            a['\u0275\u0275elementStart'](1, 'ion-button', 4),
            a['\u0275\u0275listener']('click', function () {
              a['\u0275\u0275restoreView'](n);
              var t = a['\u0275\u0275nextContext']();
              return t.openImdb(t.show.imdbId);
            }),
            a['\u0275\u0275text'](2, ' Open on Imdb '),
            a['\u0275\u0275elementEnd'](),
            a['\u0275\u0275elementEnd']();
        }
      }
      var h = (function () {
          function t(t, e) {
            (this.modalCtrl = t), (this.toastService = e);
          }
          return (
            (t.prototype.ngOnInit = function () {
              this.toastService.simpleMessage('openMedia', { imdbId: this.movie ? this.movie.imdbId : this.show.imdbId });
            }),
            (t.prototype.dismiss = function () {
              this.modalCtrl.dismiss();
            }),
            (t.prototype.openImdb = function (t) {
              s.BrowserService.open('http://www.imdb.com/title/' + t + '/');
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(a['\u0275\u0275directiveInject'](i.ModalController), a['\u0275\u0275directiveInject'](p));
            }),
            (t.ɵcmp = a['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['app-media-modal']],
              decls: 11,
              vars: 3,
              consts: [
                ['slot', 'end'],
                ['color', 'light', 3, 'click'],
                ['name', 'close'],
                [4, 'ngIf'],
                [3, 'click']
              ],
              template: function (t, e) {
                1 & t &&
                  (a['\u0275\u0275elementStart'](0, 'ion-header'),
                  a['\u0275\u0275elementStart'](1, 'ion-toolbar'),
                  a['\u0275\u0275elementStart'](2, 'ion-title'),
                  a['\u0275\u0275text'](3),
                  a['\u0275\u0275elementEnd'](),
                  a['\u0275\u0275elementStart'](4, 'ion-buttons', 0),
                  a['\u0275\u0275elementStart'](5, 'ion-button', 1),
                  a['\u0275\u0275listener']('click', function () {
                    return e.dismiss();
                  }),
                  a['\u0275\u0275element'](6, 'ion-icon', 2),
                  a['\u0275\u0275elementEnd'](),
                  a['\u0275\u0275elementEnd'](),
                  a['\u0275\u0275elementEnd'](),
                  a['\u0275\u0275elementEnd'](),
                  a['\u0275\u0275elementStart'](7, 'ion-content'),
                  a['\u0275\u0275elementStart'](8, 'ion-card'),
                  a['\u0275\u0275template'](9, f, 3, 0, 'ion-card-content', 3),
                  a['\u0275\u0275template'](10, d, 3, 0, 'ion-card-content', 3),
                  a['\u0275\u0275elementEnd'](),
                  a['\u0275\u0275elementEnd']()),
                  2 & t &&
                    (a['\u0275\u0275advance'](3),
                    a['\u0275\u0275textInterpolate1'](' ', e.movie ? e.movie.title : e.show.title + ' ' + e.episode.code, ' '),
                    a['\u0275\u0275advance'](6),
                    a['\u0275\u0275property']('ngIf', e.movie),
                    a['\u0275\u0275advance'](1),
                    a['\u0275\u0275property']('ngIf', e.show));
              },
              directives: [
                i.IonHeader,
                i.IonToolbar,
                i.IonTitle,
                i.IonButtons,
                i.IonButton,
                i.IonIcon,
                i.IonContent,
                i.IonCard,
                o.NgIf,
                i.IonCardContent
              ],
              styles: ['']
            })),
            t
          );
        })(),
        b = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.modalCtrl = e), n;
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.setMovie = function (t) {
              this.movie = t;
            }),
            (e.prototype.openMovie = function () {
              this.modalCtrl.create({ component: h, componentProps: { movie: this.movie } }).then(function (t) {
                t.present();
              });
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(a['\u0275\u0275directiveInject'](i.ModalController));
            }),
            (e.ɵcmp = a['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['ng-component']],
              features: [a['\u0275\u0275InheritDefinitionFeature']],
              decls: 2,
              vars: 2,
              consts: [['expand', 'block', 'color', 'custom', 3, 'click']],
              template: function (t, e) {
                1 & t &&
                  (a['\u0275\u0275elementStart'](0, 'ion-button', 0),
                  a['\u0275\u0275listener']('click', function () {
                    return e.openMovie();
                  }),
                  a['\u0275\u0275text'](1),
                  a['\u0275\u0275elementEnd']()),
                  2 & t &&
                    (a['\u0275\u0275advance'](1),
                    a['\u0275\u0275textInterpolate2'](' My movie : ', e.movie.title, ' ', e.movie.traktId, '\n'));
              },
              directives: [i.IonButton],
              styles: ['ion-button[_ngcontent-%COMP%]{background-color:#d24f92!important;border-radius:5px}']
            })),
            e
          );
        })(s.MovieDetailBaseComponent),
        m = (function () {
          function t(t) {
            this.translate = t;
          }
          return (
            (t.prototype.ngOnInit = function () {
              u('Current lang', this.translate.currentLang), u('Test instant translate', this.translate.instant('settings.title'));
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(a['\u0275\u0275directiveInject'](c.TranslateService));
            }),
            (t.ɵcmp = a['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['ng-component']],
              decls: 5,
              vars: 3,
              template: function (t, e) {
                1 & t &&
                  (a['\u0275\u0275elementStart'](0, 'p'),
                  a['\u0275\u0275text'](1),
                  a['\u0275\u0275pipe'](2, 'translate'),
                  a['\u0275\u0275elementEnd'](),
                  a['\u0275\u0275elementStart'](3, 'p'),
                  a['\u0275\u0275text'](4, 'My plugin'),
                  a['\u0275\u0275elementEnd']()),
                  2 & t &&
                    (a['\u0275\u0275advance'](1),
                    a['\u0275\u0275textInterpolate1'](' ', a['\u0275\u0275pipeBind1'](2, 1, 'settings.title'), '\n'));
              },
              pipes: [c.TranslatePipe],
              styles: ['']
            })),
            t
          );
        })(),
        y = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.modalCtrl = e), n;
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.setShowEpisode = function (t, e) {
              (this.show = t), (this.episode = e);
            }),
            (e.prototype.openEpisode = function () {
              this.modalCtrl.create({ component: h, componentProps: { show: this.show, episode: this.episode } }).then(function (t) {
                t.present();
              });
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(a['\u0275\u0275directiveInject'](i.ModalController));
            }),
            (e.ɵcmp = a['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['ng-component']],
              features: [a['\u0275\u0275InheritDefinitionFeature']],
              decls: 2,
              vars: 2,
              consts: [['expand', 'block', 'color', 'custom', 3, 'click']],
              template: function (t, e) {
                1 & t &&
                  (a['\u0275\u0275elementStart'](0, 'ion-button', 0),
                  a['\u0275\u0275listener']('click', function () {
                    return e.openEpisode();
                  }),
                  a['\u0275\u0275text'](1),
                  a['\u0275\u0275elementEnd']()),
                  2 & t &&
                    (a['\u0275\u0275advance'](1),
                    a['\u0275\u0275textInterpolate2'](' Show : ', e.show.title, ' - Episode ', e.episode.code, '\n'));
              },
              directives: [i.IonButton],
              styles: ['ion-button[_ngcontent-%COMP%]{background-color:#d26a1f!important;border-radius:5px}']
            })),
            e
          );
        })(s.EpisodeDetailBaseComponent),
        v = n('3xDq'),
        g = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {}),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = a['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['app-plugin-detail']],
              decls: 2,
              vars: 0,
              template: function (t, e) {
                1 & t &&
                  (a['\u0275\u0275elementStart'](0, 'p'),
                  a['\u0275\u0275text'](1, ' This is the plugin detail\n'),
                  a['\u0275\u0275elementEnd']());
              },
              styles: ['']
            })),
            t
          );
        })(),
        _ = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.toastService = e), n;
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.setShowEpisode = function (t, e) {
              (this.show = t), (this.episode = e);
            }),
            (e.prototype.openEpisode = function () {
              this.toastService.simpleMessage('Click on episode: ' + this.episode.title);
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(a['\u0275\u0275directiveInject'](p));
            }),
            (e.ɵcmp = a['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['ng-component']],
              features: [a['\u0275\u0275InheritDefinitionFeature']],
              decls: 4,
              vars: 0,
              consts: [
                [1, 'ion-item-options'],
                [3, 'click'],
                [1, 'ion-item-detail'],
                ['name', 'beer-outline']
              ],
              template: function (t, e) {
                1 & t &&
                  (a['\u0275\u0275elementStart'](0, 'div', 0),
                  a['\u0275\u0275elementStart'](1, 'ion-item-option', 1),
                  a['\u0275\u0275listener']('click', function () {
                    return e.openEpisode();
                  }),
                  a['\u0275\u0275elementStart'](2, 'div', 2),
                  a['\u0275\u0275element'](3, 'ion-icon', 3),
                  a['\u0275\u0275elementEnd'](),
                  a['\u0275\u0275elementEnd'](),
                  a['\u0275\u0275elementEnd']());
              },
              directives: [i.IonItemOption, i.IonIcon],
              styles: [
                'ion-button[_ngcontent-%COMP%]{background-color:#d26a1f!important;border-radius:5px}.ion-item-options[_ngcontent-%COMP%]{display:flex;height:100%}.ion-item-options[_ngcontent-%COMP%]   .ion-item-detail[_ngcontent-%COMP%]{width:60px;display:grid;text-align:center}.ion-item-options[_ngcontent-%COMP%]   .ion-item-detail[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2em;width:100%}.ion-item-options[_ngcontent-%COMP%]   .ion-item-detail[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{margin-top:3px;font-size:8px;text-transform:none}'
              ]
            })),
            e
          );
        })(s.EpisodeDetailBaseComponent);
      function w(t) {
        return 'function' == typeof t;
      }
      var x = !1,
        S = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            x = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return x;
          }
        };
      function E(t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
      var O = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (S.useDeprecatedSynchronousErrorHandling) throw t;
            E(t);
          },
          complete: function () {}
        },
        I = (function () {
          return (
            Array.isArray ||
            function (t) {
              return t && 'number' == typeof t.length;
            }
          );
        })();
      function C(t) {
        return null !== t && 'object' == typeof t;
      }
      var j = (function () {
          function t(t) {
            return (
              Error.call(this),
              (this.message = t
                ? t.length +
                  ' errors occurred during unsubscription:\n' +
                  t
                    .map(function (t, e) {
                      return e + 1 + ') ' + t.toString();
                    })
                    .join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = t),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        k = (function () {
          function t(t) {
            (this.closed = !1), (this._parentOrParents = null), (this._subscriptions = null), t && (this._unsubscribe = t);
          }
          return (
            (t.prototype.unsubscribe = function () {
              var e;
              if (!this.closed) {
                var n = this._parentOrParents,
                  r = this._unsubscribe,
                  o = this._subscriptions;
                if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), n instanceof t)) n.remove(this);
                else if (null !== n) for (var i = 0; i < n.length; ++i) n[i].remove(this);
                if (w(r))
                  try {
                    r.call(this);
                  } catch (u) {
                    e = u instanceof j ? P(u.errors) : [u];
                  }
                if (I(o)) {
                  i = -1;
                  for (var s = o.length; ++i < s; ) {
                    var c = o[i];
                    if (C(c))
                      try {
                        c.unsubscribe();
                      } catch (u) {
                        (e = e || []), u instanceof j ? (e = e.concat(P(u.errors))) : e.push(u);
                      }
                  }
                }
                if (e) throw new j(e);
              }
            }),
            (t.prototype.add = function (e) {
              var n = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case 'function':
                  n = new t(e);
                case 'object':
                  if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    var r = n;
                    (n = new t())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
              }
              var o = n._parentOrParents;
              if (null === o) n._parentOrParents = this;
              else if (o instanceof t) {
                if (o === this) return n;
                n._parentOrParents = [o, this];
              } else {
                if (-1 !== o.indexOf(this)) return n;
                o.push(this);
              }
              var i = this._subscriptions;
              return null === i ? (this._subscriptions = [n]) : i.push(n), n;
            }),
            (t.prototype.remove = function (t) {
              var e = this._subscriptions;
              if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
              }
            }),
            (t.EMPTY = (function (t) {
              return (t.closed = !0), t;
            })(new t())),
            t
          );
        })();
      function P(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof j ? e.errors : e);
        }, []);
      }
      var M = (function () {
          return 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
        })(),
        T = (function (t) {
          function e(n, r, o) {
            var i = t.call(this) || this;
            switch (
              ((i.syncErrorValue = null), (i.syncErrorThrown = !1), (i.syncErrorThrowable = !1), (i.isStopped = !1), arguments.length)
            ) {
              case 0:
                i.destination = O;
                break;
              case 1:
                if (!n) {
                  i.destination = O;
                  break;
                }
                if ('object' == typeof n) {
                  n instanceof e
                    ? ((i.syncErrorThrowable = n.syncErrorThrowable), (i.destination = n), n.add(i))
                    : ((i.syncErrorThrowable = !0), (i.destination = new D(i, n)));
                  break;
                }
              default:
                (i.syncErrorThrowable = !0), (i.destination = new D(i, n, r, o));
            }
            return i;
          }
          return (
            r.__extends(e, t),
            (e.prototype[M] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              var o = new e(t, n, r);
              return (o.syncErrorThrowable = !1), o;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed || ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            e
          );
        })(k),
        D = (function (t) {
          function e(e, n, r, o) {
            var i,
              s = t.call(this) || this;
            s._parentSubscriber = e;
            var c = s;
            return (
              w(n)
                ? (i = n)
                : n &&
                  ((i = n.next),
                  (r = n.error),
                  (o = n.complete),
                  n !== O &&
                    (w((c = Object.create(n)).unsubscribe) && s.add(c.unsubscribe.bind(c)), (c.unsubscribe = s.unsubscribe.bind(s)))),
              (s._context = c),
              (s._next = i),
              (s._error = r),
              (s._complete = o),
              s
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                S.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber,
                  n = S.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (e.syncErrorThrowable) n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : E(t), this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  E(t);
                }
              }
            }),
            (e.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  S.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (n) {
                if ((this.unsubscribe(), S.useDeprecatedSynchronousErrorHandling)) throw n;
                E(n);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, n) {
              if (!S.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
              try {
                e.call(this._context, n);
              } catch (r) {
                return S.useDeprecatedSynchronousErrorHandling ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0) : (E(r), !0);
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
            }),
            e
          );
        })(T),
        q = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, o) {
              this.destination.next(e);
            }),
            (e.prototype.notifyError = function (t, e) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.destination.complete();
            }),
            e
          );
        })(T),
        H = (function (t) {
          function e(e, n, r) {
            var o = t.call(this) || this;
            return (o.parent = e), (o.outerValue = n), (o.outerIndex = r), (o.index = 0), o;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t, this), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            e
          );
        })(T);
      function V() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      var B = V(),
        U = (function () {
          return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
        })();
      function A(t) {
        return t;
      }
      function z(t) {
        return 0 === t.length
          ? A
          : 1 === t.length
          ? t[0]
          : function (e) {
              return t.reduce(function (t, e) {
                return e(t);
              }, e);
            };
      }
      var F = (function () {
        function t(t) {
          (this._isScalar = !1), t && (this._subscribe = t);
        }
        return (
          (t.prototype.lift = function (e) {
            var n = new t();
            return (n.source = this), (n.operator = e), n;
          }),
          (t.prototype.subscribe = function (t, e, n) {
            var r = this.operator,
              o = (function (t, e, n) {
                if (t) {
                  if (t instanceof T) return t;
                  if (t[M]) return t[M]();
                }
                return t || e || n ? new T(t, e, n) : new T(O);
              })(t, e, n);
            if (
              (o.add(
                r
                  ? r.call(o, this.source)
                  : this.source || (S.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable)
                  ? this._subscribe(o)
                  : this._trySubscribe(o)
              ),
              S.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && ((o.syncErrorThrowable = !1), o.syncErrorThrown))
            )
              throw o.syncErrorValue;
            return o;
          }),
          (t.prototype._trySubscribe = function (t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              S.useDeprecatedSynchronousErrorHandling && ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    var e = t.destination;
                    if (t.closed || t.isStopped) return !1;
                    t = e && e instanceof T ? e : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }),
          (t.prototype.forEach = function (t, e) {
            var n = this;
            return new (e = R(e))(function (e, r) {
              var o;
              o = n.subscribe(
                function (e) {
                  try {
                    t(e);
                  } catch (n) {
                    r(n), o && o.unsubscribe();
                  }
                },
                r,
                e
              );
            });
          }),
          (t.prototype._subscribe = function (t) {
            var e = this.source;
            return e && e.subscribe(t);
          }),
          (t.prototype[U] = function () {
            return this;
          }),
          (t.prototype.pipe = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return 0 === t.length ? this : z(t)(this);
          }),
          (t.prototype.toPromise = function (t) {
            var e = this;
            return new (t = R(t))(function (t, n) {
              var r;
              e.subscribe(
                function (t) {
                  return (r = t);
                },
                function (t) {
                  return n(t);
                },
                function () {
                  return t(r);
                }
              );
            });
          }),
          (t.create = function (e) {
            return new t(e);
          }),
          t
        );
      })();
      function R(t) {
        if ((t || (t = S.Promise || Promise), !t)) throw new Error('no Promise impl found');
        return t;
      }
      var Y = (function () {
          function t(t) {
            this.selector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new L(t, this.selector, this.caught));
            }),
            t
          );
        })(),
        L = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return (o.selector = n), (o.caught = r), o;
          }
          return (
            r.__extends(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = void 0;
                try {
                  n = this.selector(e, this.caught);
                } catch (i) {
                  return void t.prototype.error.call(this, i);
                }
                this._unsubscribeAndRecycle();
                var r = new H(this, void 0, void 0);
                this.add(r);
                var o = (function (t, e, n, r, o) {
                  if ((void 0 === o && (o = new H(t, void 0, void 0)), !o.closed))
                    return e instanceof F
                      ? e.subscribe(o)
                      : (function (t) {
                          if (t && 'function' == typeof t[U])
                            return (
                              (i = t),
                              function (t) {
                                var e = i[U]();
                                if ('function' != typeof e.subscribe)
                                  throw new TypeError('Provided object does not correctly implement Symbol.observable');
                                return e.subscribe(t);
                              }
                            );
                          if ((o = t) && 'number' == typeof o.length && 'function' != typeof o)
                            return (
                              (r = t),
                              function (t) {
                                for (var e = 0, n = r.length; e < n && !t.closed; e++) t.next(r[e]);
                                t.complete();
                              }
                            );
                          if (
                            (function (t) {
                              return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
                            })(t)
                          )
                            return (
                              (n = t),
                              function (t) {
                                return (
                                  n
                                    .then(
                                      function (e) {
                                        t.closed || (t.next(e), t.complete());
                                      },
                                      function (e) {
                                        return t.error(e);
                                      }
                                    )
                                    .then(null, E),
                                  t
                                );
                              }
                            );
                          if (t && 'function' == typeof t[B])
                            return (
                              (e = t),
                              function (t) {
                                for (var n = e[B](); ; ) {
                                  var r = n.next();
                                  if (r.done) {
                                    t.complete();
                                    break;
                                  }
                                  if ((t.next(r.value), t.closed)) break;
                                }
                                return (
                                  'function' == typeof n.return &&
                                    t.add(function () {
                                      n.return && n.return();
                                    }),
                                  t
                                );
                              }
                            );
                          var e,
                            n,
                            r,
                            o,
                            i,
                            s = C(t) ? 'an invalid object' : "'" + t + "'";
                          throw new TypeError(
                            'You provided ' +
                              s +
                              ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
                          );
                        })(e)(o);
                })(this, n, 0, 0, r);
                o !== r && this.add(o);
              }
            }),
            e
          );
        })(q),
        N = n('Vgaj'),
        Q = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.toastService = e), n;
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.setShow = function (t) {
              this.show = t;
            }),
            (e.prototype.clickShow = function () {
              var t,
                e = this;
              s.KodiAppService.checkAndConnectToCurrentHost()
                .pipe(
                  ((t = function (t) {
                    return (
                      u('Error on kodi', t),
                      e.toastService.simpleMessage(
                        'hostUnreachable' === t ? 'My Addon: Your kodi host is unreachable' : 'My Addon: You must add a kodi host'
                      ),
                      N.NEVER
                    );
                  }),
                  function (e) {
                    var n = new Y(t),
                      r = e.lift(n);
                    return (n.caught = r);
                  })
                )
                .subscribe(function () {
                  var t =
                    'plugin://plugin.video.youtube/?action=play_video&videoid=' +
                    new URLSearchParams(e.show.trailer.split('?')[1]).get('v');
                  u('Opening URL', t), s.KodiPlayerOpenForm.submit(t).subscribe();
                });
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(a['\u0275\u0275directiveInject'](p));
            }),
            (e.ɵcmp = a['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['ng-component']],
              features: [a['\u0275\u0275InheritDefinitionFeature']],
              decls: 2,
              vars: 0,
              consts: [['expand', 'block', 'color', 'custom', 3, 'click']],
              template: function (t, e) {
                1 & t &&
                  (a['\u0275\u0275elementStart'](0, 'ion-button', 0),
                  a['\u0275\u0275listener']('click', function () {
                    return e.clickShow();
                  }),
                  a['\u0275\u0275text'](1, ' Open trailer on kodi\n'),
                  a['\u0275\u0275elementEnd']());
              },
              directives: [i.IonButton],
              styles: ['ion-button[_ngcontent-%COMP%]{background-color:#d20012!important;border-radius:5px}']
            })),
            e
          );
        })(s.ShowDetailBaseComponent),
        G = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(e, t),
            (e.pluginService = l),
            (e.settingsComponent = m),
            (e.movieComponent = b),
            (e.episodeComponent = y),
            (e.episodeItemOptionComponent = _),
            (e.showComponent = Q),
            (e.pluginDetailComponent = g),
            (e.ɵmod = a['\u0275\u0275defineNgModule']({ type: e })),
            (e.ɵinj = a['\u0275\u0275defineInjector']({
              factory: function (t) {
                return K(t || e);
              },
              providers: [l, p],
              imports: [[o.CommonModule, v.FormsModule, i.IonicModule.forRoot(), c.TranslateModule.forRoot()]]
            })),
            e
          );
        })(s.PluginBaseModule),
        K = a['\u0275\u0275getInheritedFactory'](G);
      e.default = G;
    }
  });
});
