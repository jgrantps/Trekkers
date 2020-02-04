class SeriesController < ApplicationController

    def index
        raise params.inspect
    end

    def show
        series = Series.find(seriesParams[:id].to_i)
        render json: SeriesSerializer.new(series)        
    end
    
    private

    def seriesParams
    params.permit(:id)    
    end

end
