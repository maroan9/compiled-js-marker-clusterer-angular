import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { InfoWindowManager, MarkerManager } from '@agm/core';
import { ClusterManager } from '../services/managers/cluster-manager';
/**
 * AgmMarkerCluster clusters map marker if they are near together
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker-cluster>
 *        <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        </agm-marker>
 *        <agm-marker [latitude]="lat2" [longitude]="lng2" [label]="'N'">
 *        </agm-marker>
 *      </agm-marker-cluster>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarkerCluster = /** @class */ (function () {
    function AgmMarkerCluster(_clusterManager) {
        this._clusterManager = _clusterManager;
        this.clusterClick = new EventEmitter();
        this._observableSubscriptions = [];
    }
    /** @internal */
    AgmMarkerCluster.prototype.ngOnDestroy = function () {
        this._clusterManager.clearMarkers();
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /** @internal */
    AgmMarkerCluster.prototype.ngOnChanges = function (changes) {
        if (changes['gridSize']) {
            this._clusterManager.setGridSize(this);
        }
        if (changes['maxZoom']) {
            this._clusterManager.setMaxZoom(this);
        }
        if (changes['zoomOnClick']) {
            this._clusterManager.setZoomOnClick(this);
        }
        if (changes['averageCenter']) {
            this._clusterManager.setAverageCenter(this);
        }
        if (changes['minimumClusterSize']) {
            this._clusterManager.setMinimumClusterSize(this);
        }
        if (changes['imagePath']) {
            this._clusterManager.setImagePath(this);
        }
        if (changes['imageExtension']) {
            this._clusterManager.setImageExtension(this);
        }
        if (changes['calculator']) {
            this._clusterManager.setCalculator(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
    };
    AgmMarkerCluster.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            {
                name: 'clusterclick',
                handler: function () { return _this.clusterClick.emit(); },
            },
        ];
        handlers.forEach(function (obj) {
            var os = _this._clusterManager.createClusterEventObservable(obj.name).subscribe(obj.handler);
            _this._observableSubscriptions.push(os);
        });
    };
    /** @internal */
    AgmMarkerCluster.prototype.ngOnInit = function () {
        this._addEventListeners();
        this._clusterManager.init({
            gridSize: this.gridSize,
            maxZoom: this.maxZoom,
            zoomOnClick: this.zoomOnClick,
            averageCenter: this.averageCenter,
            minimumClusterSize: this.minimumClusterSize,
            styles: this.styles,
            imagePath: this.imagePath,
            imageExtension: this.imageExtension,
            calculator: this.calculator,
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AgmMarkerCluster.prototype, "gridSize", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AgmMarkerCluster.prototype, "maxZoom", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AgmMarkerCluster.prototype, "zoomOnClick", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AgmMarkerCluster.prototype, "averageCenter", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AgmMarkerCluster.prototype, "minimumClusterSize", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], AgmMarkerCluster.prototype, "styles", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], AgmMarkerCluster.prototype, "calculator", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AgmMarkerCluster.prototype, "imagePath", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AgmMarkerCluster.prototype, "imageExtension", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], AgmMarkerCluster.prototype, "clusterClick", void 0);
    AgmMarkerCluster = tslib_1.__decorate([
        Directive({
            selector: 'agm-marker-cluster',
            providers: [
                ClusterManager,
                { provide: MarkerManager, useExisting: ClusterManager },
                InfoWindowManager,
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [ClusterManager])
    ], AgmMarkerCluster);
    return AgmMarkerCluster;
}());
export { AgmMarkerCluster };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLWNsdXN0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdtL2pzLW1hcmtlci1jbHVzdGVyZXIvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL21hcmtlci1jbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFbkgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFNdEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBU0g7SUEwQ0UsMEJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUh6QyxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTlELDZCQUF3QixHQUFtQixFQUFFLENBQUM7SUFDQyxDQUFDO0lBRXhELGdCQUFnQjtJQUNoQixzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsc0NBQVcsR0FBWCxVQUFZLE9BQXdDO1FBQ2xELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJ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QUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsY0FBYztnQkFDZCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRTtnQkFDdkQsaUJBQWlCO2FBQ2xCO1NBQ0YsQ0FBQztpREEyQ3FDLGNBQWM7T0ExQ3hDLGdCQUFnQixDQTZHNUI7SUFBRCx1QkFBQztDQUFBLEFBN0dELElBNkdDO1NBN0dZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5mb1dpbmRvd01hbmFnZXIsIE1hcmtlck1hbmFnZXIgfSBmcm9tICdAYWdtL2NvcmUnO1xuaW1wb3J0IHsgQ2x1c3Rlck1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9jbHVzdGVyLW1hbmFnZXInO1xuXG5pbXBvcnQgeyBDYWxjdWxhdGVGdW5jdGlvbiwgQ2x1c3Rlck9wdGlvbnMsIENsdXN0ZXJTdHlsZSB9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1jbHVzdGVyZXItdHlwZXMnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBBZ21NYXJrZXJDbHVzdGVyIGNsdXN0ZXJzIG1hcCBtYXJrZXIgaWYgdGhleSBhcmUgbmVhciB0b2dldGhlclxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICBzZWxlY3RvcjogJ215LW1hcC1jbXAnLFxuICogIHN0eWxlczogW2BcbiAqICAgIGFnbS1tYXAge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgICAgPGFnbS1tYXJrZXItY2x1c3Rlcj5cbiAqICAgICAgICA8YWdtLW1hcmtlciBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbbGFiZWxdPVwiJ00nXCI+XG4gKiAgICAgICAgPC9hZ20tbWFya2VyPlxuICogICAgICAgIDxhZ20tbWFya2VyIFtsYXRpdHVkZV09XCJsYXQyXCIgW2xvbmdpdHVkZV09XCJsbmcyXCIgW2xhYmVsXT1cIidOJ1wiPlxuICogICAgICAgIDwvYWdtLW1hcmtlcj5cbiAqICAgICAgPC9hZ20tbWFya2VyLWNsdXN0ZXI+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20tbWFya2VyLWNsdXN0ZXInLFxuICBwcm92aWRlcnM6IFtcbiAgICBDbHVzdGVyTWFuYWdlcixcbiAgICB7IHByb3ZpZGU6IE1hcmtlck1hbmFnZXIsIHVzZUV4aXN0aW5nOiBDbHVzdGVyTWFuYWdlciB9LFxuICAgIEluZm9XaW5kb3dNYW5hZ2VyLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21NYXJrZXJDbHVzdGVyIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCwgQ2x1c3Rlck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGdyaWQgc2l6ZSBvZiBhIGNsdXN0ZXIgaW4gcGl4ZWxzXG4gICAqL1xuICBASW5wdXQoKSBncmlkU2l6ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSB6b29tIGxldmVsIHRoYXQgYSBtYXJrZXIgY2FuIGJlIHBhcnQgb2YgYSBjbHVzdGVyLlxuICAgKi9cbiAgQElucHV0KCkgbWF4Wm9vbTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBkZWZhdWx0IGJlaGF2aW91ciBvZiBjbGlja2luZyBvbiBhIGNsdXN0ZXIgaXMgdG8gem9vbSBpbnRvIGl0LlxuICAgKi9cbiAgQElucHV0KCkgem9vbU9uQ2xpY2s6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNlbnRlciBvZiBlYWNoIGNsdXN0ZXIgc2hvdWxkIGJlIHRoZSBhdmVyYWdlIG9mIGFsbCBtYXJrZXJzIGluIHRoZSBjbHVzdGVyLlxuICAgKi9cbiAgQElucHV0KCkgYXZlcmFnZUNlbnRlcjogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIG1pbmltdW0gbnVtYmVyIG9mIG1hcmtlcnMgdG8gYmUgaW4gYSBjbHVzdGVyIGJlZm9yZSB0aGUgbWFya2VycyBhcmUgaGlkZGVuIGFuZCBhIGNvdW50IGlzIHNob3duLlxuICAgKi9cbiAgQElucHV0KCkgbWluaW11bUNsdXN0ZXJTaXplOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFuIG9iamVjdCB0aGF0IGhhcyBzdHlsZSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgQElucHV0KCkgc3R5bGVzOiBDbHVzdGVyU3R5bGVbXTtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IGNhbGN1bGF0ZXMgdGhlIGNsdXN0ZXIgc3R5bGUgYW5kIHRleHQgYmFzZWQgb24gdGhlIG1hcmtlcnMgaW4gdGhlIGNsdXN0ZXIuXG4gICAqL1xuICBASW5wdXQoKSBjYWxjdWxhdG9yOiBDYWxjdWxhdGVGdW5jdGlvbjtcblxuICBASW5wdXQoKSBpbWFnZVBhdGg6IHN0cmluZztcbiAgQElucHV0KCkgaW1hZ2VFeHRlbnNpb246IHN0cmluZztcblxuICBAT3V0cHV0KCkgY2x1c3RlckNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSBfb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NsdXN0ZXJNYW5hZ2VyOiBDbHVzdGVyTWFuYWdlcikgeyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9jbHVzdGVyTWFuYWdlci5jbGVhck1hcmtlcnMoKTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzKSA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKGNoYW5nZXNbJ2dyaWRTaXplJ10pIHtcbiAgICAgIHRoaXMuX2NsdXN0ZXJNYW5hZ2VyLnNldEdyaWRTaXplKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snbWF4Wm9vbSddKSB7XG4gICAgICB0aGlzLl9jbHVzdGVyTWFuYWdlci5zZXRNYXhab29tKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snem9vbU9uQ2xpY2snXSkge1xuICAgICAgdGhpcy5fY2x1c3Rlck1hbmFnZXIuc2V0Wm9vbU9uQ2xpY2sodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydhdmVyYWdlQ2VudGVyJ10pIHtcbiAgICAgIHRoaXMuX2NsdXN0ZXJNYW5hZ2VyLnNldEF2ZXJhZ2VDZW50ZXIodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydtaW5pbXVtQ2x1c3RlclNpemUnXSkge1xuICAgICAgdGhpcy5fY2x1c3Rlck1hbmFnZXIuc2V0TWluaW11bUNsdXN0ZXJTaXplKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snaW1hZ2VQYXRoJ10pIHtcbiAgICAgIHRoaXMuX2NsdXN0ZXJNYW5hZ2VyLnNldEltYWdlUGF0aCh0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2ltYWdlRXh0ZW5zaW9uJ10pIHtcbiAgICAgIHRoaXMuX2NsdXN0ZXJNYW5hZ2VyLnNldEltYWdlRXh0ZW5zaW9uKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snY2FsY3VsYXRvciddKSB7XG4gICAgICB0aGlzLl9jbHVzdGVyTWFuYWdlci5zZXRDYWxjdWxhdG9yKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snc3R5bGVzJ10pIHtcbiAgICAgIHRoaXMuX2NsdXN0ZXJNYW5hZ2VyLnNldFN0eWxlcyh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2NsdXN0ZXJjbGljaycsXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHRoaXMuY2x1c3RlckNsaWNrLmVtaXQoKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBoYW5kbGVycy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGNvbnN0IG9zID0gdGhpcy5fY2x1c3Rlck1hbmFnZXIuY3JlYXRlQ2x1c3RlckV2ZW50T2JzZXJ2YWJsZShvYmoubmFtZSkuc3Vic2NyaWJlKG9iai5oYW5kbGVyKTtcbiAgICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gob3MpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX2NsdXN0ZXJNYW5hZ2VyLmluaXQoe1xuICAgICAgZ3JpZFNpemU6IHRoaXMuZ3JpZFNpemUsXG4gICAgICBtYXhab29tOiB0aGlzLm1heFpvb20sXG4gICAgICB6b29tT25DbGljazogdGhpcy56b29tT25DbGljayxcbiAgICAgIGF2ZXJhZ2VDZW50ZXI6IHRoaXMuYXZlcmFnZUNlbnRlcixcbiAgICAgIG1pbmltdW1DbHVzdGVyU2l6ZTogdGhpcy5taW5pbXVtQ2x1c3RlclNpemUsXG4gICAgICBzdHlsZXM6IHRoaXMuc3R5bGVzLFxuICAgICAgaW1hZ2VQYXRoOiB0aGlzLmltYWdlUGF0aCxcbiAgICAgIGltYWdlRXh0ZW5zaW9uOiB0aGlzLmltYWdlRXh0ZW5zaW9uLFxuICAgICAgY2FsY3VsYXRvcjogdGhpcy5jYWxjdWxhdG9yLFxuICAgIH0pO1xuICB9XG59XG4iXX0=