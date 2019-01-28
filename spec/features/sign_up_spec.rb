require 'rails_helper'

feature 'create category' do 
    scenario 'create new category with valid data' do
        visit('/')
        click_on('Sign up now!')

        fill_in 'name',	with: 'Tom'
        fill_in 'email',	with: 'tom@gmail.com'
        fill_in 'password',	with: '123456'
        fill_in 'password_confirmation',	with: '123456'
        click_on('submit')

        expect(page).to have_content('Successfully')  
        expect(Category.last.title).to eq('Action') 
    end
end