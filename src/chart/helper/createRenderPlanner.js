import {makeInner} from '../../util/model';

/**
 * @return {string} If large mode changed, return string 'reset';
 */
export default function () {
    var inner = makeInner();

    return function (seriesModel) {
        var fields = inner(seriesModel);
        var pipelineContext = seriesModel.pipelineContext;

        var originalLarge = fields.large;
        var originalProgressive = fields.progressiveRender;

        var large = fields.large = pipelineContext.large;
        var progressive = fields.progressiveRender = pipelineContext.progressiveRender;

        return !!((originalLarge ^ large) || (originalProgressive ^ progressive)) && 'reset';
    };
}
