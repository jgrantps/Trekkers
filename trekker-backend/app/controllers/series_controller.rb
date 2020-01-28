class SeriesController < ApplicationController

    def index
        raise params.inspect
    end

    def show
        selected_series = Series.find("id" => params{:id})
        
        raise params.inspect
    end
    

end
