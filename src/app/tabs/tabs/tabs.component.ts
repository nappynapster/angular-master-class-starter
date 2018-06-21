import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector:    'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls:   ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit
{
  // eine Component angeben oder #NAME in einem HTML Element
  @ContentChildren(TabComponent)
  protected tabs: QueryList<TabComponent>;

  constructor()
  {
  }

  ngAfterContentInit()
  {
    this.select(this.tabs.first);

    // triggers each time the query changes
    this.tabs.changes.subscribe(() =>
    {

    });
  }

  protected select(tab: TabComponent): void
  {
    this.tabs.forEach((tab) => tab.selected = false);

    tab.selected = true;
  }
}
