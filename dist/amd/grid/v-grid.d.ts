import { ViewCompiler, Container, ViewResources, TaskQueue } from 'aurelia-framework';
import { MainMarkup } from './mainMarkup';
import { MainScrollEvents } from './mainScrollEvents';
import { RowMarkup } from './rowMarkup';
import { RowScrollEvents } from './rowScrollEvents';
import { ColumnMarkup } from './columnMarkup';
import { HtmlCache } from './htmlCache';
import { HtmlHeightWidth } from './htmlHeightWidth';
import { ViewSlots } from './viewSlots';
import { ColumnBindingContext } from './columnBindingContext';
import { RowDataBinder } from './rowDataBinder';
import { RowClickHandler } from './rowClickHandler';
import { GroupingElements } from './groupingElements';
import { Controller } from './controller';
import { LoadingScreen } from './loadingScreen';
import { ContextMenu } from './contextMenu';
import { ResizeShardContext, GridConnectorInterface, DragDropShardContext, ColConfig, BindingContext, OverrideContext } from '../interfaces';
export declare class VGrid {
    static inject: ({
        new (): Element;
        prototype: Element;
    } | typeof Container | typeof TaskQueue | typeof ViewResources | typeof ViewCompiler)[];
    element: Element;
    viewCompiler: ViewCompiler;
    container: Container;
    viewResources: ViewResources;
    taskQueue: TaskQueue;
    dragDropAttributeSharedContext: DragDropShardContext;
    resizeAttributeSharedContext: ResizeShardContext;
    colConfig: Array<ColConfig>;
    colRepeater: boolean;
    colRepeatRowTemplate: string;
    colRepeatRowHeaderTemplate: string;
    colGroupRow: string;
    customMenuTemplates: any;
    colGroupElement: string;
    newGrid: boolean;
    controller: Controller;
    htmlCache: HtmlCache;
    htmlHeightWidth: HtmlHeightWidth;
    viewSlots: ViewSlots;
    columnBindingContext: ColumnBindingContext;
    rowDataBinder: RowDataBinder;
    mainMarkup: MainMarkup;
    mainScrollEvents: MainScrollEvents;
    rowMarkup: RowMarkup;
    rowScrollEvents: RowScrollEvents;
    rowClickHandler: RowClickHandler;
    columnMarkup: ColumnMarkup;
    groupingElements: GroupingElements;
    loadingScreen: LoadingScreen;
    contextMenu: ContextMenu;
    bindingContext: BindingContext;
    overrideContext: OverrideContext;
    backupColConfig: Array<ColConfig>;
    filterOperatorNames: any;
    filterOperatorTranslationKeys: any;
    attRowHeight: number;
    attHeaderHeight: number;
    attFooterHeight: number;
    attPanelHeight: number;
    attGridConnector: GridConnectorInterface;
    attMultiSelect: boolean;
    attManualSelection: boolean;
    attTheme: string;
    attOnRowDraw: Function;
    attColConfig: Array<ColConfig>;
    attI18N: Function;
    attDataDelay: number;
    constructor(element: Element, viewCompiler: ViewCompiler, container: Container, viewResources: ViewResources, taskQueue: TaskQueue);
    bind(bindingContext: BindingContext, overrideContext: OverrideContext): void;
    unbind(): void;
    attached(): void;
    private checkBool(value);
}
