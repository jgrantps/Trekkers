class CharactersController < ApplicationController

    def index
    end

    def show
      character = Character.find(characterParams[:id].to_i)
      render json: CharacterSerializer.new(character)
    end

    def create
    end

    def destroy
    end

    private

    def characterParams
      params.permit(:id)    
      end

end
