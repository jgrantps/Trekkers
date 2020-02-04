class SelectionsController < ApplicationController


    def index
    end

    def show
    end

    def create
        new_selection = Selection.new(:user_id => currentUser.id, :character_id => selectionParams)
        character = Character.find(selectionParams)
        if new_selection.save 
            render json: {"message": "success", "selection": new_selection, "character": character}
        else
            render json: {"message": "error!"}
        end
        
       
       
        
    end

    def destroy
        
        selection = Selection.find(destroySelectionParams[:id])
        deadId = selection.id
        if selection.delete
            render json: UserSerializer.new(currentUser)
        else
            render json:{"message": "Not able to destroy!"}
        end
    end

    private
    def selectionParams
        params.require(:character).permit(data: [:id])[:data][:id].to_i
    end

    def destroySelectionParams
        params.permit(:id)
    end


end
