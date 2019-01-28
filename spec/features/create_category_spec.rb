require 'rails_helper'

feature 'create category' do 
    scenario 'create new category with valid data' do
        visit('/categories')
        click_on('New category')

        fill_in 'name',	with: 'Action'
        click_on('submit')

        expect(page).to have_content('Successfully created')  
        expect(Category.last.title).to eq('Action') 
    end
end