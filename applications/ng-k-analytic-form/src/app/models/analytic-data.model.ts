import { EventType } from './event.enum';

export class AnalyticDataModel {

    constructor(
        public id: string = '',
        public time: Date = new Date(),
        public type: EventType = EventType.NONE) {}

    public static clone(original: AnalyticDataModel): AnalyticDataModel {
        const copy: AnalyticDataModel = new AnalyticDataModel();
        if (!!original) {
            const { id, time, type } = original;
            copy.id = id;
            copy.time = time;
            copy.type = type;
        }
        return copy;
    }

    public static clones(originals: Array<AnalyticDataModel>): Array<AnalyticDataModel> {
        const copy: Array<AnalyticDataModel> = [];
        const length: number = Array.isArray(originals) ? originals.length : 0;
        for (let idx: number = 0; idx < length; idx++) {
            copy.push(AnalyticDataModel.clone(originals[idx]));
        }
        return copy;
    }
}

export class AnalyticDataLayer {

    constructor(
        public events: Array<AnalyticDataModel> = [],
        public initialized: Date = new Date()) {}

    public static clone(original: AnalyticDataLayer): AnalyticDataLayer {
        const copy: AnalyticDataLayer = new AnalyticDataLayer();
        if (!!original) {
            const { events, initialized } = original;
            copy.events = AnalyticDataModel.clones(events);
            copy.initialized = initialized;
        }
        return copy;
    }
}
