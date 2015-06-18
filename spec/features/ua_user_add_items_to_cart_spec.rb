require 'rails_helper'

describe 'user is able to add items to cart', type: :feature do
  let(:item1) { Fabricate(:item) }
  let(:item2) { Fabricate(:item) }
  let(:category1) { Fabricate(:category) }
  let(:category2) { Fabricate(:category) }

  before(:each) do
    item1.categories << category1
    item2.categories << category2
    visit root_path
  end

  after(:each) do
    Fabrication.clear_definitions
  end

  it 'adds item to cart' do
    click_link('SHOP')
    expect(page).to have_content(item1.name)
    expect(page).to have_content(item1.description)
    expect(page).to have_content(item1.price)

    find('.select_tag', :match => :first).find(:xpath, 'option[2]').select_option
    click_button('ADD TO CART', :match => :first)

    expect(page).to have_content("You now have 1")

    find('.select_tag', :match => :first).find(:xpath, 'option[2]').select_option
    click_button('ADD TO CART', :match => :first)

    expect(page).to have_content("You now have 2")

  end

end