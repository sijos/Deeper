@resports.each do |resort|
  json.set! resort.id do
    json.extract! resort, :id, :name, :address, :zip, :city,
      :state_province, :country
  end
end
