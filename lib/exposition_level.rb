class ExpositionLevel
  DEFAULT_VALUES = {
    'Leve' => {'Baja' =>'Bajo', 'Media' => 'Bajo', 'Elevada' => 'Bajo'},
    'Moderado' => {'Baja' =>'Bajo', 'Media' =>'Medio', 'Elevada' =>'Medio'},
    'Importante' => {'Baja' =>'Medio', 'Media' =>'Alto', 'Elevada' =>'Alto'}
  }

  def self.getExpositionLevelValue(impact, probability)
    if Setting.plugin_redmine_emergya_adjustments['expositionLevels'].present?
      return Setting.plugin_redmine_emergya_adjustments['expositionLevels'][impact][probability]
    else 
      return DEFAULT_VALUES[impact][probability]
    end
  end

  def self.getCustomFieldId(name)
    return "issue_custom_field_values_"+(CustomField.find_by_name(name).id).to_s
  end

  def self.getTrackerId(name)
    return Tracker.find(:first, :conditions => ["name = '"+name+"'"]).id
  end
end
