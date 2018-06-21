import { Component } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector:    'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls:   ['./tabs.component.css']
})
export class TabsComponent
{
  protected tabs: Array<any> = [];

  constructor()
  {
  }

  protected select(tab: TabComponent): void
  {
    this.tabs.forEach((tab) => tab.selected = false);

    tab.selected = true;
  }

  public addTab(tab: TabComponent)
  {
    this.tabs.push(tab);
  }
}
