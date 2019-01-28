require 'rails_helper'

feature 'create movie' do 
    scenario 'create new movie with valid data' do
        visit('/movies')
        click_on('New movie')

        fill_in 'title',	with: 'Adventure one'
        fill_in 'content',	with: 'This is amazing'
        click_on('submit')

        expect(page).to have_title('Adventure one')  
        
    end
end