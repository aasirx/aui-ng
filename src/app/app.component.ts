import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selection = [{value: 'js', label: 'Javascript111'}];
    selection2 = [];
    selected = {value: 'cs', label: 'CoffeeScript'};
    selected2 = null;
    items = [
        {value: 'js', label: 'Javascript111'},
        {value: 'cs', label: 'CoffeeScript'},
        {value: 'elm', label: 'Elm'},
        {value: 'ng', label: 'Angular', version: 2.0},
    ];

    addItem(option:String) {
        alert(1);
        this.items = this.items.concat([{value: 'item_' + Math.random(), label: 'Another'}]);
    }

    removeLast() {
        this.selection = this.selection.slice(0, -1);
    }

    onQuery(query) {
        setTimeout(function () {
            if (query.term && query.term.length > 0) {

                var items = [], i, j, s;
                for (i = 1; i < 5; i++) {
                    s = '';
                    for (j = 0; j < i; j++) {
                        s = s + query.term;
                    }
                    items.push({value: query.term + i, label: s, v: 5});
                }

                query.callback(items);
            }
        }, 1000);
    }
}
