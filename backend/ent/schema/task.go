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
		field.Uint32("uid").Positive(),
		field.String("lable"),
		field.Bool("complete"),
	}
}

// Edges of the Task.
func (Task) Edges() []ent.Edge {
	return nil
}
