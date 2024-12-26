import { EventData, Page } from '@nativescript/core';
import { PrashnaViewModel } from './prashna-view-model';

export function onNavigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new PrashnaViewModel();
}