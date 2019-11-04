package schema

import (
	"github.com/facebookincubator/ent"
	"github.com/facebookincubator/ent/schema/field"
)

// Task holds the schema definition for the Task entity.
type Task struct {
	ent.Schema
}

// Fields of the Task.
func (Task) Fields() []ent.Field {
	return []ent.Field{
		field.String("lable"),
		field.Bool("isComplete"),
	}
}

// Edges of the Task.
func (Task) Edges() []ent.Edge {
	return nil
}
