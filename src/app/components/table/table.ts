import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Output() action = new EventEmitter<{ actionKey: string; rowData: any }>();

  onAction(actionKey: string, rowData: any) {
    this.action.emit({ actionKey, rowData });
  }

  // helper to resolve label/class from flexible action definitions
  resolveLabel(act: any): string {
    if (!act) return '';
    if (typeof act === 'string') return this.titleCase(act);
    return act.label || this.titleCase(act.key);
  }

  resolveClass(act: any): string {
    if (!act) return '';
    if (typeof act === 'string') return act === 'delete' ? 'text-danger' : '';
    return act.class || (act.key === 'delete' ? 'text-danger' : '');
  }

  private titleCase(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

}
