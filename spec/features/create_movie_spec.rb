require 'rails_helper'

feature 'create movie' do 
    scenario 'create new movie with valid data' do
        visit('/movies')
        click_on('New movie')

        fill_in 'movies[title]',	with: 'Adventure one'
        fill_in 'movies[content]',	with: 'This is amazing'
        click_on('submit')

        expect(page).to have_content('Successfully created')  
        
    end
end