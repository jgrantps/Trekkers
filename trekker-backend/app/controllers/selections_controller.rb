class SelectionsController < ApplicationController


    def index
    end

    def show
    end

    def create
        
        new_selection = Selection.new(:user_id => currentUser.id, :character_id => selectionParams)
        character = Character.find(selectionParams)
        if new_selection.save 
            render json: {"message": "success", "body": new_selection, "character": character}
        else
            render json: {"message": "error!"}
        end
        
       
       
        
    end

    def destroy
    end

    private
    def selectionParams
        params.require(:character).permit(data: [:id])[:data][:id].to_i
    end

end
