class SeriesController < ApplicationController

    def index
        raise params.inspect
    end

    def show
        series = Series.find(seriesParams[:id].to_i)
        render json: series.characters
        # byebugs
        # raise params.inspect
        
    end
    
    private

    def seriesParams
    params.permit(:id)    
    end

end
