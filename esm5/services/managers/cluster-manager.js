import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import 'js-marker-clusterer-universal';
import { GoogleMapsAPIWrapper, MarkerManager } from '@agm/core';
var ClusterManager = /** @class */ (function (_super) {
    tslib_1.__extends(ClusterManager, _super);
    function ClusterManager(_mapsWrapper, _zone) {
        var _this = _super.call(this, _mapsWrapper, _zone) || this;
        _this._mapsWrapper = _mapsWrapper;
        _this._zone = _zone;
        _this._clustererInstance = new Promise(function (resolver) {
            _this._resolver = resolver;
        });
        return _this;
    }
    ClusterManager.prototype.init = function (options) {
        var _this = this;
        this._mapsWrapper.getNativeMap().then(function (map) {
            var clusterer = new MarkerClusterer(map, [], options);
            _this._resolver(clusterer);
        });
    };
    ClusterManager.prototype.getClustererInstance = function () {
        return this._clustererInstance;
    };
    ClusterManager.prototype.addMarker = function (marker) {
        var clusterPromise = this.getClustererInstance();
        var markerPromise = this._mapsWrapper
            .createMarker({
            position: {
                lat: marker.latitude,
                lng: marker.longitude,
            },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
        }, false);
        Promise
            .all([clusterPromise, markerPromise])
            .then(function (_a) {
            var _b = tslib_1.__read(_a, 2), cluster = _b[0], marker = _b[1];
            return cluster.addMarker(marker);
        });
        this._markers.set(marker, markerPromise);
    };
    ClusterManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            _this._zone.run(function () {
                m.setMap(null);
                _this.getClustererInstance().then(function (cluster) {
                    cluster.removeMarker(m);
                    _this._markers.delete(marker);
                });
            });
        });
    };
    ClusterManager.prototype.clearMarkers = function () {
        return this.getClustererInstance().then(function (cluster) {
            cluster.clearMarkers();
        });
    };
    ClusterManager.prototype.setGridSize = function (c) {
        this.getClustererInstance().then(function (cluster) {
            cluster.setGridSize(c.gridSize);
        });
    };
    ClusterManager.prototype.setMaxZoom = function (c) {
        this.getClustererInstance().then(function (cluster) {
            cluster.setMaxZoom(c.maxZoom);
        });
    };
    ClusterManager.prototype.setStyles = function (c) {
        this.getClustererInstance().then(function (cluster) {
            cluster.setStyles(c.styles);
        });
    };
    ClusterManager.prototype.setZoomOnClick = function (c) {
        this.getClustererInstance().then(function (cluster) {
            if (c.zoomOnClick !== undefined) {
                cluster.zoomOnClick_ = c.zoomOnClick;
            }
        });
    };
    ClusterManager.prototype.setAverageCenter = function (c) {
        this.getClustererInstance().then(function (cluster) {
            if (c.averageCenter !== undefined) {
                cluster.averageCenter_ = c.averageCenter;
            }
        });
    };
    ClusterManager.prototype.setImagePath = function (c) {
        this.getClustererInstance().then(function (cluster) {
            if (c.imagePath !== undefined) {
                cluster.imagePath_ = c.imagePath;
            }
        });
    };
    ClusterManager.prototype.setMinimumClusterSize = function (c) {
        this.getClustererInstance().then(function (cluster) {
            if (c.minimumClusterSize !== undefined) {
                cluster.minimumClusterSize_ = c.minimumClusterSize;
            }
        });
    };
    ClusterManager.prototype.setImageExtension = function (c) {
        this.getClustererInstance().then(function (cluster) {
            if (c.imageExtension !== undefined) {
                cluster.imageExtension_ = c.imageExtension;
            }
        });
    };
    ClusterManager.prototype.createClusterEventObservable = function (eventName) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._zone.runOutsideAngular(function () {
                _this._clustererInstance.then(function (m) {
                    m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                });
            });
        });
    };
    ClusterManager.prototype.setCalculator = function (c) {
        this.getClustererInstance().then(function (cluster) {
            if (typeof c.calculator === 'function') {
                cluster.setCalculator(c.calculator);
            }
        });
    };
    ClusterManager = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [GoogleMapsAPIWrapper, NgZone])
    ], ClusterManager);
    return ClusterManager;
}(MarkerManager));
export { ClusterManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnbS9qcy1tYXJrZXItY2x1c3RlcmVyLyIsInNvdXJjZXMiOlsic2VydmljZXMvbWFuYWdlcnMvY2x1c3Rlci1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBRTVDLE9BQU8sK0JBQStCLENBQUM7QUFFdkMsT0FBTyxFQUFhLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVEzRTtJQUFvQywwQ0FBYTtJQUkvQyx3QkFBc0IsWUFBa0MsRUFBWSxLQUFhO1FBQWpGLFlBQ0Usa0JBQU0sWUFBWSxFQUFFLEtBQUssQ0FBQyxTQUkzQjtRQUxxQixrQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFBWSxXQUFLLEdBQUwsS0FBSyxDQUFRO1FBRS9FLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLE9BQU8sQ0FBMEIsVUFBQyxRQUFRO1lBQ3RFLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssT0FBdUI7UUFBNUIsaUJBS0M7UUFKQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDdkMsSUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFvQixHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFF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QUFjLENBa0oxQjtJQUFELHFCQUFDO0NBQUEsQUFsSkQsQ0FBb0MsYUFBYSxHQWtKaEQ7U0FsSlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0ICdqcy1tYXJrZXItY2x1c3RlcmVyLXVuaXZlcnNhbCc7XG5cbmltcG9ydCB7IEFnbU1hcmtlciwgR29vZ2xlTWFwc0FQSVdyYXBwZXIsIE1hcmtlck1hbmFnZXIgfSBmcm9tICdAYWdtL2NvcmUnO1xuaW1wb3J0IHsgTWFya2VyIH0gZnJvbSAnQGFnbS9jb3JlL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7IEFnbU1hcmtlckNsdXN0ZXIgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL21hcmtlci1jbHVzdGVyJztcbmltcG9ydCB7IENsdXN0ZXJPcHRpb25zLCBNYXJrZXJDbHVzdGVyZXJJbnN0YW5jZSB9IGZyb20gJy4uL2dvb2dsZS1jbHVzdGVyZXItdHlwZXMnO1xuXG5kZWNsYXJlIHZhciBNYXJrZXJDbHVzdGVyZXI6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsdXN0ZXJNYW5hZ2VyIGV4dGVuZHMgTWFya2VyTWFuYWdlciB7XG4gIHByaXZhdGUgX2NsdXN0ZXJlckluc3RhbmNlOiBQcm9taXNlPE1hcmtlckNsdXN0ZXJlckluc3RhbmNlPjtcbiAgcHJpdmF0ZSBfcmVzb2x2ZXI6IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfbWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBwcm90ZWN0ZWQgX3pvbmU6IE5nWm9uZSkge1xuICAgIHN1cGVyKF9tYXBzV3JhcHBlciwgX3pvbmUpO1xuICAgIHRoaXMuX2NsdXN0ZXJlckluc3RhbmNlID0gbmV3IFByb21pc2U8TWFya2VyQ2x1c3RlcmVySW5zdGFuY2U+KChyZXNvbHZlcikgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZXIgPSByZXNvbHZlcjtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQob3B0aW9uczogQ2x1c3Rlck9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXROYXRpdmVNYXAoKS50aGVuKG1hcCA9PiB7XG4gICAgICBjb25zdCBjbHVzdGVyZXIgPSBuZXcgTWFya2VyQ2x1c3RlcmVyKG1hcCwgW10sIG9wdGlvbnMpO1xuICAgICAgdGhpcy5fcmVzb2x2ZXIoY2x1c3RlcmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENsdXN0ZXJlckluc3RhbmNlKCk6IFByb21pc2U8TWFya2VyQ2x1c3RlcmVySW5zdGFuY2U+IHtcbiAgICByZXR1cm4gdGhpcy5fY2x1c3RlcmVySW5zdGFuY2U7XG4gIH1cblxuICBhZGRNYXJrZXIobWFya2VyOiBBZ21NYXJrZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjbHVzdGVyUHJvbWlzZTogUHJvbWlzZTxNYXJrZXJDbHVzdGVyZXJJbnN0YW5jZT4gPSB0aGlzLmdldENsdXN0ZXJlckluc3RhbmNlKCk7XG4gICAgY29uc3QgbWFya2VyUHJvbWlzZSA9IHRoaXMuX21hcHNXcmFwcGVyXG4gICAgICAuY3JlYXRlTWFya2VyKHtcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICBsYXQ6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICBsbmc6IG1hcmtlci5sb25naXR1ZGUsXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiBtYXJrZXIubGFiZWwsXG4gICAgICAgIGRyYWdnYWJsZTogbWFya2VyLmRyYWdnYWJsZSxcbiAgICAgICAgaWNvbjogbWFya2VyLmljb25VcmwsXG4gICAgICAgIG9wYWNpdHk6IG1hcmtlci5vcGFjaXR5LFxuICAgICAgICB2aXNpYmxlOiBtYXJrZXIudmlzaWJsZSxcbiAgICAgICAgekluZGV4OiBtYXJrZXIuekluZGV4LFxuICAgICAgICB0aXRsZTogbWFya2VyLnRpdGxlLFxuICAgICAgICBjbGlja2FibGU6IG1hcmtlci5jbGlja2FibGUsXG4gICAgICB9LCBmYWxzZSk7XG5cbiAgICBQcm9taXNlXG4gICAgICAuYWxsKFtjbHVzdGVyUHJvbWlzZSwgbWFya2VyUHJvbWlzZV0pXG4gICAgICAudGhlbigoW2NsdXN0ZXIsIG1hcmtlcl0pID0+IHtcbiAgICAgICAgcmV0dXJuIGNsdXN0ZXIuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgICB9KTtcbiAgICB0aGlzLl9tYXJrZXJzLnNldChtYXJrZXIsIG1hcmtlclByb21pc2UpO1xuICB9XG5cbiAgZGVsZXRlTWFya2VyKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbSA9IHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcik7XG4gICAgaWYgKG0gPT0gbnVsbCkge1xuICAgICAgLy8gbWFya2VyIGFscmVhZHkgZGVsZXRlZFxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbS50aGVuKChtOiBNYXJrZXIpID0+IHtcbiAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgbS5zZXRNYXAobnVsbCk7XG4gICAgICAgIHRoaXMuZ2V0Q2x1c3RlcmVySW5zdGFuY2UoKS50aGVuKGNsdXN0ZXIgPT4ge1xuICAgICAgICAgIGNsdXN0ZXIucmVtb3ZlTWFya2VyKG0pO1xuICAgICAgICAgIHRoaXMuX21hcmtlcnMuZGVsZXRlKG1hcmtlcik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhck1hcmtlcnMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2x1c3RlcmVySW5zdGFuY2UoKS50aGVuKGNsdXN0ZXIgPT4ge1xuICAgICAgY2x1c3Rlci5jbGVhck1hcmtlcnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldEdyaWRTaXplKGM6IEFnbU1hcmtlckNsdXN0ZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdldENsdXN0ZXJlckluc3RhbmNlKCkudGhlbihjbHVzdGVyID0+IHtcbiAgICAgIGNsdXN0ZXIuc2V0R3JpZFNpemUoYy5ncmlkU2l6ZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRNYXhab29tKGM6IEFnbU1hcmtlckNsdXN0ZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdldENsdXN0ZXJlckluc3RhbmNlKCkudGhlbihjbHVzdGVyID0+IHtcbiAgICAgIGNsdXN0ZXIuc2V0TWF4Wm9vbShjLm1heFpvb20pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0U3R5bGVzKGM6IEFnbU1hcmtlckNsdXN0ZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdldENsdXN0ZXJlckluc3RhbmNlKCkudGhlbihjbHVzdGVyID0+IHtcbiAgICAgIGNsdXN0ZXIuc2V0U3R5bGVzKGMuc3R5bGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFpvb21PbkNsaWNrKGM6IEFnbU1hcmtlckNsdXN0ZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdldENsdXN0ZXJlckluc3RhbmNlKCkudGhlbihjbHVzdGVyID0+IHtcbiAgICAgIGlmIChjLnpvb21PbkNsaWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2x1c3Rlci56b29tT25DbGlja18gPSBjLnpvb21PbkNsaWNrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0QXZlcmFnZUNlbnRlcihjOiBBZ21NYXJrZXJDbHVzdGVyKTogdm9pZCB7XG4gICAgdGhpcy5nZXRDbHVzdGVyZXJJbnN0YW5jZSgpLnRoZW4oY2x1c3RlciA9PiB7XG4gICAgICBpZiAoYy5hdmVyYWdlQ2VudGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2x1c3Rlci5hdmVyYWdlQ2VudGVyXyA9IGMuYXZlcmFnZUNlbnRlcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEltYWdlUGF0aChjOiBBZ21NYXJrZXJDbHVzdGVyKTogdm9pZCB7XG4gICAgdGhpcy5nZXRDbHVzdGVyZXJJbnN0YW5jZSgpLnRoZW4oY2x1c3RlciA9PiB7XG4gICAgICBpZiAoYy5pbWFnZVBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjbHVzdGVyLmltYWdlUGF0aF8gPSBjLmltYWdlUGF0aDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldE1pbmltdW1DbHVzdGVyU2l6ZShjOiBBZ21NYXJrZXJDbHVzdGVyKTogdm9pZCB7XG4gICAgdGhpcy5nZXRDbHVzdGVyZXJJbnN0YW5jZSgpLnRoZW4oY2x1c3RlciA9PiB7XG4gICAgICBpZiAoYy5taW5pbXVtQ2x1c3RlclNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjbHVzdGVyLm1pbmltdW1DbHVzdGVyU2l6ZV8gPSBjLm1pbmltdW1DbHVzdGVyU2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEltYWdlRXh0ZW5zaW9uKGM6IEFnbU1hcmtlckNsdXN0ZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdldENsdXN0ZXJlckluc3RhbmNlKCkudGhlbihjbHVzdGVyID0+IHtcbiAgICAgIGlmIChjLmltYWdlRXh0ZW5zaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2x1c3Rlci5pbWFnZUV4dGVuc2lvbl8gPSBjLmltYWdlRXh0ZW5zaW9uO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQ2x1c3RlckV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB7XG4gICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fY2x1c3RlcmVySW5zdGFuY2UudGhlbigobTogTWFya2VyQ2x1c3RlcmVySW5zdGFuY2UpID0+IHtcbiAgICAgICAgICBtLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgKGU6IFQpID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoZSkpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldENhbGN1bGF0b3IgKGM6IEFnbU1hcmtlckNsdXN0ZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdldENsdXN0ZXJlckluc3RhbmNlKCkudGhlbihjbHVzdGVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYy5jYWxjdWxhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNsdXN0ZXIuc2V0Q2FsY3VsYXRvcihjLmNhbGN1bGF0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=