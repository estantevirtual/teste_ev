class ErrorsSerializer
  attr_reader :record

  def initialize(record)
    @record = record
  end

  def serialize
    record.errors.details.map do |field, details|
      details.each_with_index.map do |error_details, index_msg|
        msg = record.errors.messages[field][index_msg]
        serialize_field(record: record,
                        field: field,
                        details: error_details,
                        message: msg)
      end
    end.flatten
  end

  def serialize_field(record:, field:, details:, message:)
    ErrorsFieldSerializer.new(record, field, details, message).serialize
  end
end
