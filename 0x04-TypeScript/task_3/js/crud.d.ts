import {RowID, RowElement} from './interface'
// import {insertRow, deleteRow, updateRow} from './crud'


declare function insertRow(arg: RowElement): number;
declare function updateRow(arg: RowID, arg2: RowElement): number;
declare function deleteRow(arg: RowID): void;
