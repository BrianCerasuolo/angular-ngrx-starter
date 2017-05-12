// define the rxjs operators needed by your app
// see node_module/rxjs/Rx.js for more

// statics
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/from';

// operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/ignoreElements';
