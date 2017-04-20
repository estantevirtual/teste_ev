class ErrorsFieldSerializer
  def initialize(record, field, details, message)
    @record = record
    @field = field
    @details = details
    @message = message
  end

  def serialize
    {
      resource: resource,
      field: field,
      code: code,
      message: message
    }
  end

  private

  def resource
    I18n.t(
      underscored_resource_name,
      scope: [:resources],
      locale: :api,
      default: @record.class.to_s
    )
  end

  def field
    I18n.t(
      @field,
      scope: [:fields, underscored_resource_name],
      locale: :api,
      default: @field.to_s
    )
  end

  def code
    I18n.t(
      @details[:error],
      scope: [:errors, :codes],
      locale: :api,
      default: @details[:error].to_s
    )
  end

  def message
    I18n.t(
      @details[:error],
      scope: [:errors, :messages],
      locale: :api,
      default: "#{field} #{@message}"
    )
  end

  def underscored_resource_name
    @record.class.to_s.gsub('::', '').underscore
  end
end
