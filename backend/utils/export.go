package utils

import (
	"bytes"
	"encoding/csv"
	"github.com/google/uuid"
	"strconv"
	"strings"
	"teleform/db"
	"teleform/model"
)

func ExportToCSV(form *model.Form, responses []model.Response) ([]byte, error) {
	var buf bytes.Buffer
	w := csv.NewWriter(&buf)

	// Write header
	header := make([]string, 0)
	header = append(header, "User ID", "User", "Created At")

	questionsMapping := make(map[uuid.UUID]int)

	for _, question := range form.Questions {
		header = append(header, question.GetText())
		questionsMapping[question.ID] = len(header) - 1
	}

	err := w.Write(header)
	if err != nil {
		return nil, err
	}

	for _, response := range responses {
		row := make([]string, len(header))
		row[0] = strconv.Itoa(int(response.UserID))

		u, err := db.GetUser(int(response.UserID))
		if err != nil {
			continue
		}

		row[1] = strings.TrimSpace(u.FirstName + " " + u.LastName)
		row[2] = response.SubmittedAt.String()

		for _, answer := range response.Answers {
			row[questionsMapping[answer.QuestionID]] = strings.Join(answer.Content, ";")
		}

		err = w.Write(row)
		if err != nil {
			return nil, err
		}
	}

	w.Flush()

	return buf.Bytes(), nil
}
